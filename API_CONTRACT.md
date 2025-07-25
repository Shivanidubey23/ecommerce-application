# API Contract

## Base URL
```
https://your-app-name.onrender.com/api/
```

## Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/product/get/` | List all products |
| POST | `/product/add/` | Create new product |
| GET | `/product/get/{id}/` | Get product by ID |
| PUT | `/product/edit/{id}/` | Update product |
| DELETE | `/product/delete/{id}/` | Delete product |

## Product Model
```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description",
  "price": "99.99",
  "created_at": "2025-07-25T10:30:00Z",
  "updated_at": "2025-07-25T10:30:00Z"
}
```

## Request Examples

### Create Product
```javascript
fetch('/api/product/add/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Product Name",
    description: "Description",
    price: "99.99"
  })
})
```

## Error Responses
- `400` - Validation errors
- `404` - Product not found

## Validation Rules
- `name`: Required
- `description`: Required  
- `price`: Required, must be > 0