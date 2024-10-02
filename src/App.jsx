import Counter from "./components/Counter";
import DataFetching from "./components/DataFetching";
import Header from "./components/Header";

function App() {
  
    return (
        <div className="bg-[#f2f2f2] min-h-screen gap-4 flex items-center justify-center flex-col text-black">
            <div className="bg-white w-full max-w-[500px] shadow-lg rounded-md">
                
                <Header />

                <DataFetching />    

                <Counter />
            </div>
        </div>
    );
}

export default App;
