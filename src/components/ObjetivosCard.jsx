import React from 'react';
import { motion } from 'framer-motion';

export default function ObjetivosCard({ 
  identificador, 
  tituloSeccion, 
  subtitulo, 
  descripcion, 
  puntosClave 
}) {
  return (
    <motion.div 
      className="superior" 
      id={identificador}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      {tituloSeccion && <h1>{tituloSeccion}</h1>}
      {subtitulo && <h3>{subtitulo}</h3>}
      {descripcion && <p>{descripcion}</p>}

      {puntosClave && (
        <div className="caja-info">
          {puntosClave.map((punto, indice) => (
            <p key={indice}>{punto}</p>
          ))}
        </div>
      )}
    </motion.div>
  );
}