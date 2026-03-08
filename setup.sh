#!/bin/bash

# Portfolio Project Quick Setup Script
# This script automates the initial setup process

set -e

echo "=========================================="
echo "Portfolio Website - Quick Setup"
echo "=========================================="
echo ""

# Check Python version
echo "Checking Python version..."
python_version=$(python3 --version 2>&1 | awk '{print $2}')
echo "✓ Python $python_version detected"
echo ""

# Create virtual environment
echo "Creating virtual environment..."
if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo "✓ Virtual environment created"
else
    echo "✓ Virtual environment already exists"
fi

# Activate virtual environment
echo ""
echo "Activating virtual environment..."
source venv/bin/activate
echo "✓ Virtual environment activated"

# Install dependencies
echo ""
echo "Installing dependencies..."
pip install -q -r requirements.txt
echo "✓ Dependencies installed"

# Run migrations
echo ""
echo "Running database migrations..."
python manage.py migrate --noinput
echo "✓ Migrations completed"

# Collect static files
echo ""
echo "Collecting static files..."
python manage.py collectstatic --noinput --clear > /dev/null 2>&1
echo "✓ Static files collected"

# Create superuser
echo ""
echo "=========================================="
echo "Create Admin Account"
echo "=========================================="
echo "Enter details for the admin account:"
python manage.py createsuperuser

echo ""
echo "=========================================="
echo "✓ Setup Complete!"
echo "=========================================="
echo ""
echo "To start the development server, run:"
echo "  source venv/bin/activate"
echo "  python manage.py runserver"
echo ""
echo "Then visit:"
echo "  http://localhost:8000       (Portfolio)"
echo "  http://localhost:8000/admin (Admin Panel)"
echo ""
