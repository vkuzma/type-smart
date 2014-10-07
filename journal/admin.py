from django.contrib import admin
from models import Journal

class JournalAdmin(admin.ModelAdmin):
	fields = ('results', 'date')

admin.site.register(Journal, JournalAdmin)
