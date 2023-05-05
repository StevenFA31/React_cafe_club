import Content from "./Content";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface EventType {
    id: Number;
    name: String;
    date: String;
    description: String;
}

function Home() {
    const [event, setEvent] = useState<EventType[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8001/api/events")
            // Faire attention a l'addrese de l'API, elle retomber dans le port 8000 ou bien plus !!!
            .then((response) => response.json())
            .then((data) => {
                setEvent(data["hydra:member"]);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <Content event={event} />
            <div>
                <h1>Bienvenue sur ma page</h1>
                <p>
                    Cliquez sur le lien ci-dessous pour accéder à la page de
                    souscription d'évènement:
                </p>
                <Link className="text-cyan-600	" to="/souscription">
                    Aller vers une la page de souscription
                </Link>
            </div>
        </>
    );
}

export default Home;
