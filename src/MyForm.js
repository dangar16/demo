import React, {useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    // inicializa el estado con los campos del formulario
    // por ejemplo: name, email, etc.
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    // actualiza el estado cuando cambia algún campo del formulario
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos al servidor Flask
    // Puedes usar fetch o axios para realizar la solicitud POST

    fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // maneja la respuesta del servidor si es necesario
        console.log(data);
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
      });
  };

  return (
    <form className='row g-3'>
      <div className='col-6'>
        <label className='for-label' >Name</label>
        <input type='text' className='form-control' placeholder='Name' aria-label='Name' name='name' onChange={handleChange}></input>
      </div>
      <div className='col-6'>
        <label className='for-label'>Email</label>
        <input type='email' className='form-control' placeholder='email' aria-label='email' name='email' onChange={handleChange}></input>
      </div>
      <div className='col-6'>
        <label className='for-label'>Password</label>
        <input type='password' className='form-control' placeholder='Password' aria-label='Password' name='Password'></input>
      </div>
      <div className='col-6'>
        <input type='submit' className='btn btn-primary' value="Envia"></input>
      </div>
    </form>
  );
};

export default MyForm;
