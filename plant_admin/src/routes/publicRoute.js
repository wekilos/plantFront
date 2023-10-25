import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { login, token } from "../utils/token";
import { useNavigate } from "react-router-dom";
import Login from "../pages/login";
const PublicRoute = (props) => {
    console.log(login());
    const history = useNavigate();
    return (
        <>
            {token() || true ? (
                <div style={{ width: "100%", boxSizing: "border-box" }}>
                    <Header />
                    <div
                        style={{
                            minHeight: "100vh",
                            width: "100%",
                            boxSizing: "border-box",
                        }}
                    >
                        {props.element}
                    </div>
                    <Footer />
                </div>
            ) : (
                <div style={{ width: "100%", boxSizing: "border-box" }}>
                    <div
                        style={{
                            minHeight: "100vh",
                            width: "100%",
                            boxSizing: "border-box",
                        }}
                    >
                        <Login />
                    </div>
                </div>
            )}
        </>
    );
};

export default PublicRoute;
