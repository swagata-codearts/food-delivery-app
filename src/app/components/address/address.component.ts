import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ProductService } from 'src/app/services/product.service';
declare const google;
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  public folder: string;
  public map;
  public geocoder;
  marker;
  lat:any;
  long:any;
  @ViewChild('mapElement', {static: false}) mapElement;
  public formattedAddress;
  address: any;
  constructor(private productService:ProductService,private geolocation: Geolocation) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
      const myLatlng = new google.maps.LatLng(this.lat, this.long);
        this.geocoder = new google.maps.Geocoder();
        const mapOptions = {
          zoom: 15,
          center: myLatlng
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({
          position: myLatlng,
          map: this.map,
          draggable: true,
          title: 'Drag me!'
        });
        google.maps.event.addListener(this.marker, 'dragend', () => {
          this.geocodePosition(this.marker.getPosition());
        });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    
   
  }

  geocodePosition(pos) {
    this.geocoder.geocode({
      latLng: pos
    }, (responses) => {
      if (responses && responses.length > 0) {
        this.formattedAddress = responses[0].formatted_address;
      } else {
      }
    });
  }

}
