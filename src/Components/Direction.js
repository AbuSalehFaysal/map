import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

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

function Direction({origin}, {destination}) {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCyIrTQijVm8DpCJvbd_jNm-qlzLrXpS3k"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                {
                    origin !== '' && destination  !== '' && <DirectionsService
                    // required
                    options={{
                        destination: destination,
                        origin: origin,
                        travelMode: 'DRIVING'
                    }}
                    // required
                    callback={res => {
                        if (res !== null) {
                            setDirectionResponse(res);
                        }
                    }}
                />
                }

                
                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                  />
                }

            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)