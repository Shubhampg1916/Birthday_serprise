from django.shortcuts import render

# Create your views here.

def birthday_welcome(request):
    """
    View to display the birthday welcome page.
    """
    return render(request, 'my_princess/birthday_welcome.html')

def memories(request):
    print("Memories view called")
    """
    View to display the memories page.
    """
    return render(request, 'my_princess/Memories.html')

def Check_luck(request):
    print("Check_luck view called")
    """
    View to display the check luck page.
    """
    return render(request, 'my_princess/check_luck.html')

def why_i_love_you(request):
    print("why_i_love_you view called")
    """
    View to display the why I love you page.
    """
    return render(request, 'my_princess/why_i_love_you.html')


def final_message(request):
    return render(request, 'my_princess/Final_message.html')

