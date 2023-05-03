// import Header from "./header";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PropertyCard from "./PropertyCard";

// Importer "fetch" dans votre composant React :

import React, { useEffect, useState } from "react";
import Content from "./Content";
// import Content from "./content";

export interface EventType {
    name: String;
    date: String;
    description: String;
}

function App() {
    const [event, setEvent] = useState<EventType[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8001/api/events")
            .then((response) => response.json())
            .then((data) => {
                setEvent(data["hydra:member"]);
                console.log(data["hydra:member"]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="App">
            <Content event={event} />
        </div>
    );
}

export default App;
