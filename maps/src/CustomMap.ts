export interface Locatable {
  location: {
    lat: number;
    lng: number;
  };
  getMarkerContent(): string;
}

export class CustomMap {
  private map: google.maps.Map;

  constructor(parentElementId: string) {
    this.map = new google.maps.Map(document.getElementById(parentElementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(place: Locatable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: { 
        lat: place.location.lat, 
        lng: place.location.lng 
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: place.getMarkerContent()
      });

      infoWindow.open(this.map, marker);
    });
  }
}
