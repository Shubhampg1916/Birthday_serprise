## Quick Start Guide

### Step 1: Open PowerShell in the Tool_management folder
```powershell
cd c:\Users\EDIFY\Desktop\Birthday_gift\Tool_management
```

### Step 2: Activate Virtual Environment
```powershell
..\birthday\Scripts\Activate.ps1
```

If you get an execution policy error, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try activating again.

### Step 3: Run Migrations
```powershell
python manage.py migrate
```

### Step 4: Run Development Server
```powershell
python manage.py runserver
```

### Step 5: Open in Browser
Visit: **http://127.0.0.1:8000/**

---

## What You'll See

✅ A colorful birthday welcome page
✅ Input field to enter a name
✅ Dynamic greeting that updates as you type
✅ "Let's Party!" button with confetti animation
✅ Animated balloons, hearts, and gradient background

---

## Folder Structure Created

```
my_princess/
├── templates/
│   └── my_princess/
│       ├── base.html            ← Base template
│       └── birthday_welcome.html ← Birthday page
├── static/
│   ├── css/
│   │   └── style.css            ← All styling
│   └── js/
│       └── script.js            ← Interactive features
├── views.py                      ← Updated with birthday view
└── urls.py                       ← Created with routes
```

---

## To Stop the Server
Press `Ctrl + C` in the terminal

## To Deactivate Virtual Environment
```powershell
deactivate
```

---

Enjoy your birthday celebration! 🎂🎉
