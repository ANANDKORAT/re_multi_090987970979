import "./App.css";
import AppRouters from "./Router";
import AdSenseAutoAds from './components/AdSenseAutoAds';

function App() {
    return (
        <div className="App">
            <AdSenseAutoAds /> {/* Renders on every route */}
            <AppRouters />
        </div>
    );
}

export default App;

