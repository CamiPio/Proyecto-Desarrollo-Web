import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ActividadItem({ 
  numeroModulo, 
  nombreModulo, 
  descripcionModulo, 
  actividades = [], 
  estaDesbloqueado, 
  alCompletarModulo 
}) {
  const [mostrarActividades, setMostrarActividades] = useState(false);
  const [estadoActividades, setEstadoActividades] = useState({});

  const alternarActividad = (indice) => {
    if (!estaDesbloqueado) return;

    const nuevoEstado = {
      ...estadoActividades,
      [indice]: !estadoActividades[indice]
    };
    
    setEstadoActividades(nuevoEstado);

    const totalCompletadas = Object.values(nuevoEstado).filter(Boolean).length;
    if (totalCompletadas === actividades.length) {
      alCompletarModulo(numeroModulo);
    }
  };

  const totalCompletadas = Object.values(estadoActividades).filter(Boolean).length;
  const esModuloCompleto = actividades.length > 0 && totalCompletadas === actividades.length;

  return (
    <motion.section 
      className={`modulo ${!estaDesbloqueado ? 'modulo-bloqueado' : ''} ${esModuloCompleto ? 'modulo-completado' : ''}`}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="num-modulo">
        <div className="num">
          <p>módulo</p>
          <p className="numero">{numeroModulo}</p>
        </div>
        <div className="bloque-titulo-modulo">
          <h2 className="name-modulo">{nombreModulo}</h2>
          <span className="insignia-bloqueo">
            {!estaDesbloqueado ? (
              <><i className="fa-solid fa-lock"></i> Bloqueado</>
            ) : esModuloCompleto ? (
              <><i className="fa-solid fa-circle-check"></i> Módulo Completado</>
            ) : (
              <><i className="fa-solid fa-lock-open"></i> En Progreso</>
            )}
          </span>
        </div>
      </div>

      <article>
        {descripcionModulo}
      </article>

      {estaDesbloqueado && (
        <div className="contenedor-despliegue">
          <motion.button 
            className="boton-desplegar" 
            onClick={() => setMostrarActividades(!mostrarActividades)}
            whileTap={{ scale: 0.98 }}
          >
            {mostrarActividades ? (
              <><i className="fa-solid fa-chevron-up"></i> Ocultar Actividades</>
            ) : (
              <><i className="fa-solid fa-chevron-down"></i> Ver Actividades ({totalCompletadas}/{actividades.length})</>
            )}
          </motion.button>

          <AnimatePresence>
            {mostrarActividades && (
              <motion.div 
                className="lista-actividades-desplegable"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {actividades.map((act, idx) => (
                  <motion.div 
                    key={idx} 
                    className={`item-actividad ${estadoActividades[idx] ? 'actividad-hecha' : ''}`}
                    onClick={() => alternarActividad(idx)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <input 
                      type="checkbox" 
                      checked={!!estadoActividades[idx]} 
                      onChange={() => {}} 
                    />
                    <div className="texto-actividad">
                      <strong>{act.nombre}:</strong> {act.descripcion}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.section>
  );
}