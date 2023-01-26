import React, { useState, useEffect, useRef } from "react";
import classes from "./Map.module.css";
import {
  MapContainer,
  FeatureGroup,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw";
import { MapI } from "../../data/interfaces";
import { useDispatch } from "react-redux";
import { FormSliceActions } from "../../store/FormSlice";
import { useGeoLocation } from "../../hooks/useGeolocation";


const Map: React.FC<MapI> = ({ coords }) => {


  const dispatch = useDispatch();

  const newMarkerCoords = useRef<any>({
    lat: 0,
    lng: 0,
  });

  //On the outside use State, inside use Ref
  const [latlng, setlatlng] = useState<any>({
    lat: undefined,
    lng: undefined,
  });

  // console.log(latlng)

  const featureGroupRef = useRef<any>();

  useEffect(() => {
    setlatlng({
      lat: +coords.lat,
      lng: +coords.lng,
    });
  }, [coords]);

  const _onCreated = (e: any) => {


    let type = e.layerType;

    if (type === "marker") {
      newMarkerCoords.current.lat = e.layer._latlng.lat;
      newMarkerCoords.current.lng = e.layer._latlng.lng;

      setlatlng({
        lat: newMarkerCoords.current.lat,
        lng: newMarkerCoords.current.lng,
      });

      dispatch(
        FormSliceActions.setLocation(
          `${e.layer._latlng.lat},${e.layer._latlng.lng}`
        )
      );

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
  };

  // const onFeatureGroupReady = (reactFGref: any) => {
  //   // store the featureGroup ref for future access to content
  //   setEditableFG(reactFGref);
  //   // if(editableFG)
  //   // console.log(editableFG)

  // };

  

  const geoLocation = useGeoLocation();


  // if(!(geoLocation.loaded && geoLocation.error != "Geolocation not supported")) {
  //   return <div className={classes.container}>{geoLocation.error}</div>;
  // } else {
  //   return <div className={classes.container}>Loading...</div>;
  // }

  let center: any



  if(geoLocation.loaded && !geoLocation.error) {
    center = [geoLocation.coordinates.lat, geoLocation.coordinates.lng]
  }


  //User denied geoLocation
  if(geoLocation.error && geoLocation.error.message !== "Geolocation not supported"){
    center = [-1.286389, 36.817223]
  } 
   if(!geoLocation.loaded) {
    return <div className={classes.container}>Loading...</div>;
  }

  if(geoLocation.error && geoLocation.error.message === "Geolocation not supported"){
    return <div className={classes.container}>{geoLocation.error.message}</div>
  } 

  // const location2 = geoLocation.loaded && !geoLocation.error;

  // if (geoLocation.error) {
  //   return <div className={classes.container}>{geoLocation.error.message}</div>;
  // }

  // if (!location2) {
  //   return <div className={classes.container}>Loading...</div>;
  // }

  return (
    <div className={classes.container}>
      <MapContainer
        center={center}
        
        zoom={14}
        scrollWheelZoom={true}
      >
        <FeatureGroup ref={featureGroupRef}>
          <EditControl
            position="topright"
            onCreated={_onCreated}
            draw={{
              rectangle: false,
              circle: false,
              circlemarker: false,
              polyline: false,
              /*marker: false,*/
            }}
          />
        </FeatureGroup>
        <TileLayer
          attribution='&copy; <a href=https://www.protectedplanet.net/en">Protected planet</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latlng.lat ? [latlng.lat, latlng.lng] : center}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
