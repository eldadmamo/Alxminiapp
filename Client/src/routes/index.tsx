import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Invites from "../pages/invites";
import Uploads from "../pages/upload";
import { Toaster } from "react-hot-toast";

export function RoutesProvider() {


    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Uploads />} />
                <Route path="/invites" element={<Invites />} />
            </Routes>
        </>
    );
}
