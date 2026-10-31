import React from 'react';
import { motion } from 'framer-motion';

export default function HeaderClase({ tituloCurso }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2>
        <center>{tituloCurso}</center>
      </h2>
    </motion.header>
  );
}