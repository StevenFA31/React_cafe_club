import { useState, useEffect, FormEvent } from "react";
import { EventType } from "./Home";

function ParticipationForm() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [eventId, setEventId] = useState<number>();
    const [events, setEvents] = useState<EventType[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8001/api/events")
            .then((response) => response.json())
            .then((data) => {
                setEvents(data["hydra:member"]);
                console.log(data["hydra:member"]);
            })
            .catch((error) => console.log(error));
    }, []);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!eventId) {
            alert("Please select an event.");
            return;
        }
        const data = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            event: eventId,
        };

        fetch("http://127.0.0.1:8001/api/participations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstname">Firstname : </label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastname">Lastname : </label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone : </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="event">Event : </label>
                {
                    <select
                        id="event"
                        name="event"
                        value={eventId}
                        onChange={(e) => {
                            const id = parseInt(
                                e.target.value.split("/").pop() || "0"
                            );
                            setEventId(id);
                            if (!isNaN(id)) {
                                setEventId(id);
                            }
                        }}
                    >
                        <option value="">Select an event</option>
                        {events.map((event) => (
                            <option
                                key={event.id}
                                value={parseInt(event.id.split("/").pop())}
                            >
                                {event.name}
                            </option>
                        ))}
                    </select>
                }
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ParticipationForm;
