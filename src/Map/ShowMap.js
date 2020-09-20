import React, { useState, useRef, useEffect } from 'react'
import { Map, Marker, TileLayer, Circle } from 'react-leaflet'
import Search from "react-leaflet-search";
import mapKey from '../mapKey'
import mapSettings from './mapSettings'
import myPopup from './myPopup'
import './map.css';

const ShowMap = (props) => {

    const [currnetPos, setCurrentPos] = useState(null)
    const [firstPos, setFirstPos] = useState(null)
    const [secondPos, setSecondPos] = useState(null)
    const [isValid, setIsValid] = useState(false)
    const [colorCircle, setColor] = useState(false)
    const [indexMap, setIndexMap] = useState(0);
    const [showByAdress, setShowByAdress] = useState(true)
    const myMap = useRef(null)

    useEffect(() => {
        if (isValid) {
            setColor('green')
        } else {
            setColor('red')
        }
    }, [isValid])

    const funDistance = (a, b) => {
        if (b.distanceTo(a) <= 1000) {
            setIsValid(true)
            setColor('green')
        } else {
            setIsValid(false)
            setColor('red')
        }
    }

    const getCoordinates = (e) => {
        setIndexMap(indexMap + 1)
        setCurrentPos(e.latlng)
        setFirstPos(null)
        setSecondPos(null)
        setShowByAdress(false)
        myMap.current.leafletElement.setView([e.latlng.lat, e.latlng.lng], 14)
    }

    const handleFirstSearch = (e) => {
        setCurrentPos(null)
        setFirstPos(e.latLng)
        setShowByAdress(true)
        if (secondPos !== null) {
            funDistance(e.latLng, secondPos)
        }
        myMap.current.leafletElement.setView([e.latLng.lat, e.latLng.lng], 14)
    }

    const handleSecondSearch = (e) => {
        if (!firstPos) {
            alert("Enter first address first")
        } else {
            setSecondPos(e.latLng)
            funDistance(e.latLng, firstPos)
            setShowByAdress(true)
            myMap.current.leafletElement.setView([e.latLng.lat, e.latLng.lng], 14)
        }
    }

    return (
        <div className="leaflet-container" key={indexMap} >
            <Map
                center={mapSettings.measureOptions.center}
                ref={myMap}
                zoom={8}
                onClick={getCoordinates}
            >
                <TileLayer
                    url={mapSettings.mapSettings.tileLayerUrl}
                />
                {currnetPos &&
                    <Marker
                        position={currnetPos}
                    >
                        <Circle
                            center={currnetPos}
                            radius={1000}
                            color="green"

                        />
                    </Marker>
                }
                {firstPos
                    && <Circle
                        center={firstPos}
                        radius={1000}
                        color={colorCircle}
                    />
                }
                {(!isValid && secondPos)
                    && <Circle
                        center={secondPos}
                        radius={1000}
                        color={colorCircle}
                    />
                }
                <div className="search">
                    <Search
                        inputPlaceholder="Enter first address"
                        onChange={handleFirstSearch}
                        zoom={14}
                        popUp={myPopup}
                        provider="BingMap"
                        providerOptions={{ providerKey: mapKey.bingKey }}
                        showMarker={firstPos && showByAdress}
                        showPopup={firstPos && showByAdress}
                        openSearchOnLoad
                        closeResultsOnClick={true}
                        className="search-div"
                    />
                    <Search
                        inputPlaceholder="Enter second address"
                        onChange={handleSecondSearch}
                        zoom={14}
                        provider="BingMap"
                        providerOptions={{ providerKey: mapKey.bingKey }}
                        popUp={myPopup}
                        showMarker={secondPos && showByAdress}
                        showPopup={false}
                        closeResultsOnClick={true}
                        className="search-div"
                    />
                </div>
            </Map>
        </div >
    )
}
export default ShowMap