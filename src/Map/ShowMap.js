import React, { useState, useRef, useEffect } from 'react'
import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet'
import Search from "react-leaflet-search";
import keys from '../keys'
import myPopup from './myPopup'
import './map.css';
import { icon } from 'leaflet';


const ShowMap = (props) => {

    const [currnetPos, setCurrentPos] = useState(null)
    const [firstPos, setFirstPos] = useState(null)
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
    }
    const handleFirstSearch = (e) => {
        setFirstPos(e.latLng)
        if (secondPos !== null) {
            funDistance(e.latlng, secondPos)
        }
    }
    const handleSecondSearch = (e) => {
        if (!firstPos) {
            alert("Enter first address first")
        } else {
            setSecondPos(e.latLng)
            funDistance(e.latLng, firstPos)
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
                        zoom={15}  >
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
                <div>
                    <Search
                        inputPlaceholder="Enter first address"
                        onChange={handleFirstSearch}
                        zoom={15}
                        popUp={myPopup}
                        provider="BingMap"
                        providerOptions={{ providerKey: keys.bingKey }}

                    />
                    <Search
                        inputPlaceholder="Enter second address"
                        onChange={handleSecondSearch}
                        zoom={15}
                        provider="BingMap"
                        providerOptions={{ providerKey: keys.bingKey }}
                        popUp={myPopup}
                    />
                </div>
            </Map>

        </div >
    )
}
export default ShowMap