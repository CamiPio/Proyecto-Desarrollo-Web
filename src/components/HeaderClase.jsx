import React from 'react';

export default function HeaderClase({ tituloCurso }) {
  return (
    <header>
      <h2>
        <center>{tituloCurso}</center>
      </h2>
    </header>
  );
}