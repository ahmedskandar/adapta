import React, { useState, useEffect, useRef } from "react";
import classes from "./Map.module.css";
import { MapContainer, FeatureGroup, TileLayer, Marker, Popup, Circle, LayerGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw"
import 'leaflet-draw'



const Map: React.FC = () => {

  const [coord, setPosition] = useState({
    lat: 0,
    lng: 0
  });

 let initialV = {
  lat: 0,
  lng: 0,
 }
  // const [initialV, setInitialV] = useState<any>({
  //   lat: 1.041114,
  //   lng: 35.221814
  // })

  const featureGroupRef = useRef<any>();
  
  // const [editableFG, setEditableFG] = useState();

  const _drawStart = (e: any) => {
    let type = e.layerType
    let layer = e.layer;

    //  console.log(editableFG) 

    if(featureGroupRef)
console.log(featureGroupRef.current)
    //It doesnt get the values
    
    
    
    
    if ( type === 'marker') {

       // here you have all the stored layers
   
      // console.log(e.layer._latlng.lat, e.layer._latlng.lng)
 
      //  setInitialV({
      //   lat: e.layer._latlng.lat,
      //   lng: e.layer._latlng.lng
      // })
      initialV = {
        lat: e.layer._latlng.lat,
        lng: e.layer._latlng.lng
    }
      // console.log(initialV.lat, initialV.lng)
      featureGroupRef.current._layers = Object.values(featureGroupRef.current._layers)
      delete featureGroupRef.current._layers[0]
      // featureGroupRef.current._layers.filter((element: any) => element._latlng !== initialV)
      console.log(featureGroupRef.current._layers)
    
    // featureGroupRef.current._layers.filter((layer: any) => layer._latlng.lat !== e.layer._latlng.lat)


    
    // Do marker specific actions

  } 
 
    // console.log(editableFG) It doesnt get the values

  // const drawnItems = editableFG.leafletElement._layers;
  // console.log(drawnItems);
  // if the number of layers is bigger than 1 then delete the first
  // if (Object.keys(drawnItems).length > 1) {
  //     Object.keys(drawnItems).forEach((layerid, index) => {
  //       if (index > 0) return;
  //       const layer = drawnItems[layerid];
  //       editableFG.leafletElement.removeLayer(layer);
          
  //     });
  //   }

}

// const onFeatureGroupReady = (reactFGref: any) => {
//   // store the featureGroup ref for future access to content
//   setEditableFG(reactFGref);
//   // if(editableFG)
//   // console.log(editableFG)

// };
  

  const useGeoLocation = () => {
    const [location, setLocation] = useState<any>({
      loaded: false,
      coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location: any) => {
      setLocation({
        loaded: true,
        coordinates: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });
    };

      const onError = (error: any) => {
        setLocation({
          loaded: true,
          error,
        });
      };
      
    useEffect(() => {
      if (!("geolocation" in navigator)) {
        onError({
          code: 0,
          message: "Geolocation not supported",
        });
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
  };

  const location = useGeoLocation();

  const location2 = location.loaded && !location.error;


  
  if(location.error) {
    return <div className={classes.container}>{location.error.message}</div>
  }
  
  if (!location2) {
    return <div className={classes.container}>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      <MapContainer
        center={
          !location2
            ? [40.7127281, -74.0060152]
            : [location.coordinates.lat, location.coordinates.lng]
        }
        zoom={14}
        scrollWheelZoom={true}
      >
        <FeatureGroup ref={featureGroupRef}>
          
                <EditControl
                  position="topright"
                  onCreated={_drawStart}
                  draw={
                    {
                      rectangle: false,
                    circle: false,
                    circlemarker: false,
                    polyline: false, 
                    /*marker: false,*/
                    }
                  }
                />
              </FeatureGroup>
        <TileLayer
          attribution='&copy; <a href=https://www.protectedplanet.net/en">Protected planet</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coord.lat, coord.lng]}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
