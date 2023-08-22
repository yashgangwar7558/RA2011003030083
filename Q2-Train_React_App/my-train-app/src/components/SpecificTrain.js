import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import './SpecificTrain.css'


export default function SpecificTrain() {

    return (
        <div className="body">
            <h2>Enter the train no. to get status:</h2>
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search..."/>
                <button class="search-button">Search</button>
            </div>
        </div>
    );
}