import React from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Title from "../components/Title";
const contactanos= () => {
    return (
        <>
            <Hero hero="contactanosHero">
                <Banner title="Hostería ríos y montañas">
                    <Link to="/" className="btn-primary">
                        volver al inicio
                    </Link>
                </Banner>
            </Hero>
            <Title title="Contáctenos" />
        </>
    );
};

export default contactanos;


