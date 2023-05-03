import FormParticipation from "./FormParticipation";
import { EventType } from "./App";

type contentProps = {
    event: EventType[];
};

function Content(props: contentProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-40">
            {props.event.map((item, index) => (
                <FormParticipation key={index} event={item} />
            ))}
        </div>
    );
}

export default Content;
