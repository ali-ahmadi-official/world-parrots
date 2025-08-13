from django.contrib import admin
from . import models

class BoxInline(admin.StackedInline):
    model = models.Box
    fk_name = 'roadmap'
    extra = 0

class HeroAdmin(admin.ModelAdmin):
    def has_delete_permission(self, request, obj = ...):
        return False
    
    def has_add_permission(self, request):
        return False
    
class SectionAdmin(admin.ModelAdmin):
    def has_delete_permission(self, request, obj = ...):
        return False
    
    def has_add_permission(self, request):
        return False

class GalleryAdmin(admin.ModelAdmin):
    def has_delete_permission(self, request, obj = ...):
        return False
    
    def has_add_permission(self, request):
        return False

class RoadMapAdmin(admin.ModelAdmin):
    inlines = [BoxInline]

    def has_delete_permission(self, request, obj = ...):
        return False
    
    def has_add_permission(self, request):
        return False
    
class WRPAdmin(admin.ModelAdmin):
    def has_delete_permission(self, request, obj = ...):
        return False
    
    def has_add_permission(self, request):
        return False


admin.site.register(models.Hero, HeroAdmin)
admin.site.register(models.Section, SectionAdmin)
admin.site.register(models.Gallery, GalleryAdmin)
admin.site.register(models.RoadMap, RoadMapAdmin)
admin.site.register(models.WRP, WRPAdmin)
