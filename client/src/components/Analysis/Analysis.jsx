//import { useState } from 'react';
import { Tooltip } from '../'
import { Barchart, Piechart } from '../'
import UseToggle from '../../hook/UseToggle'
import Icon from '../icons/Icon'
import "./analysis.scss"

export default function Analysis() {

    const [IsToggle, setIsToggle] = UseToggle();

    return (
        <div className="analysis-wrapper">
            {/* <span>Detected Disease</span>
            <div className="input-element">
                <Icon name="Bacteria" width="18" height="18" fill="rgb(185, 154, 154)" />
                <input type="text" placeholder="Detected Disease" />
            </div> */}
            <header>
                <h1 className="title">Chart Analysis</h1>
                <div>
                    <div className="tooltip" onClick={setIsToggle}>
                        <Icon name="Notification" widht="20" height="20" fill="#e0d2d2" />
                    </div>
                    {IsToggle && <Tooltip />}
                </div>
            </header>
            <div className="chart-wrapper">
                <Barchart />
                <div className="piechart">
                    <Piechart />
                    {/* <Piechart />
                    <Piechart />
                    <Piechart /> */}
                </div>
            </div>
        </div>
    )
}