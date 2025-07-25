# E-commerce Backend API

A simple Django REST API for managing products with CRUD operations.

## Features

- **Product Management**: Create, Read, Update, Delete products
- **Product Fields**: name, description, price, timestamps
- **REST API**: JSON-based API endpoints
- **CORS Enabled**: Ready for frontend integration
- **Docker Support**: Containerized deployment
- **Admin Interface**: Django admin for easy management

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/` | List all products |
| POST | `/api/products/` | Create a new product |
| GET | `/api/products/{id}/` | Get a specific product |
| PUT | `/api/products/{id}/` | Update a product (full) |
| PATCH | `/api/products/{id}/` | Update a product (partial) |
| DELETE | `/api/products/{id}/` | Delete a product |

## Quick Start

### Local Development

1. **Clone and setup**:
```bash
git clone <your-repo>
cd ecommerce-backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

2. **Run migrations**:
```bash
python manage.py makemigrations
python manage.py migrate
```

3. **Create superuser** (optional):
```bash
python manage.py createsuperuser
```

4. **Start server**:
```bash
python manage.py runserver
```

API will be available at: `http://localhost:8000/api/`

### Docker Deployment

1. **Build and run**:
```bash
docker build -t ecommerce-backend .
docker run -p 8000:8000 ecommerce-backend
```

2. **Run migrations in container**:
```bash
docker exec -it <container-id> python manage.py migrate
```

## API Usage Examples

### Create Product
```bash
curl -X POST http://localhost:8000/api/products/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "Gaming laptop with high performance",
    "price": "999.99"
  }'
```

### Get All Products
```bash
curl http://localhost:8000/api/products/
```

### Update Product
```bash
curl -X PUT http://localhost:8000/api/products/1/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Laptop",
    "description": "Updated description",
    "price": "1099.99"
  }'
```

### Delete Product
```bash
curl -X DELETE http://localhost:8000/api/products/1/
```

## Project Structure

```
ecommerce-backend/
├── ecommerce/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── products/
│   ├── __init__.py
│   ├── admin.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   └── views.py
├── manage.py
├── requirements.txt
├── Dockerfile
└── README.md
```

## Response Format

### Product Object
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "Gaming laptop with high performance",
  "price": "999.99",
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}
```

### Error Response
```json
{
  "field_name": ["Error message"]
}
```

## Testing

Run tests with:
```bash
python manage.py test
```

## Admin Interface

Access Django admin at `http://localhost:8000/admin/` (after creating superuser)

## Configuration

- **Database**: SQLite (default) - ready for production databases
- **CORS**: Configured for localhost:3000 (React frontend)
- **Debug**: Enabled for development

## Production Notes

- Change `SECRET_KEY` in settings.py
- Set `DEBUG = False`
- Configure proper database (PostgreSQL recommended)
- Set up proper CORS origins
- Use environment variables for sensitive settings

## Frontend Integration

This API is ready to work with any frontend framework. CORS is configured for React apps running on `localhost:3000`.

Example fetch in JavaScript:
```javascript
// Get all products
const response = await fetch('http://localhost:8000/api/products/');
const products = await response.json();

// Create product
const newProduct = await fetch('http://localhost:8000/api/products/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'New Product',
    description: 'Product description',
    price: '29.99'
  })
});
```