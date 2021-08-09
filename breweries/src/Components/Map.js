import GoogleMapReact from 'google-map-react';

function Map({data}) {
    const mapProps = {
        center: {
            lat: data.latitude,
            lng: data.longitude
        },
        zoom: 11
    }
    const MapMarker = ({ text }) => (
        <div style={{
            color: 'white', 
            background: '#BBDDFF',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
        }}>
            {text}
        </div>
    );

    return (
        //I've tried everything to get this to work with no luck
        <div style={{width: '800px', height: '400px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCPP824wzRg6E1wgmvqWgikDb4JdNS8VRk" }}
                center={mapProps.center}
                zoom={mapProps.zoom}>
                    <MapMarker 
                        lat={data.latitude} 
                        lng={data.longitude} 
                        text={data.city} 
                    />
            </GoogleMapReact>
        </div>
    )
}

export default Map;