import "./App.css";
import { motion } from "framer-motion";

function App() {
    return (
        <div className="text-white">
            <header className="">
                <motion.h1
                    className="text-center py-10 text-xl tracking-wide"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 3,
                    }}>
                    React | TailwindCSS | Framer Motion
                </motion.h1>
            </header>
        </div>
    );
}

export default App;
