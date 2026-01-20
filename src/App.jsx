import "./App.css";
import { useEffect, useState } from "react";
import { SplashScreen } from "./SplashScreen";
import { MainApp } from "./MainApp";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <>{loading ? <SplashScreen /> : <MainApp />}</>;
}

export default App;
