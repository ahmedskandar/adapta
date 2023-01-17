import React, { useState, useEffect } from "react";
import classes from "./Map.module.css";
import { MapContainer, FeatureGroup, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { EditControl } from "react-leaflet-draw"



const Map: React.FC = () => {

  const _created = (e: any) => console.log(e);


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
        <FeatureGroup>
                <EditControl
                  position="topright"
                  onCreated={_created}
                  draw={
                    {
                      /* rectangle: false,
                    circle: false,
                    circlemarker: false,
                    marker: false,
                    polyline: false, */
                    }
                  }
                />
              </FeatureGroup>
        <TileLayer
          attribution='&copy; <a href=https://www.protectedplanet.net/en">Protected planet</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
