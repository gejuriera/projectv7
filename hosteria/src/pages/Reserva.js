import React from "react";
import Banner from "../components/Banner";
 
/*import Form from '../components/Form';
<Form></Form>*/
import TodoList from '../components/TodoList';
//import UploadImage from '../components/UploadImage';
//import ContactForm from "../components/ContactForm"
import logoHosteria from "../images/logoHosteria.jpg";
 
const Reserva = () => {
  return <div>  
     <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center" ,
    
    }}>
  
      
      <Banner
            title="Estado de Reserva "
         ><img src={logoHosteria} alt="nombre habitacion..." />
      </Banner>
      <br/><br/>
      <br/>

      </div> 
      
      <TodoList></TodoList>

    </div>


    



           
};
export default Reserva;
