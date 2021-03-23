import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '700px'
};

const location = {
    lat: 23.810331,
    lng: 90.412521
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCyIrTQijVm8DpCJvbd_jNm-qlzLrXpS3k"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >

                <Marker
                    onLoad={onLoad}
                    position={location}
                />

            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)