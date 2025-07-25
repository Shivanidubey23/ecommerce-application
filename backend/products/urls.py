# Product url file 
from django.urls import path
from .views import (
    ProductListView, 
    ProductCreateView,
    ProductRetrieveView,
    ProductUpdateView,
    ProductDeleteView
)

urlpatterns = [
    # List all products
    path('product/get/', ProductListView.as_view(), name='product-list'),
    
    # Add new product
    path('product/add/', ProductCreateView.as_view(), name='product-add'),
    
    # Get specific product
    path('product/get/<int:pk>/', ProductRetrieveView.as_view(), name='product-detail'),
    
    # Edit product
    path('product/edit/<int:pk>/', ProductUpdateView.as_view(), name='product-edit'),
    
    # Delete product
    path('product/delete/<int:pk>/', ProductDeleteView.as_view(), name='product-delete'),
]