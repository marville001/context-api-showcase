import { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
	const [count, setCount] = useState(10);

    function handleIncrement() {
        setCount((prev) => prev + 1);
	}
	
    return (
        <CounterContext.Provider
            value={{
				count,
				handleIncrement
            }}
        >
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CounterProvider };
