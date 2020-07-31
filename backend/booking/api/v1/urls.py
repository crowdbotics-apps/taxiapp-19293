from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BookingTransactionViewSet, MessageViewSet, RatingViewSet

router = DefaultRouter()
router.register("message", MessageViewSet)
router.register("bookingtransaction", BookingTransactionViewSet)
router.register("rating", RatingViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
