import React from 'react';
import firebase from '../Database/fire';

import Table from 'react-bootstrap/Table'
//import 'bootstrap/dist/css/bootstrap.min.css';
export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Cuarto').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Cuarto').child(todo.id);
    todoRef.update({
      Estado: !todo.Estado,
    });
  };
  //habitacion,cuarto,detalle,persona,estado
  //<button onClick={completeTodo}>Cambiar Estado</button>
//<button onClick={deleteTodo}>Borrar</button>
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center" ,
    
    }}>
      
    <Table striped bordered striped bordered hover size="sm">
    <thead>
      <tr> 
       
        <th center>Reserva Actual</th>
      
        
      </tr>
    </thead>
    <tbody  >
      <tr >
        <td >Habitación: </td>
        <td>{todo.habitacion}</td>
      </tr>
      <tr>
        <td>Número de cuartos: </td>
        <td>{todo.cuarto}</td>
      </tr>
      <tr>
        <td>Detalle: </td>
        <td>{todo.detalle}</td>
      </tr>
      <tr>
        <td>Max Personas: </td>
        <td>{todo.personas}</td>
      </tr>
    
      <tr>
        <td>Estado: </td>
        <td>{todo.Estado}</td>
      </tr>
      </tbody>
      </Table>

      
      
      
      
      
    </div>
  );
}
/*
<h1>Habitacion:<h1></h1>{todo.habitacion}</h1>
      <h1>Cuartos: </h1><h2  className={todo.cuarto}>{todo.cuarto}</h2>
      <h1>Detalle: </h1><h2  className={todo.detalle}>{todo.detalle}</h2>
      <h1>Max Personas: </h1><h2  className={todo.personas}>{todo.personas}</h2>
      <h1>Estado: </h1><h2  className={todo.Estado}>{todo.Estado}</h2>*/