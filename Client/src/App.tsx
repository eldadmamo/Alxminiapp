import {BrowserRouter} from "react-router-dom";

import {RoutesProvider} from "./routes";


function App() {
    return (
        <BrowserRouter>
            <RoutesProvider />
        </BrowserRouter>
    );
}

export default App;
