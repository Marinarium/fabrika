from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from extra_settings.models import Setting


class Technology(models.Model):
    name = models.CharField(max_length=255)
    material = models.ManyToManyField(
        'order.Material', related_name='technology_material', blank=True)
    working_cost = models.FloatField(default=0)
    time_factor = models.FloatField(default=0)
    starup_time = models.FloatField(default=0)
    postprocessing_time = models.FloatField(default=0.5)
    postprocessing_cost = models.FloatField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def materials(self):
        return ", ".join([str(material) for material in self.material.all()])

    class Meta:
        verbose_name = _('Technology')
        verbose_name_plural = _('Technologies')

    def __unicode__(self):
        return str(self.name)

    def __str__(self):
        return str(self.name)


class Material(models.Model):
    name = models.CharField(max_length=255)
    surface = models.ManyToManyField(
        'order.SurfaceFinish', related_name='material_surface', blank=True)
    color = models.ManyToManyField(
        'order.Color', related_name='material_color', blank=True)
    material_cost = models.FloatField(default=0)
    material_density = models.FloatField(default=0)
    material_difficulty_factor = models.FloatField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def colors(self):
        return ", ".join([str(color) for color in self.color.all()])

    def surfaces(self):
        return ", ".join([str(surface) for surface in self.surface.all()])

    class Meta:
        verbose_name = _('Material')
        verbose_name_plural = _('Materials')

    def __unicode__(self):
        return str(self.name)

    def __str__(self):
        return str(self.name)


class SurfaceFinish(models.Model):
    name = models.CharField(max_length=255)
    material_coating_cost = models.FloatField(default=0)
    coating_cost = models.FloatField(default=0)
    surface_finish = models.FloatField(default=0)
    coating_time = models.FloatField(default=0)
    coating_difficulty_factor = models.FloatField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _('Surface finish')
        verbose_name_plural = _('Surfacies finish')

    def __unicode__(self):
        return str(self.name)

    def __str__(self):
        return str(self.name)


class Color(models.Model):
    name = models.CharField(max_length=255)
    hex = models.CharField(max_length=255)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _('Color')
        verbose_name_plural = _('Colors')

    def __unicode__(self):
        return str(self.name)

    def __str__(self):
        return str(self.name)


