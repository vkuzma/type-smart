# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('journal', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='journal',
            name='date',
            field=models.DateField(auto_now_add=True, verbose_name=b'Datum', null=True),
            preserve_default=True,
        ),
    ]
