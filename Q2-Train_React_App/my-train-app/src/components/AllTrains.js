import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import './AllTrains.css'


export default function AllTrains() {

    const navigate = useNavigate();

    let [data, setData] = useState([]);

    async function getAllTrains() {
        try {
            const res = await fetch('http://localhost:3000/train/trains/')
            const actualData = await res.json()
            setData(actualData)
            console.log(actualData);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getAllTrains();
    }, [])

    return (
        <div className="body">

            <button onClick={() => {
                navigate("/train")
            }}>Train Info</button>

            <h1>Here is the status of all trains:</h1>

            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="traininfo">
                            <h3>Train Name: {item.trainName}</h3>
                            <h3>Train Number: {item.trainNumber}</h3>
                            <h3>Delayed By: {item.delayedBy} min</h3>
                        </div>
                    )
                })
            }

        </div>
    );
}