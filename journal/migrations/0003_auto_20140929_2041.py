# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('journal', '0002_journal_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='journal',
            name='date',
            field=models.DateField(default=datetime.date.today, null=True, verbose_name=b'Datum', blank=True),
        ),
    ]
