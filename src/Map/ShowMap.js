import React, { useState, useRef, useEffect } from 'react'
import { Map, Marker, Popup, TileLayer, Circle, withLeaflet } from 'react-leaflet'
import ReactLeafletSearch from "react-leaflet-search";
import Search from "react-leaflet-search";
import MeasureControl from 'react-leaflet-measure';
import MeasureControlDefault from 'react-leaflet-measure';

import './map.css';

const mapSettings = {
    center: [31.955075, 34.814135],
    defaultBaseMap: 'OpenStreetMap',
    zoom: 3,
    tileLayerUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}
const measureOptions = {
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'acres',
    activeColor: '#db4a29',
    completedColor: '#9b2d14',
    center: [31.48649332452159, 34.94201626628637]
};

const ShowMap = (props) => {

    const [currnetPos, setCurrentPos] = useState(null)
    const [secondPos, setSecondPos] = useState(null)
    const [isValid, setIsValid] = useState(false)
    const [colorCircle, setColor] = useState(false)

    useEffect(() => {
        if (isValid) {
            setColor('green')
        } else {
            setColor('red')
        }
    }, [isValid])

    const serchCom = useRef(null)


    const getCordinet = (e) => {
        setCurrentPos(e.latlng)
        if (secondPos && e.latlng.distanceTo(secondPos) <= 500) {
            setIsValid(true)
            setColor('green')
        } else {
            setIsValid(false)
            setColor('red')
        }
    }
    const handleChane = (e) => {
        setCurrentPos(e.latLng)
        if (secondPos && e.latLng.distanceTo(secondPos) <= 500) {
            setIsValid(true)
            setColor('green')

        } else {
            setIsValid(false)
            setColor('red')
        }
    }

    const handleSecondChange = (e) => {
        if (!currnetPos) {
            alert("you should enter first address first")
        } else {
            setSecondPos(e.latLng)
            if (currnetPos.distanceTo(e.latLng) <= 500) {
                setIsValid(true)
            } else {
                setIsValid(false)
            }
        }
    }
    const MeasureControl = withLeaflet(MeasureControlDefault);


    return (
        <div className="leaflet-container">
            <Map center={currnetPos ? currnetPos : measureOptions.center} zoom={currnetPos ? 15 : 8} onclick={getCordinet} >
                <TileLayer
                    url={mapSettings.tileLayerUrl}
                />
                {currnetPos &&
                    <Marker position={currnetPos} zoom={15}  >
                        <Circle
                            center={currnetPos}
                            radius={500}
                            color={colorCircle}
                        />
                    </Marker>
                }
                {secondPos &&
                    <Marker
                        position={secondPos} >
                    </Marker>
                }
                {(!isValid && secondPos)
                    && <Circle
                        center={secondPos}
                        radius={500}
                        color={colorCircle}
                    />
                }

                <Search
                    inputPlaceholder="Enter first address"
                    onChange={handleChane}
                    closeResultsOnClick={true}
                    ref={serchCom}
                    zoom={15}
                    showMarker={false}
                />
                <Search
                    inputPlaceholder="Enter second address"
                    onChange={handleSecondChange}
                    showMarker={false}
                    closeResultsOnClick={true}
                    zoom={15}

                />
                <MeasureControl {...measureOptions} />
            </Map>

        </div >
    )
}
export default ShowMap