// import Header from "./header";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PropertyCard from "./PropertyCard";

// Importer "fetch" dans votre composant React :

import React, { useEffect, useState } from "react";
// import Content from "./content";

export interface EventType {
  name: String;
  date: Number;
  description: Text;
}

// Définir un état pour stocker les données de l'API :
function App() {
  const [event, setEvent] = useState<EventType[]>([]);

  // Utiliser la méthode "useEffect" pour effectuer la requête API une seule fois au chargement de la page :

  useEffect(() => {
    fetch("http://127.0.0.1:8001/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvent(data["hydra:member"]);
        console.log(data["hydra:member"]);
      })
      .catch((error) => console.log(error));
  }, []);

  // Utiliser les données de l'API dans votre composant :

  return (
    <div className="App">
      <h1 className="text-purple-600	">bonsoir</h1>
    </div>
  );
}

export default App;
