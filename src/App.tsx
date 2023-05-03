import { Route, Routes } from "react-router-dom";
import FormParticipation from "./FormParticipation.tsx";
import Home from "./Home.tsx";

export interface EventType {
    name: String;
    date: String;
    description: String;
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/autre-page" element={<FormParticipation />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
