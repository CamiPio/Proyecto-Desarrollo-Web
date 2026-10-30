import React, { useState } from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

export default function App() {
  const [modulosDesbloqueados, setModulosDesbloqueados] = useState({ "01": true });

  const desbloquearSiguienteModulo = (numeroActual) => {
    const numeroSiguiente = String(parseInt(numeroActual, 10) + 1).padStart(2, '0');
    setModulosDesbloqueados((prev) => ({
      ...prev,
      [numeroSiguiente]: true
    }));
  };

  const competenciaCNB = "Crea artículos y recursos digitales con una intención comunicativa clara, integrando metadatos técnicos y criterios de seguridad en dominios para garantizar la integridad, autoría y visibilidad ética de la información en la Web.";
  const indicadorCNB = "Reconoce el funcionamiento de la web, infraestructura de servidores, protocolos HTTPS, arquitectura de dominios y maquetación semántica para la retención del lector.";

  const listaModulos = [
    {
      numero: "01",
      nombre: "Funcionamiento Web y Motores de Renderizado",
      descripcion: "Analizando la infraestructura de internet, el viaje de los paquetes de datos y cómo los motores de renderizado procesan los documentos web.",
      actividades: [
        { nombre: "Laboratorio de inspección en DevTools", descripcion: "Abrir F12 e inspeccionar la pestaña Network al cargar un sitio de noticias." },
        { nombre: "Rastreando la ruta web", descripcion: "Usar Ping.eu para visualizar el recorrido de paquetes desde Guatemala." },
        { nombre: "Maquetación vs. Árbol DOM", descripcion: "Diagramar el Árbol DOM a partir de código HTML5 semántico." },
        { nombre: "Infografía de motores", descripcion: "Crear un recurso comparando Blink, Gecko y WebKit." }
      ]
    },
    {
      numero: "02",
      nombre: "Protocolos de Seguridad (HTTP/HTTPS) y Netiqueta",
      descripcion: "Comprendiendo el cifrado de datos en la web, prevención de phishing y las reglas de conducta digital.",
      actividades: [
        { nombre: "Auditoría SSL/TLS", descripcion: "Inspeccionar certificados digitales y fechas de expiración." },
        { nombre: "Escape Room de Phishing", descripcion: "Analizar correos y enlaces sospechosos para evitar fraudes." },
        { nombre: "Simulación HTTP vs HTTPS", descripcion: "Demostración de captura de tráfico cifrado y en texto plano." },
        { nombre: "Manual de Netiqueta", descripcion: "Redacción colaborativa de normas de convivencia escolar digital." }
      ]
    },
    {
      numero: "03",
      nombre: "Arquitectura de Dominios y Jerarquía Web",
      descripcion: "Identificando extensiones (.com, .gob, .gt), jerarquías de dominio y niveles de autoridad.",
      actividades: [
        { nombre: "Desarmando URLs", descripcion: "Separar enlaces en protocolo, nombre principal y extensión." },
        { nombre: "Cédula WHOIS", descripcion: "Investigar propietario y vencimiento de sitios oficiales vs. comerciales." },
        { nombre: "Diagrama Sitemap", descripcion: "Diseñar la navegación jerárquica para un portal educativo." },
        { nombre: "Detección de Typosquatting", descripcion: "Analizar direcciones tramposas con errores intencionados." }
      ]
    }
  ];

  const estilosApp = {
    contenedor: {
      maxWidth: '680px',
      margin: '30px auto',
      padding: '30px',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      backgroundColor: '#f8fafc',
      borderRadius: '20px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
      color: '#0f172a'
    },
    tituloBitacora: {
      color: '#072b8e',
      fontSize: '1.3rem',
      fontWeight: '700',
      textAlign: 'center',
      margin: '25px 0 15px 0',
      paddingBottom: '8px',
      borderBottom: '2px solid #e2e8f0'
    },
    footer: {
      textAlign: 'center',
      marginTop: '30px',
      paddingTop: '15px',
      borderTop: '1px solid #e2e8f0',
      color: '#64748b',
      fontSize: '0.85rem'
    }
  };

  return (
    <div style={estilosApp.contenedor}>
      <HeaderClase
        tituloTema="Subárea 16.2: Producción de Contenido Digital"
        nombreDocente="Delia Camila López Pío"
        horario="Jornada Vespertina (13:00 - 17:30 hrs)"
      />

      <ObjetivosCard
        competencia={competenciaCNB}
        indicadorLogro={indicadorCNB}
      />

      <h2 style={estilosApp.tituloBitacora}>Bitácora de Módulos Interactivos</h2>

      <div>
        {listaModulos.map((mod) => (
          <ActividadItem
            key={mod.numero}
            numeroModulo={mod.numero}
            nombreModulo={mod.nombre}
            descripcionModulo={mod.descripcion}
            actividades={mod.actividades}
            estaDesbloqueado={!!modulosDesbloqueados[mod.numero]}
            alCompletarModulo={desbloquearSiguienteModulo}
          />
        ))}
      </div>

      <footer style={estilosApp.footer}>
        <p>Bitácora de clases | Redacción Digital — 2026</p>
        <p>Delia Camila López Pío — Carnet: 2143225</p>
      </footer>
    </div>
  );
}