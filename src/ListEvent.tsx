import { EventType } from "./App";
import { Link } from "react-router-dom";

type ListEventProps = {
    event: EventType;
};

export default function ListEvent(props: ListEventProps) {
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <Link to={""}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Name : {props.event.name}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Date : <span>{props.event.date}</span>
                </p>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Description : {props.event.description}
                        </p>
                    </div>
                    {/* <p className=" font-normal text-gray-700 dark:text-gray-400 flex-auto text-right">
            {props.event.views} Vues
          </p> */}
                </div>
            </div>
        </div>
    );
}
