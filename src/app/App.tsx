import React from 'react';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoaderPage from "./pages/LoaderPage";

function App() {
    return (
        <div className="vh-100 overflow-hidden">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/loader" element={<LoaderPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
