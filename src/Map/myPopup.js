
import React from 'react'
import { Popup } from 'react-leaflet'

const myPopup = (SearchInfo) => {
    return (
        <Popup>
            <div>
                <p> {SearchInfo.info}</p>
            </div>
        </Popup>
    );
}

export default myPopup