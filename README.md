# 🛒 Django React E-Commerce

A full-stack e-commerce web application built with **Django REST Framework** on the backend and **React.js** on the frontend. This project demonstrates a modern, decoupled architecture where a Python-powered API serves a dynamic React UI — covering everything from product browsing to cart management and order checkout.

---


## 🚀 Project video

https://github.com/user-attachments/assets/966e8fab-81e1-4fb6-b527-cac9dfc6d313

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup (Django)](#backend-setup-django)
  - [Frontend Setup (React)](#frontend-setup-react)
  - [Environment Variables](#environment-variables)
- [API Reference](#-api-reference)
- [Database Models](#-database-models)
- [Application Screenshots](#-application-screenshots)
- [Running Tests](#-running-tests)
- [Production Build & Deployment](#-production-build--deployment)
- [Roadmap & Future Improvements](#-roadmap--future-improvements)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 📌 Project Overview

This application implements a complete e-commerce workflow using a **decoupled (headless) architecture**:

| Layer | Technology | Responsibility |
|-------|-----------|----------------|
| Frontend | React.js | UI rendering, state management, API communication |
| Backend | Django + DRF | Business logic, authentication, REST APIs |
| Database | SQLite | Data persistence (products, orders, users) |

The React frontend communicates with the Django backend exclusively through REST API calls — making the frontend easily replaceable or extensible (e.g., a mobile app could consume the same API).



---

## 🛠 Tech Stack

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Python | 3.9+ | Core language |
| Django | 4.x | Web framework |
| Django REST Framework | 3.x | REST API layer |
| SQLite | Built-in | Development database |

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React.js | 18.x | UI framework |
| JavaScript (ES6+) | — | Frontend logic |
| HTML5 / CSS3 | — | Markup and styling |

### Dev Tools
| Tool | Purpose |
|------|---------|
| Node.js + npm | Frontend dependency management |
| Git | Version control |
| Virtualenv | Python environment isolation |
| `.env` | Environment configuration |

---

## ✨ Features

### 👤 User Features
- **Registration & Authentication** — Create an account and securely log in
- **Product Browsing** — View the full product catalog with details
- **Product Search** — Find products quickly by name or category
- **Shopping Cart** — Add, remove, and update product quantities
- **Order Summary** — Review items and total before checkout
- **Checkout Flow** — Complete a purchase end-to-end

### 📦 Product Management
- Dynamic product catalog loaded via API
- Product detail pages with full descriptions
- Category-based organization

### 🛒 Cart System
- Persistent cart state across page refreshes
- Real-time quantity updates
- Automatic total price calculation
- Clear cart on successful order

### 🔌 Backend API
- RESTful endpoints for all resources
- JSON responses for seamless frontend integration
- Django ORM-powered data queries
- Modular app structure for scalability

---

## 🏗 System Architecture

```
┌─────────────────────────────────┐
│         React Frontend          │
│  (Components, State, API calls) │
└────────────────┬────────────────┘
                 │ HTTP / REST API (JSON)
                 ▼
┌─────────────────────────────────┐
│       Django REST Framework     │
│  (Views, Serializers, URLs)     │
└────────────────┬────────────────┘
                 │ Django ORM
                 ▼
┌─────────────────────────────────┐
│         SQLite Database         │
│  (Products, Orders, Users)      │
└─────────────────────────────────┘
```

**Request Flow:**
1. User interacts with the React UI
2. React makes an API call to a Django endpoint (e.g., `GET /api/products/`)
3. Django queries the database via ORM models
4. Django serializes the data to JSON and returns a response
5. React receives the JSON and updates the UI accordingly

---

## 📁 Project Structure

```
django-react-ecommerce/
│
├── core/                        # Main Django project settings
│   ├── settings.py              # Project configuration
│   ├── urls.py                  # Root URL routing
│   └── wsgi.py                  # WSGI entry point
│
├── home/                        # Django app — homepage & core views
│   ├── models.py                # Product & Order database models
│   ├── serializers.py           # DRF serializers (model → JSON)
│   ├── views.py                 # API view logic
│   ├── urls.py                  # App-level URL routing
│   └── admin.py                 # Django admin config
│
├── src/                         # React frontend source
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │   └── CartItem.js
│   ├── pages/                   # Page-level components
│   │   ├── Home.js
│   │   ├── ProductDetail.js
│   │   └── Cart.js
│   ├── App.js                   # Root React component + routing
│   ├── index.js                 # React DOM entry point
│   └── api.js                   # Centralized API utility functions
│
├── public/                      # Static public assets (favicon, index.html)
│
├── manage.py                    # Django CLI entry point
├── db.sqlite3                   # SQLite development database
├── requirements.txt             # Python dependencies
├── package.json                 # Node.js dependencies
├── .env                         # Environment variables (never commit this)
└── .gitignore
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed before proceeding:

- **Python** 3.9 or higher → [Download](https://www.python.org/downloads/)
- **Node.js** 16 or higher + npm → [Download](https://nodejs.org/)
- **Git** → [Download](https://git-scm.com/)

Verify installations:
```bash
python --version    # Python 3.9+
node --version      # v16+
npm --version       # 8+
git --version
```

---

### Backend Setup (Django)

#### 1. Clone the Repository
```bash
git clone https://github.com/mirz7/django-react-ecommerce.git
cd django-react-ecommerce
```

#### 2. Create a Virtual Environment
```bash
python -m venv env
```

#### 3. Activate the Virtual Environment

**Windows:**
```bash
env\Scripts\activate
```

**macOS / Linux:**
```bash
source env/bin/activate
```

You should see `(env)` prepended to your terminal prompt, confirming the environment is active.

#### 4. Install Python Dependencies
```bash
pip install -r requirements.txt
```

#### 5. Apply Database Migrations
```bash
python manage.py migrate
```

#### 6. (Optional) Create a Superuser for Admin Access
```bash
python manage.py createsuperuser
```
Follow the prompts to set a username, email, and password. You can then access the Django admin panel at `http://127.0.0.1:8000/admin`.

#### 7. (Optional) Load Sample Data
```bash
python manage.py loaddata fixtures/sample_products.json
```

#### 8. Start the Backend Server
```bash
python manage.py runserver
```

The Django API will be available at: **`http://127.0.0.1:8000`**

---

### Frontend Setup (React)

> Open a **new terminal window** while the Django server is still running.

#### 1. Install Node Dependencies
```bash
npm install
```

#### 2. Start the React Development Server
```bash
npm start
```

The React app will open automatically at: **`http://localhost:3000`**

React is pre-configured to proxy API requests to `http://127.0.0.1:8000`, so both servers must be running simultaneously during development.

---

### Environment Variables

Create a `.env` file in the root directory. Never commit this file to version control.

```env
# Django
SECRET_KEY=your-very-secret-django-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# React (must be prefixed with REACT_APP_)
REACT_APP_API_URL=http://127.0.0.1:8000/api
```

> **Note:** Django's `SECRET_KEY` should be a long, random string. You can generate one with:
> ```bash
> python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
> ```

---

## 📡 API Reference

Base URL: `http://127.0.0.1:8000/api/`

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products/` | Retrieve all products |
| `GET` | `/api/products/:id/` | Retrieve a single product |
| `POST` | `/api/products/` | Create a new product *(admin only)* |
| `PUT` | `/api/products/:id/` | Update a product *(admin only)* |
| `DELETE` | `/api/products/:id/` | Delete a product *(admin only)* |

**Example Response — `GET /api/products/`:**
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "Premium noise-cancelling headphones",
    "price": "89.99",
    "image": "/media/products/headphones.jpg",
    "stock": 25
  }
]
```

### Cart / Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/cart/` | Get current user's cart |
| `POST` | `/api/cart/add/` | Add a product to cart |
| `PUT` | `/api/cart/update/:id/` | Update item quantity |
| `DELETE` | `/api/cart/remove/:id/` | Remove an item from cart |
| `POST` | `/api/orders/checkout/` | Place an order |

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register/` | Register a new user |
| `POST` | `/api/auth/login/` | Login and receive token |
| `POST` | `/api/auth/logout/` | Logout and invalidate token |

---

## 🗄 Database Models

### Product
```python
class Product(models.Model):
    name        = models.CharField(max_length=255)
    description = models.TextField()
    price       = models.DecimalField(max_digits=10, decimal_places=2)
    image       = models.ImageField(upload_to='products/')
    stock       = models.IntegerField(default=0)
    created_at  = models.DateTimeField(auto_now_add=True)
```

### Order
```python
class Order(models.Model):
    user        = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at  = models.DateTimeField(auto_now_add=True)
    is_complete = models.BooleanField(default=False)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
```

### OrderItem
```python
class OrderItem(models.Model):
    order    = models.ForeignKey(Order, on_delete=models.CASCADE)
    product  = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
```

---

## 🧪 Running Tests

### Backend Tests (Django)
```bash
# Run all tests
python manage.py test

# Run tests for a specific app
python manage.py test home

# Run with verbosity
python manage.py test --verbosity=2
```

### Frontend Tests (React)
```bash
# Run tests once
npm test -- --watchAll=false

# Run in interactive watch mode
npm test
```

---

## 🚢 Production Build & Deployment

### Build the React Frontend
```bash
npm run build
```
This generates an optimized, minified build in the `/build` directory. Django is configured to serve these static files in production.

### Configure Django for Production

In `core/settings.py`, update the following before deploying:

```python
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']
STATIC_ROOT = BASE_DIR / 'staticfiles'
```

Then collect static files:
```bash
python manage.py collectstatic
```

### Deployment Options

| Platform | Approach |
|----------|----------|
| **Heroku** | `Procfile` + `gunicorn` + `whitenoise` for static files |
| **AWS EC2** | `nginx` + `gunicorn` + systemd service |
| **Vercel** | Deploy the React `/build` folder as a static site |
| **Docker** | Containerize Django + React with `docker-compose` |
| **Railway** | Push-to-deploy with automatic migrations |

---

## 🗺 Roadmap & Future Improvements

| Feature | Priority | Status |
|---------|----------|--------|
| Payment gateway (Stripe / PayPal) | High | 🔲 Planned |
| JWT authentication | High | 🔲 Planned |
| Product search & filters | Medium | 🔲 Planned |
| Product reviews & ratings | Medium | 🔲 Planned |
| Order tracking system | Medium | 🔲 Planned |
| Admin dashboard (custom) | Medium | 🔲 Planned |
| Docker + docker-compose setup | Low | 🔲 Planned |
| Cloud deployment (AWS / Vercel) | Low | 🔲 Planned |
| Email notifications | Low | 🔲 Planned |
| Wishlist feature | Low | 🔲 Planned |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** against the `main` branch

Please follow these guidelines:
- Write clear commit messages (use [Conventional Commits](https://www.conventionalcommits.org/) style)
- Add or update tests for any new functionality
- Keep PRs focused — one feature or fix per PR
- Update documentation if needed

---

## 🐛 Troubleshooting

**`ModuleNotFoundError` when running Django**
> Make sure your virtual environment is activated: `source env/bin/activate` (Mac/Linux) or `env\Scripts\activate` (Windows)

**React app can't connect to Django API**
> Ensure both servers are running simultaneously. Check the `proxy` field in `package.json` points to `http://127.0.0.1:8000`.

**`CORS` errors in the browser**
> Install and configure `django-cors-headers`:
> ```bash
> pip install django-cors-headers
> ```
> Then add `"corsheaders"` to `INSTALLED_APPS` and `http://localhost:3000` to `CORS_ALLOWED_ORIGINS` in `settings.py`.

**Database errors after pulling new changes**
> Run migrations again: `python manage.py migrate`

---

## 👨‍💻 Author

**Muhammed Mirza**

Computer Science Graduate | Cloud & Backend Development Enthusiast

- GitHub: [@mirz7](https://github.com/mirz7)

---


<div align="center">
  <sub>Built with ❤️ using Django and React</sub>
</div>
