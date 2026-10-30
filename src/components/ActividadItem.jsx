import React, { useState } from 'react';

export default function ActividadItem({
  numeroModulo,
  nombreModulo,
  descripcionModulo,
  actividades = [],
  estaDesbloqueado,
  alCompletarModulo
}) {
  const [desplegado, setDesplegado] = useState(false);
  const [estadoActividades, setEstadoActividades] = useState({});

  const alternarActividad = (index) => {
    if (!estaDesbloqueado) return;

    const nuevoEstado = {
      ...estadoActividades,
      [index]: !estadoActividades[index]
    };
    
    setEstadoActividades(nuevoEstado);

    const completadas = Object.values(nuevoEstado).filter(Boolean).length;
    if (completadas === actividades.length && actividades.length > 0) {
      alCompletarModulo(numeroModulo);
    }
  };

  const totalCompletadas = Object.values(estadoActividades).filter(Boolean).length;
  const esCompleto = actividades.length > 0 && totalCompletadas === actividades.length;

  const estilos = {
    tarjeta: {
      backgroundColor: '#ffffff',
      border: esCompleto ? '2px solid #0d9488' : '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: esCompleto
        ? '0 6px 18px -3px rgba(13, 148, 136, 0.2)'
        : '0 4px 10px -2px rgba(15, 23, 42, 0.04)',
      opacity: estaDesbloqueado ? 1 : 0.6,
      transition: 'all 0.3s ease'
    },
    encabezado: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      borderBottom: '1px solid #f1f5f9',
      paddingBottom: '12px'
    },
    badgeNumero: {
      background: estaDesbloqueado ? '#072b8e' : '#64748b',
      color: '#ffffff',
      borderRadius: '12px',
      padding: '6px 12px',
      textAlign: 'center',
      minWidth: '60px'
    },
    etiquetaMod: {
      fontSize: '0.68rem',
      textTransform: 'uppercase',
      display: 'block',
      letterSpacing: '0.5px'
    },
    numTexto: {
      fontSize: '1.4rem',
      fontWeight: '800',
      margin: 0,
      lineHeight: '1'
    },
    titulo: {
      fontSize: '1.05rem',
      fontWeight: '700',
      color: '#0f172a',
      margin: 0
    },
    insigniaEstado: {
      fontSize: '0.78rem',
      fontWeight: '600',
      color: esCompleto ? '#0d9488' : !estaDesbloqueado ? '#64748b' : '#0891b2'
    },
    descripcion: {
      fontSize: '0.9rem',
      color: '#475569',
      margin: '12px 0',
      lineHeight: '1.5'
    },
    btnDesplegar: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#f8fafc',
      border: '1px solid #cbd5e1',
      borderRadius: '10px',
      color: '#072b8e',
      fontWeight: '600',
      fontSize: '0.88rem',
      cursor: estaDesbloqueado ? 'pointer' : 'not-allowed',
      transition: 'all 0.2s ease'
    },
    lista: {
      marginTop: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    item: (hecha) => ({
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      padding: '10px 12px',
      borderRadius: '10px',
      backgroundColor: hecha ? '#f0fdf4' : '#f8fafc',
      border: hecha ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
      cursor: 'pointer',
      fontSize: '0.86rem',
      color: hecha ? '#166534' : '#334155',
      textDecoration: hecha ? 'line-through' : 'none'
    })
  };

  return (
    <div style={estilos.tarjeta}>
      <div style={estilos.encabezado}>
        <div style={estilos.badgeNumero}>
          <span style={estilos.etiquetaMod}>Mód</span>
          <p style={estilos.numTexto}>{numeroModulo}</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={estilos.titulo}>{nombreModulo}</h3>
          <span style={estilos.insigniaEstado}>
            {!estaDesbloqueado ? '🔒 Bloqueado' : esCompleto ? '✅ Completado' : '🔓 En Progreso'}
          </span>
        </div>
      </div>

      <p style={estilos.descripcion}>{descripcionModulo}</p>

      {estaDesbloqueado && (
        <div>
          <button
            style={estilos.btnDesplegar}
            onClick={() => setDesplegado(!desplegado)}
          >
            {desplegado
              ? '▲ Ocultar Actividades'
              : `▼ Ver Actividades (${totalCompletadas}/${actividades.length})`}
          </button>

          {desplegado && (
            <div style={estilos.lista}>
              {actividades.map((act, idx) => (
                <div
                  key={idx}
                  style={estilos.item(!!estadoActividades[idx])}
                  onClick={() => alternarActividad(idx)}
                >
                  <input
                    type="checkbox"
                    checked={!!estadoActividades[idx]}
                    onChange={() => {}}
                    style={{ marginTop: '3px', accentColor: '#0d9488' }}
                  />
                  <div>
                    <strong>{act.nombre}:</strong> {act.descripcion}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}