#Views for api with proper error handling 
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError, NotFound
from django.core.exceptions import ObjectDoesNotExist
from django.db import DatabaseError, IntegrityError
from decimal import Decimal, InvalidOperation
import logging

from .models import Product
from .serializers import ProductSerializer

logger = logging.getLogger(__name__)

class ProductListCreateView(generics.ListCreateAPIView):
    """
    GET: Listing all products
    POST: Creating a new product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request, *args, **kwargs):
        try:
            queryset = self.get_queryset()
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except DatabaseError as e:
            logger.error(f"Database error in product list: {str(e)}")
            return Response(
                {"error": "Database connection error. Please try again later."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )
        except Exception as e:
            logger.error(f"Unexpected error in product list: {str(e)}")
            return Response(
                {"error": "An unexpected error occurred."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def create(self, request, *args, **kwargs):
        try:
            # Validate price format
            if 'price' in request.data:
                try:
                    price = Decimal(str(request.data['price']))
                    if price <= 0:
                        return Response(
                            {"price": ["Price must be greater than 0"]},
                            status=status.HTTP_400_BAD_REQUEST
                        )
                except (InvalidOperation, ValueError):
                    return Response(
                        {"price": ["Invalid price format"]},
                        status=status.HTTP_400_BAD_REQUEST
                    )

            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                logger.info(f"Product created successfully: {serializer.data['name']}")
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
        except IntegrityError as e:
            logger.error(f"Database integrity error: {str(e)}")
            return Response(
                {"error": "Data integrity error. Please check your input."},
                status=status.HTTP_400_BAD_REQUEST
            )
        except DatabaseError as e:
            logger.error(f"Database error in product creation: {str(e)}")
            return Response(
                {"error": "Database connection error. Please try again later."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )
        except Exception as e:
            logger.error(f"Unexpected error in product creation: {str(e)}")
            return Response(
                {"error": "An unexpected error occurred while creating the product."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve a specific product
    PUT/PATCH: Update a product
    DELETE: Delete a product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(
                {"error": "Product not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        except DatabaseError as e:
            logger.error(f"Database error in product retrieve: {str(e)}")
            return Response(
                {"error": "Database connection error. Please try again later."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )
        except Exception as e:
            logger.error(f"Unexpected error in product retrieve: {str(e)}")
            return Response(
                {"error": "An unexpected error occurred."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def update(self, request, *args, **kwargs):
        try:
            # Validate price format if provided
            if 'price' in request.data:
                try:
                    price = Decimal(str(request.data['price']))
                    if price <= 0:
                        return Response(
                            {"price": ["Price must be greater than 0"]},
                            status=status.HTTP_400_BAD_REQUEST
                        )
                except (InvalidOperation, ValueError):
                    return Response(
                        {"price": ["Invalid price format"]},
                        status=status.HTTP_400_BAD_REQUEST
                    )

            partial = kwargs.pop('partial', False)
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data, partial=partial)
            
            if serializer.is_valid():
                serializer.save()
                logger.info(f"Product updated successfully: {instance.name}")
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
        except ObjectDoesNotExist:
            return Response(
                {"error": "Product not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        except IntegrityError as e:
            logger.error(f"Database integrity error in update: {str(e)}")
            return Response(
                {"error": "Data integrity error. Please check your input."},
                status=status.HTTP_400_BAD_REQUEST
            )
        except DatabaseError as e:
            logger.error(f"Database error in product update: {str(e)}")
            return Response(
                {"error": "Database connection error. Please try again later."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )
        except Exception as e:
            logger.error(f"Unexpected error in product update: {str(e)}")
            return Response(
                {"error": "An unexpected error occurred while updating the product."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            product_name = instance.name
            instance.delete()
            logger.info(f"Product deleted successfully: {product_name}")
            return Response(status=status.HTTP_204_NO_CONTENT)
            
        except ObjectDoesNotExist:
            return Response(
                {"error": "Product not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        except DatabaseError as e:
            logger.error(f"Database error in product deletion: {str(e)}")
            return Response(
                {"error": "Database connection error. Please try again later."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )
        except Exception as e:
            logger.error(f"Unexpected error in product deletion: {str(e)}")
            return Response(
                {"error": "An unexpected error occurred while deleting the product."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )