import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const Counter = () => {
    const { handleIncrement, count } = useContext(CounterContext);

    return (
        <div className="mt-4 p-4">
            <p>count : {count}</p>

            <button
                onClick={handleIncrement}
                className="btn btn-success text-white"
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;
