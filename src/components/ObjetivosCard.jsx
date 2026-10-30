import React from 'react';

export default function ObjetivosCard({ competencia, indicadorLogro }) {
  const estilos = {
    tarjeta: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '22px',
      marginBottom: '25px',
      boxShadow: '0 4px 12px -2px rgba(15, 23, 42, 0.05)'
    },
    titulo: {
      color: '#072b8e',
      fontSize: '1.1rem',
      borderBottom: '2px solid #0891b2',
      paddingBottom: '8px',
      marginTop: 0,
      marginBottom: '15px'
    },
    bloque: {
      marginBottom: '12px'
    },
    etiqueta: {
      fontSize: '0.82rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: '#0891b2',
      margin: 0
    },
    texto: {
      fontSize: '0.92rem',
      color: '#334155',
      margin: '4px 0 0 0',
      lineHeight: '1.5'
    },
    bloqueIndicador: {
      borderLeft: '4px solid #0d9488',
      paddingLeft: '12px',
      marginTop: '12px'
    }
  };

  return (
    <div style={estilos.tarjeta}>
      <h3 style={estilos.titulo}>Metas y Objetivos Didácticos</h3>
      
      <div style={estilos.bloque}>
        <h4 style={estilos.etiqueta}>Competencia Subárea 16.2</h4>
        <p style={estilos.texto}>{competencia}</p>
      </div>

      <div style={estilos.bloqueIndicador}>
        <h4 style={{ ...estilos.etiqueta, color: '#0d9488' }}>Indicador de Logro</h4>
        <p style={estilos.texto}>{indicadorLogro}</p>
      </div>
    </div>
  );
}