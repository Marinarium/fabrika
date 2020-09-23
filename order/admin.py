  
from __future__ import unicode_literals

from django.contrib import admin

from .models import *

class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name', 'working_cost', 'starup_time', 'postprocessing_cost', 'materials')
    date_hierarchy = 'created_date'

admin.site.register(Technology, TechnologyAdmin)

class MaterialAdmin(admin.ModelAdmin):
    list_display = ('name', 'material_cost', 'material_density', 'material_difficulty_factor', 'surfaces', 'colors')
    date_hierarchy = 'created_date'

admin.site.register(Material, MaterialAdmin)

class SurfaceFinishAdmin(admin.ModelAdmin):
    list_display = ('name',)
    date_hierarchy = 'created_date'

admin.site.register(SurfaceFinish, SurfaceFinishAdmin)

class ColorAdmin(admin.ModelAdmin):
    list_display = ('name',)
    date_hierarchy = 'created_date'

admin.site.register(Color, ColorAdmin)

class OrderAdmin(admin.ModelAdmin):
    pass

admin.site.register(Order, OrderAdmin)

class ElementAdmin(admin.ModelAdmin):
    pass

admin.site.register(Element, ElementAdmin)


