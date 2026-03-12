# Birthday Gift - Django Website

A beautiful, colorful Django web application for displaying a personalized birthday welcome page.

## Features

- 🎂 Interactive birthday welcome page
- 💕 Pink and vibrant color scheme with animated gradient background
- ✨ Real-time name input with personalized greeting
- 🎈 Floating balloons and animated decorations
- 🎉 Confetti and hearts animation on celebration button
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions

## Project Structure

```
Tool_management/
├── manage.py
├── Tool_management/
│   ├── settings.py (Django configuration)
│   ├── urls.py (Main URL routing)
│   ├── wsgi.py
│   └── asgi.py
└── my_princess/
    ├── views.py (Contains birthday_welcome view)
    ├── urls.py (App URL routing)
    ├── migrations/
    ├── templates/
    │   └── my_princess/
    │       ├── base.html (Base template)
    │       └── birthday_welcome.html (Birthday page template)
    └── static/
        ├── css/
        │   └── style.css (Styling)
        └── js/
            └── script.js (Interactive JavaScript)
```

## Installation & Setup

### 1. Navigate to the project directory
```bash
cd Tool_management
```

### 2. Activate the virtual environment

**On Windows:**
```bash
..\birthday\Scripts\activate
```

**On macOS/Linux:**
```bash
source ../birthday/bin/activate
```

### 3. Run migrations (first time only)
```bash
python manage.py migrate
```

### 4. Collect static files
```bash
python manage.py collectstatic --noinput
```

### 5. Start the development server
```bash
python manage.py runserver
```

### 6. Access the website
Open your web browser and go to:
```
http://127.0.0.1:8000/
```

## Usage

1. The birthday welcome page will load with animated elements
2. Enter a name in the input field to personalize the greeting
3. Click the "Let's Party! 🎊" button to trigger confetti and heart animations
4. Enjoy the colorful celebration! 🎉

## Files Created

- **base.html** - Base template with static file configuration
- **birthday_welcome.html** - Main birthday welcome page
- **style.css** - All styling and animations
- **script.js** - Interactive functionality (confetti, hearts, name display)
- **urls.py** - App-level URL routing
- **views.py** - Updated with birthday_welcome view

## Configuration Changes

### settings.py
- Added `'my_princess'` to INSTALLED_APPS
- Static files already configured

### urls.py (Main)
- Added URL routing for `my_princess` app
- Birthday page accessible at root URL (`/`)

## Customization

### To change colors:
Edit `static/css/style.css` and modify the gradient colors in the `body` CSS rule:
```css
background: linear-gradient(135deg, #ff1493 0%, #ff69b4 25%, ...);
```

### To modify animations:
Edit the `@keyframes` sections in `style.css` or adjust timings in `script.js`

### To change text:
Edit `templates/my_princess/birthday_welcome.html`

## Browser Compatibility

Works on all modern browsers including:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## License

This project is free to use and modify.

## Support

For any issues or questions, check the Django documentation at:
https://docs.djangoproject.com/
