from django.db import models
import datetime


class Journal(models.Model):
	results = models.TextField('Resultate', blank=True, null=True)
	date = models.DateField('Datum', default=datetime.date.today, blank=True, null=True)