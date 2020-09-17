import React, { useState, useRef, useEffect } from 'react'
import { Map, Marker, Popup, TileLayer, Circle, ZoomControl } from 'react-leaflet'
import Search from "react-leaflet-search";
import keys from '../keys'
import myPopup from './myPopup'
import Control from 'react-leaflet-control';

import './map.css';
import { icon } from 'leaflet';


const ShowMap = (props) => {

    const [currnetPos, setCurrentPos] = useState(null)
    const [firstPos, setFirstPos] = useState(null)
    const [secondPos, setSecondPos] = useState(null)
    const [showCircle, setShowCircle] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [colorCircle, setColor] = useState(false)

    const [showByAdress, setShowByAdress] = useState(true)

    useEffect(() => {
        if (isValid) {
            setColor('green')
        } else {
            setColor('red')
        }
    }, [isValid])

    const funDistance = (a, b) => {
        if (b.distanceTo(a) <= 500) {
            setIsValid(true)
            setColor('green')
        } else {
            setIsValid(false)
            setColor('red')
        }
    }
    const getCoordinates = (e) => {
        setCurrentPos(e.latlng)
        setFirstPos(null)
        setSecondPos(null)
        setShowByAdress(false)
    }
    const handleFirstSearch = (e) => {
        setCurrentPos(null)
        setFirstPos(e.latLng)
        setShowCircle(true)
        setShowByAdress(true)
        if (secondPos !== null) {
            funDistance(e.latLng, secondPos)
        }
    }
    const handleSecondSearch = (e) => {
        if (!firstPos) {
            alert("Enter first address first")
        } else {
            setSecondPos(e.latLng)
            funDistance(e.latLng, firstPos)
            setShowByAdress(true)

        }
    }



    return (
        <div className="leaflet-container">
            <Map
                center={currnetPos ? currnetPos : keys.measureOptions.center}
                zoom={currnetPos ? 15 : 8}
                onclick={getCoordinates}
            >
                <TileLayer
                    url={keys.mapSettings.tileLayerUrl}
                />
                {currnetPos &&
                    <Marker
                        position={currnetPos}
                    >
                        <Circle
                            center={currnetPos}
                            radius={500}
                            color="green"
                        />
                    </Marker>
                }

                {firstPos
                    && <Circle
                        center={firstPos}
                        radius={500}
                        color={colorCircle}
                    />
                }
                {(!isValid && secondPos)
                    && <Circle
                        center={secondPos}
                        radius={500}
                        color={colorCircle}
                    />
                }
                <>
                    <Search
                        inputPlaceholder="Enter first address"
                        onChange={handleFirstSearch}
                        zoom={15}
                        popUp={myPopup}
                        provider="BingMap"
                        providerOptions={{ providerKey: keys.bingKey }}
                        showMarker={showByAdress}
                        showPopup={showByAdress}
                        openSearchOnLoad
                        closeResultsOnClick={true}
                    />
                    <Search
                        inputPlaceholder="Enter second address"
                        onChange={handleSecondSearch}
                        zoom={15}
                        provider="BingMap"
                        providerOptions={{ providerKey: keys.bingKey }}
                        popUp={myPopup}
                        showMarker={showByAdress}
                        showPopup={false}
                        closeResultsOnClick={true}
                    />
                </>
            </Map>

        </div >
    )
}
export default ShowMap