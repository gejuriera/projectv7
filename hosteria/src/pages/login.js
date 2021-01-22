import React from 'react';
import { Link } from "react-router-dom";
import logoHosteria from "../images/logoHosteria.jpg";
import "../Css/login.css";
import Title from "../components/Title";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import RoomsContainer from "../components/RoomsContainer";

const login = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError } = props;
    
        
    return (
        <>
        <Hero hero="roomsHero">
        <Banner title="Nuestras Habitaciones">
          <Link to="/" className="btn-primary">
            volver al inicio
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
           <header >
                <nav class= "navbar-login">
                        <div class= "logo">
                            <Link to="/">
                                <img src={logoHosteria} alt="Rios y Montañas" />
                            </Link>
                        </div>
                </nav>
        
           </header>
           <div className="section-title-login">
                <h4>Iniciar sesión o crear una cuenta</h4>
                <div />
            </div>
            
            <section className="login">

                        <div className="loginContainer">
                            <label>usuario</label>
                            <input
                                type="text"
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <p className="errorMsg">{emailError}</p>
                            <label>Password</label>


                            <input type="password"
                                required
                                value={password}
                                onChange={
                                    (e) => setPassword(e.target.value)}

                            />
                            <p className='errorMsg'>{passwordError}</p>


                            <div className="btnContainer">
                                {hasAccount ? (
                                    <>
                                        <button onClick={handleLogin}>Iniciar Sesion</button>
                                        <p>No tienes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Registrate</span></p>

                                    </>

                                ) : (
                                        <>
                                            <button onClick={handleSignUp}>Registrarse</button>
                                            <p>Tengo una cuenta? <span onClick={() => setHasAccount(!hasAccount)} >Inicia Sesion</span></p>

                                        </>
                                    )
                                }
                            </div>
                        </div>

                    </section>
            
                     
           
               
        </>
    );
};

export default login;