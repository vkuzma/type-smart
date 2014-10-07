# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Journal',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('comment', models.TextField(null=True, verbose_name=b'Kommentar', blank=True)),
                ('results', models.TextField(null=True, verbose_name=b'Resultate', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
