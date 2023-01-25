import React, { useState, useEffect, useRef } from "react";
import classes from "./Map.module.css";
import { MapContainer, FeatureGroup, TileLayer, Marker, Popup, Circle, LayerGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw"
import 'leaflet-draw'
import { FormSliceI, MapI } from "../../data/interfaces";
import { useDispatch } from 'react-redux'
import { FormSliceActions } from "../../store/FormSlice";



const Map: React.FC<MapI> = ({coords}) => {

  const dispatch = useDispatch()



  const newMarkerCoords = useRef<any>({
    lat: 0,
    lng: 0
  })

  //On the outside use State, inside use Ref
    const [latlng, setlatlng] = useState<any>({
      lat: 0,
      lng: 0
    })



    // console.log(latlng)

  const featureGroupRef = useRef<any>();
  
  useEffect(() => {
  
  setlatlng({
    lat: coords.lat,
    lng: coords.lng
  })
},[coords])

 const _onCreated = (e: any) => {

    let type = e.layerType

  if ( type === 'marker') {



  newMarkerCoords.current.lat = e.layer._latlng.lat
  newMarkerCoords.current.lng = e.layer._latlng.lng
  
  setlatlng({
    lat: newMarkerCoords.current.lat,
    lng: newMarkerCoords.current.lng
  })

  dispatch(FormSliceActions.setLocation(`${e.layer._latlng.lat},${ e.layer._latlng.lng}`))


//   if(newMarkerCoords.current != undefined)
//   console.log(newMarkerCoords.current)

//     if(featureGroupRef)
// console.log(featureGroupRef.current)

    
      // featureGroupRef.current._layers = Object.values(featureGroupRef.current._layers)
      // delete featureGroupRef.current._layers[3]
      // console.log(featureGroupRef.current._layers)
    


    

  } 
 

  const drawnItems = featureGroupRef.current._layers;
  // console.log(drawnItems);
  // if the number of layers is bigger than 1 then delete the first
  if (Object.keys(drawnItems).length > 1) {
      Object.keys(drawnItems).forEach((layerid, index) => {
        if (index > 0) return;
        const layer = drawnItems[layerid];
        featureGroupRef.current.removeLayer(layer);
          
      });
    }

}
console.log(coords)

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
                  onCreated={_onCreated}
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
        <Marker position={[latlng.lat, latlng.lng]}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
