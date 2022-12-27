import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, LayersControl, LayerGroup, Marker } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from '@christopherpickering/react-leaflet-markercluster';
import LegendAndHint from '../components/LegendAndHint';
import Recommendations from './Recommendations';
import DataEcomap from '../data/data.json';
import DataContainers from '../data/cks-containers.json';
import '@christopherpickering/react-leaflet-markercluster/dist/styles.min.css';
import ContentMarker from './ContentMarker';
import * as constants from '../constants/defaultConstants'
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";
import LocationDetermination from '../helpers/locationDetermination';
import { Button } from '@mui/material';

const center = constants.DEFAULT_POSITION;
const zoom = constants.DEFAULT_ZOOM;
function DisplayPosition({ map }) {
    const [position, setPosition] = React.useState(() => map.getCenter())
    const [hide, setHide] = React.useState(false);
    const onClick = React.useCallback(() => {
        map.setView(center, zoom)
    }, [map])

    const onMove = React.useCallback(() => {
        setPosition(map.getCenter())
        // console.log(map['_popup'])
        setHide(false)
    }, [map])
    const onClose = React.useCallback(() => {
        setPosition(map.getCenter())
        // console.log('close')
        setHide(true)
    }, [map])

    React.useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])

    React.useEffect(() => {
        map.on('popupopen', onMove)
        return () => {
            map.off('popupopen', onMove)
        }
    }, [map, onMove])
    React.useEffect(() => {
        map.on('popupclose', onClose)
        return () => {
            map.off('popupclose', onClose)
        }
    }, [map, onClose])
    return (
        <>
            {/* {map['_popup'] ? map['_popup']['_container']['children'][0]['lastChild'] : null} */}
            {
                // !hide && 
                <p>
                    {/* <p> */}
                    {/* {map['_popup'] ? console.log(map['_popup']['_container']['children'][0]) : null} */}
                    {/* {map['_popup'] ? console.log(map) : null} */}
                    {map['_popup'] ? map['_popup']['_container']['outerHTML'] : null}
                    latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
                    <button onClick={onClick}>reset</button>
                </p>
            }

        </>
    )
}



function Map(props) {

    const [map, setMap] = useState(null)
    const [isActive, setIsActive] = useState(false);
    const popupRef = React.useRef();

    useEffect(() => {
        if (!map) return;
    
        L.easyButton("fa-location-arrow", () => {
            LocationDetermination(map, zoom)
        }).setPosition('bottomright').addTo(map)

        L.easyButton("fa-info", () => {
            setIsActive(true)
        }).setPosition('bottomleft').addTo(map)
      }, [map])
    
    function getColorImgByMaxSi(si) {
        if (si == -32768) return "0";
        var roundSi = Math.round(si);
        if ((roundSi >= 0) && (roundSi <= 1)) return "1";
        if ((roundSi >= 2) && (roundSi <= 4)) return "2";
        if ((roundSi >= 5) && (roundSi <= 10)) return "3";
        if (roundSi > 10) return "4";
    }

    const markerColors = {
        0: "black",
        1: "green",
        2: "yellow",
        3: "orange",
        4: "red",
    }

    const iconGreen = new L.Icon({
        iconUrl: require('../assets/images/recycle-green.png'),
        iconSize: new L.Point(24, 24)
    });
    const iconRed = new L.Icon({
        iconUrl: require('../assets/images/recycle-red.png'),
        iconSize: new L.Point(24, 24)
    });
    const iconNearMe = new L.Icon({
        iconUrl: require('../assets/images/near_me.png'),
        iconSize: new L.Point(24, 24)
    });
    const createClusterCustomIcon = function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom',
            iconSize: L.point(40, 40, true),
        });
    }

    return (
        <>
            <LegendAndHint isActive={isActive} updateIsActive={() => { setIsActive(false) }} />
            {/* {map ? <DisplayPosition map={map} /> : null} */}
            <MapContainer attributionControl={false} center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }} ref={setMap} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LayersControl position="topright">
                    <LayersControl.Overlay name="Качество воздуха" checked>
                        <LayerGroup>
                            {DataEcomap.data.map(typeObj => (
                                typeObj.stations.map(station => (
                                    <CircleMarker center={[station.lat, station.lng]} color={markerColors[getColorImgByMaxSi(station.maxSi)]}>
                                        <Popup ref={popupRef}>
                                            <b>{station.label}</b><br />
                                            Дата: {station.date} <br />
                                            <table className="popup-table"><tr><th>Примесь</th><th>СИ</th></tr>
                                                {station.si.map(param =>
                                                    param.val != null ? <tr style={{ backgroundColor: param.val > 2 ? 'yellow' : null }}><td> {param.name} </td><td> {param.val != -32768 ? param.val : "Нет данных"} </td></tr> : null
                                                )}
                                            </table>
                                            <div style={{width:'100%', textAlign:'center'}}>
                                                <Button sx={{m:  1.1}} onClick={() => { props.switchingToRecommendations() }} variant="outlined" size="small">
                                                Подробнее    
                                                </Button>
                                            </div>
                                            
                                        </Popup>
                                    </CircleMarker>
                                ))
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Пункт сбора вторресурсов" checked>
                        <MarkerClusterGroup>
                            {DataContainers.map(typeObj => (
                                typeObj['type of place'] == 'ПЭТ' ?
                                    <LayerGroup >
                                        <Marker position={[typeObj.lat, typeObj.lng]} icon={iconRed}>
                                            <Popup className='hide'>
                                                <div>
                                                    <b>{typeObj.address}</b><br />
                                                    Тип контейнера: {typeObj['container type']} <br />
                                                    Тип места: {typeObj['type of place']}
                                                </div>
                                            </Popup>
                                        </Marker>
                                    </LayerGroup>
                                    :
                                    <LayerGroup>
                                        <Marker position={[typeObj.lat, typeObj.lng]} icon={iconGreen}>
                                            <Popup className='hide'>
                                                <div>
                                                    <b>{typeObj.address}</b><br />
                                                    Тип контейнера: {typeObj['container type']} <br />
                                                    Тип места: {typeObj['type of place']}
                                                </div>
                                            </Popup>
                                        </Marker>
                                    </LayerGroup>
                            ))}
                        </MarkerClusterGroup>
                    </LayersControl.Overlay>
                </LayersControl>
            </MapContainer >
        </>
    )
}

export default Map;