import React from 'react';

export default function HeaderClase({ tituloTema, nombreDocente, horario }) {
  const estilos = {
    contenedor: {
      background: 'linear-gradient(135deg, #072b8e 0%, #0891b2 100%)',
      color: '#ffffff',
      padding: '24px 20px',
      borderRadius: '16px',
      textAlign: 'center',
      marginBottom: '20px',
      boxShadow: '0 8px 20px -4px rgba(7, 43, 142, 0.25)',
      position: 'relative'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(4px)',
      padding: '4px 14px',
      borderRadius: '20px',
      fontSize: '0.82rem',
      fontWeight: '600',
      color: '#f8fafc',
      marginBottom: '10px'
    },
    puntoPulso: {
      width: '8px',
      height: '8px',
      backgroundColor: '#0d9488',
      borderRadius: '50%',
      boxShadow: '0 0 8px #0d9488'
    },
    titulo: {
      fontSize: '1.4rem',
      fontWeight: '700',
      margin: '8px 0',
      lineHeight: '1.3'
    },
    detalles: {
      display: 'flex',
      // justify-content: center,
      gap: '20px',
      flexWrap: 'wrap',
      fontSize: '0.88rem',
      opacity: 0.9,
      marginTop: '10px'
    }
  };

  return (
    <header style={estilos.contenedor}>
      <div style={estilos.badge}>
        <span style={estilos.puntoPulso}></span>
        <span>Clase Activa | Redacción Digital</span>
      </div>

      <h1 style={estilos.titulo}>{tituloTema}</h1>

      <div style={estilos.detalles}>
        <span><strong>Docente:</strong> {nombreDocente}</span>
        <span>|</span>
        <span><strong>Horario:</strong> {horario}</span>
      </div>
    </header>
  );
}