import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/HomePage/Home";

function App() {
    return (
        <div className="font-Rajdhani">
            <header className="fixed w-full z-20">
                <NavBar />
            </header>
            <main className="">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
