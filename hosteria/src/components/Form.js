import React, { useState } from 'react';
import firebase from '../Database/fire';

export default function Form() {
  const [habitacion,setTitle] = useState('');
  const [cuarto,setTitle2] = useState('');
  const [detalle,setTitle3] = useState('');
  const [personas,setTitle4] = useState('');
  const [Estado,setTitle5] = useState('');
 
 
 
  
  const pushData = () => {
    const referencia = firebase.database().ref('Cuarto');
    const esquema = {
      habitacion,
      Estado: false,
      cuarto,
      detalle,
      personas,
    };

    referencia.push(esquema)
    .then(()=>{
      alert("Información subida con exito ♥");
    })
    .catch((error)=>{
      alert(console.log(error))
    }
    );
    setTitle("");
    setTitle2("");
    setTitle3("");
    setTitle4("");

  };
  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
      <input placeholder="habitacion" type="text" value={habitacion} onChange={(e) => setTitle(e.target.value)}/> <br/>
      <input placeholder="cuarto" type="number" value={cuarto} onChange={(e) => setTitle2(e.target.value)}/> <br/>
      <input placeholder="detalle" type="text" value={detalle} onChange={(e) => setTitle3(e.target.value)}/> <br/>
      <input placeholder="personas" type="number" value={personas} onChange={(e) => setTitle4(e.target.value)}/> <br/>

      <button onClick={pushData}>Agregar</button>
      </form>
    </div>
  );
}