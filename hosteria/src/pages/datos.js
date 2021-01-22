import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import "../Css/datos.css";

import logoHosteria from "../images/logoHosteria.jpg";
import Title from "../components/Title";



const datos = () => {

    return (
        <>
        <Hero hero="roomsHero">
        <Banner title="Ingresar mis datos">
          <Link to="/" className="btn-primary">
            volver al inicio
          </Link>
        </Banner>
      </Hero>
  
            <header >
                

            </header>
           

            <section className="datos">

                <div className="datosContainer">
                    <label >Nombre</label>
                    <input type="text" class='field'></input>
                    <label >Apellido</label>
                    <input type="text" class='field'></input>
                    <label >Año Nacimiento</label>
                    <input type="date" class='field'></input>
                    <label >Numero de Cedula</label>
                     <input type="text" class='field'></input>
                    <label for="mp">Metodo de pago predeterminado:</label>

                    <select name="mp" id="mp">
                        <option value="cheque">Cheque</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tc">Tarjeta de credito</option>
                        <option value="td">Tarjeta de debito</option>
                    </select>




                    <div className="btnContainer">
                    <Link to="/">
                    <button name="btnEnviar">Cambiar Datos</button>
                    </Link>
                        
                    </div>
                </div>

            </section>




        </>















    )
}

export default datos