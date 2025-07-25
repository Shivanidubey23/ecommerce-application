#Custom url names
from django.urls import path
from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView

urlpatterns = [
    # List all products AND create new product
    path('product/get/', ProductListCreateView.as_view(), {'http_method_names': ['get']}, name='product-list'),
    path('product/add/', ProductListCreateView.as_view(), {'http_method_names': ['post']}, name='product-add'),
    
    # Get, edit, and delete specific product
    path('product/get/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), {'http_method_names': ['get']}, name='product-detail'),
    path('product/edit/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), {'http_method_names': ['put', 'patch']}, name='product-edit'),
    path('product/delete/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), {'http_method_names': ['delete']}, name='product-delete'),
]