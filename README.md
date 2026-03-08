# Earnest Achayo - Professional Portfolio Website

A modern, recruiter-ready portfolio website built with Django, showcasing data analytics and software engineering expertise.

## 🎯 Features

- **Modern Design**: Professional, refined aesthetic with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dynamic Content**: All information managed through Django templates and views
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Semantic HTML, meta tags, and Open Graph optimization
- **Dark/Light Friendly**: Professional color scheme that works in all contexts

## 📋 Project Structure

```
portfolio_project/
├── portfolio_app/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── forms.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
├── portfolio_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── templates/
│   ├── base.html
│   ├── home.html
│   ├── about.html
│   ├── experience.html
│   ├── projects.html
│   ├── resume.html
│   └── contact.html
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── (profile images)
├── manage.py
├── requirements.txt
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)
- Git (optional)

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   cd portfolio_project
   ```

2. **Create Virtual Environment**
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate
   
   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Database Migrations**
   ```bash
   python manage.py migrate
   ```

5. **Create Superuser (Admin Account)**
   ```bash
   python manage.py createsuperuser
   # Follow prompts to set username, email, and password
   ```

6. **Collect Static Files**
   ```bash
   python manage.py collectstatic --noinput
   ```

7. **Run Development Server**
   ```bash
   python manage.py runserver
   ```

8. **Access the Website**
   - Main site: http://localhost:8000
   - Admin panel: http://localhost:8000/admin

## 📄 Page Structure

### Home Page (`/`)
- Hero section with profile image and typing animation
- Professional summary
- Quick action buttons (View Projects, Contact)
- Quick statistics cards
- Call-to-action section

### About Page (`/about/`)
- Career journey narrative
- Technical skills organized by category
- Soft skills with progress bars
- Core competencies overview

### Experience Page (`/experience/`)
- Professional experience timeline
- Job descriptions with achievements
- Impact metrics and statistics

### Projects Page (`/projects/`)
- Showcase of featured projects
- Project cards with descriptions and technologies
- Project categories section
- Links to GitHub repositories

### Resume Page (`/resume/`)
- Certifications list
- Educational background
- Core competencies summary
- Download CV button
- By-the-numbers statistics

### Contact Page (`/contact/`)
- Contact form with validation
- Contact information display
- Social media links
- Response time notice

## ⚙️ Configuration

### Update Portfolio Information

Edit `portfolio_app/views.py` and modify the `PORTFOLIO_DATA` dictionary:

```python
PORTFOLIO_DATA = {
    'name': 'Your Name',
    'title': 'Your Title',
    'email': 'your@email.com',
    'phone': ['phone1', 'phone2'],
    'location': 'Your Location',
    'github': 'https://github.com/yourusername',
    'linkedin': 'https://linkedin.com/in/yourprofile',
    # ... rest of the data
}
```

### Email Configuration

For production, configure email in `portfolio_project/settings.py`:

```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
DEFAULT_FROM_EMAIL = 'your-email@gmail.com'
```

### Add Profile Image

1. Save your profile image as `profile.jpg` in `static/images/`
2. Update the CSS in `style.css` to use a background-image property if desired

## 🎨 Customization

### Colors
Edit CSS variables in `static/css/style.css`:

```css
:root {
    --primary-color: #0f766e;
    --primary-light: #14b8a6;
    --secondary-color: #0d47a1;
    --accent-color: #f97316;
    /* ... more colors ... */
}
```

### Typography
Fonts are imported from Google Fonts. Change in `templates/base.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap" rel="stylesheet">
```

### Add New Pages

1. Create a new template in `templates/`
2. Add a view function in `portfolio_app/views.py`
3. Add a URL pattern in `portfolio_app/urls.py`
4. Update navigation in `templates/base.html`

## 🌐 Deployment

### Deploying to Render (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Render Account** at https://render.com

3. **Create New Web Service**
   - Connect your GitHub repository
   - Set Build Command: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
   - Set Start Command: `gunicorn portfolio_project.wsgi`

4. **Set Environment Variables**
   - Add `DEBUG=False`
   - Generate a new `SECRET_KEY`
   - Add your domain to `ALLOWED_HOSTS`

### Deploying to PythonAnywhere

1. Upload project files
2. Create virtual environment
3. Configure WSGI file
4. Set up scheduled tasks for migrations
5. Configure custom domain

### Deploying to Heroku

1. Create `Procfile`:
   ```
   web: gunicorn portfolio_project.wsgi
   ```

2. Create `runtime.txt`:
   ```
   python-3.11.0
   ```

3. Deploy using Heroku CLI

## 📧 Contact Form Setup

The contact form uses Django's console email backend by default (messages print to console).

For production:
1. Configure SMTP settings (Gmail recommended)
2. Create an app-specific password
3. Update EMAIL_HOST_USER and EMAIL_HOST_PASSWORD

Messages are also saved to the database and accessible via Django admin.

## 🔒 Security

- CSRF protection enabled
- Secret key should be changed for production
- Set `DEBUG = False` before deploying
- Use environment variables for sensitive data
- Enable HTTPS in production

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Desktop computers (1920px and above)
- Tablets (768px - 1024px)
- Mobile phones (320px - 767px)

## 🎭 Browser Support

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Optimization

- Semantic HTML5 structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured heading hierarchy
- Alt text for images
- Fast page load times

## 📊 Analytics

Add Google Analytics or other tracking services by adding code to `templates/base.html`.

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change the port
python manage.py runserver 8001
```

### Static Files Not Loading
```bash
python manage.py collectstatic --clear --noinput
```

### Database Errors
```bash
python manage.py migrate --run-syncdb
```

### Templates Not Found
- Ensure `templates/` folder is in the project root
- Check `TEMPLATES` setting in `settings.py`

## 📝 License

This portfolio is personal and proprietary. 

## 🤝 Support

For questions or issues, contact: earnytechlive@gmail.com

## 📞 Contact Information

- **Email**: earnytechlive@gmail.com
- **Phone**: 0111486539 / 0739536402
- **Location**: Kenya
- **GitHub**: https://github.com/AchayoEarnest
- **LinkedIn**: https://linkedin.com/in/earnest-achayo

---

**Built with Django, Bootstrap 5, and Modern Web Standards**
