# E-commerce Application

A full-stack e-commerce application with Django REST API backend and React frontend.

## 🏗️ Project Structure

```
ecommerce-app/
├── backend/          # Django REST API
├── frontend/         # React Application  
└── docker-compose.yml # Run both services
```

## 🚀 Quick Start (Both Backend & Frontend)

### Prerequisites
- Python 3.11+
- Node.js 18+
- Docker (optional)

### Option 1: Manual Setup
```bash
# Terminal 1 - Backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Terminal 2 - Frontend  
cd frontend
npm install
npm start
```

### Option 2: Docker (Recommended)
```bash
docker-compose up --build
```

## 📡 API Integration

**Backend runs on:** `http://localhost:8000`
**Frontend runs on:** `http://localhost:3000`

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/` | List all products |
| POST | `/api/products/` | Create product |
| GET | `/api/products/{id}/` | Get product |
| PUT | `/api/products/{id}/` | Update product |
| DELETE | `/api/products/{id}/` | Delete product |

### Product JSON Structure
```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description",
  "price": "99.99",
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}
```

## 👥 Team Responsibilities

### Backend Developer
- ✅ Django REST API development
- ✅ Database models and migrations
- ✅ API endpoint implementation
- ✅ Backend testing and documentation

### Frontend Developer  
- ✅ React component development
- ✅ UI/UX implementation
- ✅ API integration and state management
- ✅ Frontend testing

## 🧪 Testing

### Backend Testing
```bash
cd backend
python manage.py test
# Or test APIs manually at: http://localhost:8000/api/products/
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 📋 Development Workflow

1. **Backend developer** creates/updates API endpoints
2. **Frontend developer** integrates with API endpoints
3. Both test integration using the full-stack setup
4. Use GitHub issues for coordination

## 🐛 Common Issues

### CORS Errors
- Backend already configured for `localhost:3000`
- If issues persist, check `backend/ecommerce/settings.py`

### Port Conflicts
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:3000`
- Ensure ports are free before starting

## 📚 Documentation

- **Backend API:** See `backend/README.md`
- **Frontend:** See `frontend/README.md`
- **API Documentation:** Visit `http://localhost:8000/api/` when backend is running

## 🚢 Deployment

### Backend
- Ready for Heroku, AWS, DigitalOcean
- Docker image available

### Frontend
- Ready for Vercel, Netlify, AWS S3
- Build with `npm run build`

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes in respective `backend/` or `frontend/` directory
3. Test your changes
4. Create pull request with clear description

## 📞 Contact

- Backend Issues: Tag `@backend-dev`
- Frontend Issues: Tag `@frontend-dev`
- General Questions: Create GitHub issue