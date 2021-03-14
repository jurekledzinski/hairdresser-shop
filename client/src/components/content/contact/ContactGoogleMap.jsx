import React from "react";
import GoogleMapReact from "google-map-react";

import "./ContactGoogleMap.scss";

import ContactPinLocation from "./ContactPinLocation";

const ContactGoogleMap = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
<<<<<<< HEAD
          bootstrapURLKeys={{ key: "" }}
=======
          bootstrapURLKeys={{ key: "AIzaSyA6060GbTZYaFtJr3ytc-DyHB-POj5ACNk" }}
>>>>>>> dc100d99d7af5129efaba1a93452caf404640d9d
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <ContactPinLocation
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default ContactGoogleMap;
