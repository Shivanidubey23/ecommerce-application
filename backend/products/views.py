# Views for api 
rom rest_framework import generics, status
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductListView(generics.ListAPIView):
    """GET /api/product/get/ - Listing all products"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductCreateView(generics.CreateAPIView):
    """POST /api/product/add/ - Creating new product"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductRetrieveView(generics.RetrieveAPIView):
    """GET /api/product/get/{id}/ - specific product"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductUpdateView(generics.UpdateAPIView):
    """PUT /api/product/edit/{id}/ - Updating product"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDeleteView(generics.DestroyAPIView):
    """DELETE /api/product/delete/{id}/ - Delete product"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)