import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Navigation from '../components/RouterApp/Navigation';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <Navigation />

                <Routes>
                    <Route
                        path="register"
                        element={<Register />}
                    />

                    <Route
                        path="home"
                        element={<h1>Home Page</h1>}
                    />

                    <Route
                        path="users"
                        element={<h1>Users Page</h1>}
                    />

                    <Route
                        path="about"
                        element={<h1>About Page</h1>}
                    />

                    <Route
                        path="/*"
                        element={
                            <Navigate
                                replace
                                to="register"
                            />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default RouterApp;
