import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function LoaderPage() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <div className="d-flex flex-column h-100 bg-light">
            <div className="d-flex border-1 border-bottom bg-white">
                <h1 className="w-100 text-center fw-light m-0">
                    Pachinko
                </h1>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-grow-1 overflow-auto">
                <div className="spinner-border"/>
            </div>
        </div>
    );
}