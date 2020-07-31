from django.contrib import admin
from .models import UserWallet, PaymentMethod, DriverWallet

admin.site.register(DriverWallet)
admin.site.register(PaymentMethod)
admin.site.register(UserWallet)

# Register your models here.
