import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Error404 from '../pages/Error404';

export default function RoutesContent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={process.env.PUBLIC_URL}>
                    <Route path="" element={<Home />} />
                    <Route path="calculator/" element={<Calculator />} />
                    <Route path="*" element={<Error404 />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    );
}
