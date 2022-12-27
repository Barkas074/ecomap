import React, { useState } from 'react';
import DataContainers from '../data/cks-containers.json';
import getDistanceFromLatLonInKm from '../helpers/getDistanceFromLatLonInKm'
import recycleGreen from '../assets/images/recycle-green.png'
import recycleRed from '../assets/images/recycle-red.png'
import '../helpers/correctionOfDecimalsRounding'
import * as constants from '../constants/defaultConstants';
import '../styles/listAddresses.css'
import { Button } from '@mui/material';

function ListAddresses() {
    let center = constants.DEFAULT_POSITION;
    const [position, setPosition] = useState(center)

    DataContainers.map(typeObj => (
        typeObj.distance = getDistanceFromLatLonInKm(position[0], position[1], typeObj.lat, typeObj.lng)
      ))
      DataContainers.sort((a, b) => {
        if (a.distance > b.distance) return 1
        if (a.distance < b.distance) return -1
        return 0
    })
    navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setPosition([lat, lng])
    })

    return (
        <ul className='list'>
            {DataContainers.slice(0, 20).map(typeObj => (
                <li>
                    <a href=''>
                        <div style={{ display: 'flex' }}>
                            <img className='image' src={typeObj['type of place'] == 'ПЭТ' ? recycleRed : recycleGreen} />
                            <div className='content'>
                                <b>{typeObj['type of place']}</b>
                                {typeObj.address}
                            </div>
                        </div>
                        <div className='distance'>
                            {Math.floor10(typeObj.distance) == 0 ? Math.round10(typeObj.distance * 1000) + ' м' : Math.round10(typeObj.distance, -1) + ' км'}
                        </div>
                    </a>
                </li>
            ))}

        </ul>
    )
}

export default ListAddresses;