import Home from "pages/Home";
import LoginPage from "pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="home" element={<Home />} />
                </Routes>
            </Router>
        </main>
    )
}