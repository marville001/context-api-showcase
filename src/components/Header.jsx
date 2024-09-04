import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const Header = () => {

	const { count } = useContext(CounterContext);

    return (
        <div className="bg-gray-100 p-2 m-0.5 flex justify-between items-center">
			<h1 className="text-3xl font-bold">My App</h1>
			
			<span className="badge">{count}</span>
        </div>
    );
};

export default Header;
