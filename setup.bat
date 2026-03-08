@echo off
REM Portfolio Project Quick Setup Script for Windows

echo.
echo ==========================================
echo Portfolio Website - Quick Setup for Windows
echo ==========================================
echo.

REM Check Python
echo Checking Python version...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Python is not installed or not in PATH
    echo Please install Python from https://www.python.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('python --version') do set python_version=%%i
echo ✓ %python_version% detected
echo.

REM Create virtual environment
echo Creating virtual environment...
if not exist "venv" (
    python -m venv venv
    echo ✓ Virtual environment created
) else (
    echo ✓ Virtual environment already exists
)
echo.

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat
echo ✓ Virtual environment activated
echo.

REM Install dependencies
echo Installing dependencies...
pip install -q -r requirements.txt
if %errorlevel% neq 0 (
    echo Error installing dependencies
    pause
    exit /b 1
)
echo ✓ Dependencies installed
echo.

REM Run migrations
echo Running database migrations...
python manage.py migrate --noinput
if %errorlevel% neq 0 (
    echo Error running migrations
    pause
    exit /b 1
)
echo ✓ Migrations completed
echo.

REM Collect static files
echo Collecting static files...
python manage.py collectstatic --noinput --clear >nul 2>&1
echo ✓ Static files collected
echo.

REM Create superuser
echo ==========================================
echo Create Admin Account
echo ==========================================
echo Enter details for the admin account:
python manage.py createsuperuser

echo.
echo ==========================================
echo ✓ Setup Complete!
echo ==========================================
echo.
echo To start the development server, run:
echo   venv\Scripts\activate.bat
echo   python manage.py runserver
echo.
echo Then visit:
echo   http://localhost:8000       (Portfolio)
echo   http://localhost:8000/admin (Admin Panel)
echo.
pause
