
# Opexon Lab Website

Opexon Lab is the parent digital product and brand website for a startup focused on building sustainable and efficient digital solutions across fintech, edtech, healthtech, and beyond.

The website serves as both an informational hub and a showcase platform for products developed under the Opexon Lab umbrella, with a clean, modern, and responsive design.

---

## Purpose
- Present Opexon Lab as a forward-thinking, multi-product startup.  
- Provide a central space to highlight launched and upcoming products.  
- Build trust with visitors through a professional and user-friendly experience.  
- Support internal teams with simple content management.

---

## Project Structure
```

OPEXONLAB/
├── backend/       # Django backend (REST APIs)
├── src/           # Vite + React frontend
├── public/        # Frontend public assets
└── README.md

````

---

## Getting Started

### Prerequisites
Make sure you have these installed:

- [Python 3.11+](https://www.python.org/downloads/)
- [Node.js 18+](https://nodejs.org/) with **npm** or **yarn**
- Git (optional, for version control)

---

### Backend: Django & DRF

The backend powers authentication, APIs, and admin features.

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
# Activate it
# macOS/Linux:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Create a superuser (optional)
python manage.py createsuperuser

# Start development server
python manage.py runserver
````

Backend runs at **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

### Frontend: Vite + React

The frontend is a fast React SPA powered by Vite.

```bash
# Go to the frontend folder
cd src

# Install packages
npm install
# or
yarn

# Start dev server
npm run dev
# or
yarn dev
```

Frontend runs at **[http://127.0.0.1:5173](http://127.0.0.1:5173)**

---

### Running Both Together

Open **two terminals**:

**Terminal 1** Backend:

```bash
cd backend
python manage.py runserver
```

**Terminal 2** Frontend:

```bash
cd src
npm run dev
```

Make sure your frontend API base URL matches your backend (`http://127.0.0.1:8000/api/`).

---

### Build & Deploy

#### Frontend

```bash
cd src
npm run build
```

The optimized build is generated in `dist/`.

#### Backend

* Set `DEBUG=False` in `settings.py`.
* Configure static files to serve the frontend build (optional) or host separately.

Example in `settings.py`:

```python
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / "dist"]
```

---

## Code Organization

| Folder            | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| `src/pages/`      | Main React pages (`LoginPage.jsx`, `GetStartedPage.jsx`, etc.) |
| `src/auth/`       | Authentication components (`Login.jsx`, `GetStarted.jsx`)      |
| `src/components/` | Reusable UI pieces                                             |
| `backend/`        | Django project and apps                                        |

---

## License

This project is proprietary to **Opexon Lab**.
No part may be copied or distributed without written permission.

