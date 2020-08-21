import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-ambulance',
  templateUrl: './trace-ambulance.component.html',
  styleUrls: ['./trace-ambulance.component.css']
})
export class TraceAmbulanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('working successfully.')
    this.loadMap()

  }
  loadMap() {
      // require(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/widgets/Zoom", "esri/layers/FeatureLayer"], function(Map, MapView, Graphic, GraphicsLayer, Zoom, FeatureLayer) {
          // map = new Map({
          //     basemap: $scope.baseMapType
          //   });
          // demoBaseMap = new Map({
          //     basemap: $scope.baseMapType
          //   });
          // new MapView({
          //     container: "previewOnMap",
          //     map: map,
          //     center: [85.824539, 20.296059],
          //     zoom: 10
          //   });
          // view = new MapView({
          //     container: "demoBaseMap",
          //     map: demoBaseMap,
          //     center: [85.824539, 20.296059],
          //     zoom: 10
          // });
          // graphicsLayer = new GraphicsLayer();
          // map.add(graphicsLayer);
          // GraphicInstance = Graphic;
          // FeatureLayerInstance = FeatureLayer;
      // });
  }

}
