import React from 'react';

export default function ObjetivosCard({ 
  identificador, 
  tituloSeccion, 
  subtitulo, 
  descripcion, 
  puntosClave 
}) {
  return (
    <div className="superior" id={identificador}>
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
    </div>
  );
}