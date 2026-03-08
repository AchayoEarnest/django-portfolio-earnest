from django.shortcuts import render, redirect
from django.views.decorators.http import require_http_methods
from django.contrib import messages
from .forms import ContactForm
from .models import ContactMessage

# Portfolio content data
PORTFOLIO_DATA = {
    'name': 'Earnest Odhiambo Achayo',
    'title': 'Data Analyst | Software Engineer',
    'email': 'earnytechlive@gmail.com',
    'phone': ['0111486539', '0739536402'],
    'location': 'Kenya',
    'github': 'https://github.com/AchayoEarnest',
    'linkedin': 'https://linkedin.com/in/earnest-achayo',
    'summary': 'Results-driven Data Analyst with 4+ years experience in data management, analysis, visualization, and automated data pipelines across healthcare and technology sectors. Skilled in SQL, Python, Power BI, and statistical analysis, delivering actionable insights that improve operational efficiency and decision-making.',
    
    'typing_words': ['Data Analyst', 'Software Engineer', 'Data Storyteller'],
    
    'skills': {
        'programming': ['Python', 'SQL', 'JavaScript', 'R (Basic)'],
        'data_tools': ['Pandas', 'NumPy', 'SciPy', 'Excel', 'Google Sheets', 'Google App Scripts'],
        'visualization': ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
        'databases': ['MySQL', 'PostgreSQL', 'SQLite'],
        'systems': ['DHIS2', 'KHIS', 'EMR Systems', 'C-PAD'],
        'tools': ['Git/GitHub', 'Jupyter Notebook', 'VS Code', 'Agile workflows']
    },
    
    'soft_skills': [
        ('Data Storytelling', 95),
        ('Communication', 90),
        ('Problem Solving', 92),
        ('Leadership', 85),
    ],
    
    'experience': [
        {
            'position': 'Data Officer',
            'company': 'Center for Health Solutions (CHS)',
            'location': 'Ugenya Sub-County',
            'period': 'March 2023 – September 2025',
            'achievements': [
                'Automated reporting reducing processing time by 60%',
                'Improved data accuracy from 78% → 96%',
                'Built real-time dashboards for 5,000+ participants',
                'Statistical analysis improving service delivery by 35%',
            ]
        },
        {
            'position': 'Data Analyst & Software Developer',
            'company': 'Moringa School',
            'location': 'Kenya',
            'period': 'March 2022 – November 2022',
            'achievements': [
                'Built data-driven web applications',
                'Designed optimized SQL schemas',
                'Developed REST APIs',
            ]
        },
        {
            'position': 'Data Clerk & Health Information Analyst',
            'company': 'ICAP Kenya',
            'location': 'Kenya',
            'period': 'March 2013 – September 2016',
            'achievements': [
                'Data quality assessments across 10+ facilities',
                'Staff training on data management',
                'Health system data management',
            ]
        }
    ],
    
    'projects': [
        {
            'title': 'Health Program KPI Dashboard',
            'description': 'Power BI dashboard tracking 25+ KPIs with automated refresh for real-time program monitoring and leadership reporting.',
            'tools': ['Power BI', 'SQL', 'Data Visualization'],
            'github': '#',
            'image': 'placeholder-dashboard.jpg'
        },
        {
            'title': 'Data Quality Automation Pipeline',
            'description': 'Python-based ETL pipeline for automated data validation, cleaning, and quality assurance across multiple data sources.',
            'tools': ['Python', 'Pandas', 'SQL', 'Automation'],
            'github': '#',
            'image': 'placeholder-pipeline.jpg'
        },
        {
            'title': 'M&E Data Collection System',
            'description': 'Google App Scripts automated reporting system for seamless data collection, validation, and reporting workflows.',
            'tools': ['Google App Scripts', 'JavaScript', 'Data Management'],
            'github': '#',
            'image': 'placeholder-collection.jpg'
        },
        {
            'title': 'Trend Analysis & Forecasting',
            'description': 'Time series analysis and forecasting model for predicting program enrollment and identifying key trends.',
            'tools': ['Python', 'Statistical Analysis', 'Forecasting'],
            'github': '#',
            'image': 'placeholder-trends.jpg'
        }
    ],
    
    'certifications': [
        {'name': 'Data Analytics Certificate', 'issuer': 'ALX Africa', 'year': '2024'},
        {'name': 'Professional Foundations Certificate', 'issuer': 'ALX Africa', 'year': '2024'},
        {'name': 'Software Development Certificate', 'issuer': 'Moringa School', 'year': '2022'},
        {'name': 'Data Science Specialization', 'issuer': 'ALX Africa', 'year': 'Ongoing 2024'},
    ],
    
    'education': [
        {'degree': 'Data Science Course', 'school': 'ALX Africa', 'year': '2024 – 2025'},
        {'degree': 'Certificate in Software Development', 'school': 'Moringa School', 'year': '2022'},
        {'degree': 'Diploma in Information Technology', 'school': 'Foundation Institute of Africa', 'year': '2011'},
        {'degree': 'KCSE', 'school': 'Simenya Secondary School', 'year': '2010'},
    ],
}

def home(request):
    """Home page with hero section"""
    context = {
        'portfolio': PORTFOLIO_DATA,
    }
    return render(request, 'home.html', context)

def about(request):
    """About page with detailed background"""
    context = {
        'portfolio': PORTFOLIO_DATA,
    }
    return render(request, 'about.html', context)

def experience(request):
    """Experience and professional journey page"""
    context = {
        'portfolio': PORTFOLIO_DATA,
    }
    return render(request, 'experience.html', context)

def projects(request):
    """Projects showcase page"""
    context = {
        'portfolio': PORTFOLIO_DATA,
    }
    return render(request, 'projects.html', context)

def resume(request):
    """Resume page with certifications and education"""
    context = {
        'portfolio': PORTFOLIO_DATA,
    }
    return render(request, 'resume.html', context)

@require_http_methods(["GET", "POST"])
def contact(request):
    """Contact form page"""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Thank you! Your message has been sent successfully.')
            return redirect('contact')
    else:
        form = ContactForm()
    
    context = {
        'portfolio': PORTFOLIO_DATA,
        'form': form,
    }
    return render(request, 'contact.html', context)
