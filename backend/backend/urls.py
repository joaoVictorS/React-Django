from django.urls import include, path
from rest_framework import routers
from .views import UserViewSet, GroupViewSet
from django.contrib import admin
from core.views import ListViewSet, ItemViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'list', ListViewSet)
router.register(r'item', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
