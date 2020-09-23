# Generated by Django 3.0.7 on 2020-08-19 21:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('order', '0003_auto_20200819_2032'),
    ]

    operations = [
        migrations.AddField(
            model_name='technology',
            name='material',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Technology_material', to='order.Material'),
        ),
        migrations.CreateModel(
            name='Element',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='element_order', to='order.Order')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='element_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Element',
                'verbose_name_plural': 'Element',
            },
        ),
    ]
