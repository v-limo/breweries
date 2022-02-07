import React from 'react'
import GoogleMapReact from 'google-map-react'

function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  }

  return (
    <div className='flex justify-center w-[1090px] m-auto h-screen font-sans uppercase align-center first-letter:font-extrabold'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' /> */}
      </GoogleMapReact>
    </div>
  )
}

export default Map
