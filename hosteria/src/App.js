//import React from "react";
import "./Hero.css";
import "./Css/Banner.css";
import "./Css/Services.css";
import "./Css/Title.css";
import fire from "./Database/fire"
import Home from "./pages/Home";
import Login from "./pages/login";
import Rooms from "./pages/Rooms";
import contactanos from "./pages/contactanos";
import SingleRooms from "./pages/SingleRooms";
import Datos from "./pages/datos";
import Error from "./pages/Error";
import Reserva from "./pages/Reserva";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import React, { useState, useEffect } from 'react';

import Hero from './pages/Hero';

function App() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
      setEmail('');
      setPassword('');
    }
  
    const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
    }

    const handleLogin = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        });

    };

    const handleSignUp = () => {
      clearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        }
        );
    };

    const handleLogout = () => {
      fire.auth().signOut();
    };
  
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user)
        } else {
          setUser('')
        }
      });
    };
  
    useEffect(() => {
      authListener();
  
    }, []);
  
  return (
    <>
       {user ? (
         
        <Switch>
        
        <div> 
          
        
          <Navbar/> 
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/contactanos/" component={contactanos} />
          <Route exact path="/datos/" component={Datos} />
          <Route exact path="/cerrarSesion/" component={handleLogout}/>
          <Route exact path="/rooms/:slug" component={SingleRooms} />
          
          <Route exact path="/reserva" component={Reserva} />

          <Footer />
        </div>
          
         
        </Switch>
       
        


      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
          

        )
      }

      
     
     
    </>
  );
}

export default App;