class Order(models.Model):
    user = models.ForeignKey(
        'user.User', on_delete=models.CASCADE, related_name='order_user')
    time = models.FloatField(default=0)
    source_volume = models.FloatField(default=0)
    part_volume = models.FloatField(default=0)
    target_surface_area = models.FloatField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def get_price(self):
        cnc_net_cost = 0
        print_net_cost = 0
        surface_finish_cost = 0
        displayed_price = 0
        displayed_price_cnc = 0
        displayed_price_print = 0
        displayed_manufacturing_days = 0
        elements = Element.objects.filter(order=self)
        DRAW_COEFFICIENT = Setting.get(
            'EXTRA_DRAW_COEFFICIENT', default='django-extra-settings')
        TOLERANCE_COEFFICIENT = Setting.get(
            'EXTRA_TOLERANCE_COEFFICIENT', default='django-extra-settings')
        THREADS_COEFFICIENT = Setting.get(
            'EXTRA_THREADS_COEFFICIENT', default='django-extra-settings')
        URGENT_FACTOR = Setting.get(
            'EXTRA_URGENT_FACTOR', default='django-extra-settings')
        RISKY_FACTOR = Setting.get(
            'EXTRA_RISKY_FACTOR', default='django-extra-settings')
        ADDITIONAL_COST = Setting.get(
            'EXTRA_ADDITIONAL_COST', default='django-extra-settings')
        WORKPIECE_PRODUCTION_COST = Setting.get(
            'EXTRA_WORKPIECE_PRODUCTION_COST', default='django-extra-settings')
        WORKPIECE_VOLUME = Setting.get(
            'EXTRA_WORKPIECE_VOLUME', default='django-extra-settings')
        COMMISSION = Setting.get(
            'EXTRA_COMMISSION', default='django-extra-settings')
        COMMISSION_ADDITIONAL = Setting.get(
            'EXTRA_COMMISSION_ADDITIONAL', default='django-extra-settings')
        TIME_FOR_QA = Setting.get(
            'EXTRA_TIME_FOR_QA', default='django-extra-settings')
        MACHINING_TIME = Setting.get(
            'EXTRA_MACHINING_TIME', default='django-extra-settings')

        for element in elements:
            # func_cnc_quantity_factor(((var_material_cost * 1000 * var_material_density * workpiece_volume + workpiece_production_cost + (startup_time + production_time / 60 * var_material_difficulty_factor * draw_coefficient * tolerance_coefficient * threads_coefficient) * var_working_cost + postprocessing_time * var_postprocessing_cost) * urgent_factor * risky_factor + additional_cost) * quantity)
            cnc_net_cost += (element.material.material_cost * 1000 * element.material.material_density * WORKPIECE_PRODUCTION_COST + WORKPIECE_VOLUME + (element.technology.starup_time + self.time / 60 * element.material.material_difficulty_factor *
                                                                                                                                                         DRAW_COEFFICIENT * TOLERANCE_COEFFICIENT * THREADS_COEFFICIENT) * element.technology.working_cost * element.technology.postprocessing_time * element.technology.postprocessing_cost) * URGENT_FACTOR * RISKY_FACTOR * ADDITIONAL_COST
            # func_3dprint_quantity_factor(((var_material_cost * 1000 * var_material_density * detail_volume + support_volume + (startup_time + production_time / 60 * var_material_difficulty_factor * draw_coefficient * tolerance_coefficient * threads_coefficient) * var_working_cost + postprocessing_time * var_postprocessing_cost) * urgent_factor * risky_factor + additional_cost) * quantity)
            print_net_cost += (element.material.material_cost * 1000 * element.material.material_density * self.part_volume + WORKPIECE_VOLUME + (element.technology.starup_time + self.time / 60 * element.material.material_difficulty_factor *
                                                                                                                                                  DRAW_COEFFICIENT * TOLERANCE_COEFFICIENT * THREADS_COEFFICIENT) * element.technology.working_cost * element.technology.postprocessing_time * element.technology.postprocessing_cost) * URGENT_FACTOR * RISKY_FACTOR * ADDITIONAL_COST
            # surface_area / 1000000 * var_material_coating_cost + (coating difficulty factor * surface_area / coating speed) * coating cost
            surface_finish_cost += self.target_surface_area / 1000000 * element.material.material_cost + \
                (element.surface.coating_difficulty_factor * self.target_surface_area /
                 element.surface.surface_finish) * element.surface.coating_cost
            # ((Net cost + Surface finish time) × Commission + Additional commission) × (1 + 0.15)
            displayed_price += COMMISSION + COMMISSION_ADDITIONAL * 1.15
            # (RoundUpDays(technologist_time_factor*production_time + production_time + time_for_qa) + surface_time) * 1.5
            displayed_manufacturing_days += (
                (element.technology.time_factor + TIME_FOR_QA + MACHINING_TIME) + element.surface.coating_time) * 1.5

        displayed_price_cnc += cnc_net_cost * displayed_price
        displayed_price_print += print_net_cost * displayed_price
        return {
            'cnc_net_cost': cnc_net_cost,
            'print_net_cost': print_net_cost,
            'surface_finish_cost': surface_finish_cost,
            'displayed_price_cnc': displayed_price_cnc,
            'displayed_price_print': displayed_price_print
        }

    class Meta:
        verbose_name = _('Order')
        verbose_name_plural = _('Orders')

    def __unicode__(self):
        return str(self.user)

    def __str__(self):
        return str(self.user)


class Element(models.Model):
    order = models.ForeignKey(
        'order.Order', on_delete=models.CASCADE, related_name='element_order')
    user = models.ForeignKey(
        'user.User', on_delete=models.CASCADE, related_name='element_user')
    color = models.ForeignKey(
        'order.Color', on_delete=models.CASCADE, related_name='element_color')
    surface = models.ForeignKey(
        'order.SurfaceFinish', on_delete=models.CASCADE, related_name='element_surface')
    material = models.ForeignKey(
        'order.Material', on_delete=models.CASCADE, related_name='element_material')
    technology = models.ForeignKey(
        'order.Technology', on_delete=models.CASCADE, related_name='element_technology')
    file = models.FileField(blank=False, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _('Element')
        verbose_name_plural = _('Elements')

    def __unicode__(self):
        return str(self.order)

    def __str__(self):
        return str(self.order)
