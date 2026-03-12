from django.urls import path
from . import views

app_name = 'my_princess'

urlpatterns = [
    path('', views.birthday_welcome, name='birthday_welcome'),
    path('memories/', views.memories, name='memories'),
    path('check_luck/', views.Check_luck, name='Check_luck'),
    path('why_i_love_you/', views.why_i_love_you, name='why_i_love_you'),
    path('final_message', views.final_message, name='final_message')
]
