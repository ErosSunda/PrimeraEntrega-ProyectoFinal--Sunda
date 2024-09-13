import React, { useState } from 'react';

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar email a Gmail predefinido (puedes usar un servicio como EmailJS)
    alert('Mensaje enviado');
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>Contacto</button>
      {showForm && (
        <div className="floating-form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
