from django.db import models

class Hero(models.Model):
    hero_body_content = models.TextField()

class Section(models.Model):
    section_title_content = models.CharField(max_length=1000)
    section_body_content = models.TextField()

class Gallery(models.Model):
    gallery_title_content = models.CharField(max_length=1000)
    gallery_body_content = models.TextField()

    class Meta:
        verbose_name='gallery'
        verbose_name_plural='galleries'

class RoadMap(models.Model):
    roadmap_title_content = models.CharField(max_length=1000)
    roadmap_body_content = models.TextField()

class Box(models.Model):
    roadmap = models.ForeignKey(RoadMap, on_delete=models.CASCADE, related_name='roadmap_boxes')
    box_title_giveaway = models.CharField(max_length=1000)
    box_body_giveaway = models.TextField()

    class Meta:
        verbose_name='box'
        verbose_name_plural='boxes'

class WRP(models.Model):
    WRP_title_content = models.CharField(max_length=1000)
    WRP_body_content = models.TextField()