import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import LegendAndHint from '../components/LegendAndHint';
import 'leaflet/dist/leaflet.css';
import DataEcomap from '../data.json';

function Map() {

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

    return (
        <>
            <LegendAndHint />
            <MapContainer center={[55.185193, 61.382059]} zoom={12} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {DataEcomap.data.map(typeObj => (
                    typeObj.stations.map(station => (
                        <CircleMarker center={[station.lat, station.lng]} color={markerColors[getColorImgByMaxSi(station.maxSi)]}>
                            <Popup>
                                <div>
                                    <b>{station.label}</b><br />
                                    Дата: {station.date} <br />
                                    <table class="popup-table"><tr><th>Примесь</th><th>СИ</th></tr>
                                        {station.si.map(param =>
                                            param.val != null ? <tr style={{ backgroundColor: param.val > 2 ? 'yellow' : null }}><td> {param.name} </td><td> {param.val != -32768 ? param.val : "Нет данных"} </td></tr> : null
                                        )}
                                    </table>
                                </div>
                            </Popup>
                        </CircleMarker>
                    ))
                ))}
            </MapContainer >
        </>
    )

}

export default Map;