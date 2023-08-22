import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import './SpecificTrain.css'


export default function SpecificTrain() {

    const [searchTerm, setSearchTerm] = useState('');
    const [trainInfo, setTrainInfo] = useState('');

    const performSearch = () => {
        try {
            const res = fetch(`http://localhost:3000/train/trains/${searchTerm}`)
            const result = res.json();
            setTrainInfo(result)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="body">
            <h2>Enter the train no. to get status:</h2>
            <div class="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                />
                <button className="search-button" onClick={performSearch}>Search</button>
            </div>
            {trainInfo && (
                <div>
                    <h3>{trainInfo.trainName}</h3>
                </div>
            )}
        </div>
    );
}