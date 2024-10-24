import styled from 'styled-components';
import { useState } from 'react';

// Estilos del formulario
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const ContactForm = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí enviamos los datos a través de un backend o servicio de terceros
    fetch('https://YOUR_BACKEND_URL/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Mensaje enviado con éxito!');
          setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
        } else {
          alert('Hubo un error al enviar el mensaje.');
        }
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar el mensaje.');
      });
  };

  return (
    <FormContainer>
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
