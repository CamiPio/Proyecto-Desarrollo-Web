import React, { useState } from 'react';

export default function ActividadItem({ 
  numeroModulo, 
  nombreModulo, 
  descripcionModulo, 
  actividades = [], 
  estaDesbloqueado, 
  alCompletarModulo 
}) {
  // Estado para desplegar/ocultar el menú de actividades
  const [mostrarActividades, setMostrarActividades] = useState(false);
  
  // Estado para rastrear el estado de cada una de las 4 actividades (true/false)
  const [estadoActividades, setEstadoActividades] = useState({});

  const alternarActividad = (indice) => {
    if (!estaDesbloqueado) return;

    const nuevoEstado = {
      ...estadoActividades,
      [indice]: !estadoActividades[indice]
    };
    
    setEstadoActividades(nuevoEstado);

    // Verificar si las 4 actividades han sido completadas
    const totalCompletadas = Object.values(nuevoEstado).filter(Boolean).length;
    if (totalCompletadas === actividades.length) {
      alCompletarModulo(numeroModulo);
    }
  };

  const totalCompletadas = Object.values(estadoActividades).filter(Boolean).length;
  const esModuloCompleto = actividades.length > 0 && totalCompletadas === actividades.length;

  return (
    <section className={`modulo ${!estaDesbloqueado ? 'modulo-bloqueado' : ''} ${esModuloCompleto ? 'modulo-completado' : ''}`}>
      <div className="num-modulo">
        <div className="num">
          <p>módulo</p>
          <p className="numero">{numeroModulo}</p>
        </div>
        <div className="bloque-titulo-modulo">
          <h2 className="name-modulo">{nombreModulo}</h2>
          <span className="insignia-bloqueo">
            {!estaDesbloqueado ? '🔒 Bloqueado' : esModuloCompleto ? '✅ Módulo Completado' : '🔓 En Progreso'}
          </span>
        </div>
      </div>

      <article>
        {descripcionModulo}
      </article>

      {/* Botón para desplegar/ocultar las 4 actividades */}
      {estaDesbloqueado && (
        <div className="contenedor-despliegue">
          <button 
            className="boton-desplegar" 
            onClick={() => setMostrarActividades(!mostrarActividades)}
          >
            {mostrarActividades ? '▲ Ocultar Actividades' : `▼ Ver Actividades (${totalCompletadas}/${actividades.length})`}
          </button>

          {/* Despliegue interactivo de las 4 actividades */}
          {mostrarActividades && (
            <div className="lista-actividades-desplegable">
              {actividades.map((act, idx) => (
                <div 
                  key={idx} 
                  className={`item-actividad ${estadoActividades[idx] ? 'actividad-hecha' : ''}`}
                  onClick={() => alternarActividad(idx)}
                >
                  <input 
                    type="checkbox" 
                    checked={!!estadoActividades[idx]} 
                    onChange={() => {}} 
                  />
                  <div className="texto-actividad">
                    <strong>{act.nombre}:</strong> {act.descripcion}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}