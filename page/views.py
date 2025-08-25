import requests
from django.shortcuts import render
from django.conf import settings
from . import models

def main(request):
    hero = models.Hero.objects.all().first()
    section = models.Section.objects.all().first()
    gallery = models.Gallery.objects.all().first()
    road_map = models.RoadMap.objects.all().first()
    wrp = models.WRP.objects.all().first()


    context = {
        'hero': hero,
        'section': section,
        'gallery': gallery,
        'road_map': road_map,
        'wrp': wrp,
    }

    return render(request, 'page/main.html', context=context)

def mint(request):
    return render(request, 'page/mint.html')

def gallery(request, collection_slug='world-parrots'):
    world_parrot = models.WorldParrot.objects.all().first()

    context = {
        'collection_slug': collection_slug,
        'nfts': [],
        'error': None,
        'next_cursor': None,
        'world_parrot': world_parrot,
    }

    url = f"https://api.opensea.io/api/v2/collection/{collection_slug}/nfts"
    headers = {
        "X-API-KEY": settings.OPENSEA_API_KEY,
        "Accept": "application/json"
    }

    params = {
        "limit": request.GET.get("limit", 20),
    }
    if request.GET.get("next"):
        params["next"] = request.GET["next"]

    try:
        response = requests.get(url, headers=headers, params=params, timeout=10)
        if response.status_code == 200:
            data = response.json()
            context['nfts'] = data.get("nfts", [])
            context['next_cursor'] = data.get("next")
        else:
            context['error'] = f"error from OpenSea: {response.status_code}"
    except Exception as e:
        context['error'] = f"error: {str(e)}"

    return render(request, 'page/gallery.html', context)
