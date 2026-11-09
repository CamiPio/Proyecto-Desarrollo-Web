import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';
import './style.css';

export default function App() {
  const [modulos, setModulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorServidor, setErrorServidor] = useState(null);

  const [modulosDesbloqueados, setModulosDesbloqueados] = useState({ "01": true });

  const desbloquearSiguienteModulo = (numeroActual) => {
    const numeroSiguiente = String(parseInt(numeroActual, 10) + 1).padStart(2, '0');
    setModulosDesbloqueados((prev) => ({
      ...prev,
      [numeroSiguiente]: true
    }));
  };

  // Actividades pedagógicas asociadas a cada número de módulo
  const actividadesPorModulo = {
    "01": [
      { nombre: "Laboratorio de inspección en DevTools", descripcion: "Abrir F12 e inspeccionar la pestaña Network al cargar un sitio de noticias." },
      { nombre: "Rastreando la ruta de una página web", descripcion: "Usar Ping.eu para visualizar el recorrido de paquetes desde Guatemala." },
      { nombre: "Maquetación visual vs. Árbol DOM", descripcion: "Diagramar el Árbol DOM a partir de código HTML5 semántico." },
      { nombre: "Infografía interactiva sobre motores", descripcion: "Crear un recurso en Canva/Genially comparando Blink, Gecko y WebKit." }
    ],
    "02": [
      { nombre: "Auditoría de certificados SSL/TLS", descripcion: "Inspeccionar el candado de seguridad y fechas de expiración." },
      { nombre: "Escape Room de Phishing", descripcion: "Analizar escenarios de correos y enlaces sospechosos." },
      { nombre: "Simulación HTTP vs HTTPS", descripcion: "Demostración de captura de tráfico cifrado y plano." },
      { nombre: "Manual de Netiqueta Digital", descripcion: "Redacción colaborativa de un código de ética escolar." }
    ],
    "03": [
      { nombre: "Desarmando direcciones web", descripcion: "Separar URLs en protocolo, nombre principal y extensión." },
      { nombre: "Cédula de una página con WHOIS", descripcion: "Investigar dueño y vencimiento de sitios oficiales." },
      { nombre: "Diagrama Sitemap", descripcion: "Diseñar el árbol jerárquico para un portal educativo." },
      { nombre: "Detección de Typosquatting", descripcion: "Analizar direcciones falsas con errores ortográficos." }
    ],
    "04": [
      { nombre: "Cuadro comparativo de Hosting", descripcion: "Evaluar proveedores Compartido, VPS y Cloud." },
      { nombre: "Servidor local con XAMPP", descripcion: "Configurar un entorno local ejecutando un archivo de prueba." },
      { nombre: "Letras chiquitas de servicios gratuitos", descripcion: "Analizar limitaciones de visitas y anuncios." },
      { nombre: "Subiendo archivos a la nube", descripcion: "Desplegar un sitio mediante GitHub Pages." }
    ],
    "05": [
      { nombre: "Laboratorio de etiquetas <head>", descripcion: "Agregar etiquetas charset, viewport y autor en HTML5." },
      { nombre: "Tarjeta Open Graph para redes", descripcion: "Configurar og:title e og:image para previsualizaciones." },
      { nombre: "Eliminación de metadatos Exif", descripcion: "Inspeccionar y borrar GPS en fotografías digitales." },
      { nombre: "Creación del archivo robots.txt", descripcion: "Redactar directivas de acceso para buscadores." }
    ],
    "06": [
      { nombre: "Auditoría con Google Lighthouse", descripcion: "Medir rendimiento, accesibilidad y SEO en el navegador." },
      { nombre: "Estructuración de encabezados", descripcion: "Corregir jerarquía de <h1> a <h6> en un artículo web." },
      { nombre: "Redacción de Snippets SEO", descripcion: "Escribir títulos y descripciones optimizados." },
      { nombre: "Optimización de imágenes y Alt Text", descripcion: "Comprimir imágenes y agregar texto alternativo." }
    ],
    "07": [
      { nombre: "Generador Creative Commons", descripcion: "Seleccionar la licencia adecuada e integrar su distintivo." },
      { nombre: "Atribución con regla TASL", descripcion: "Redactar créditos formales para recursos libres." },
      { nombre: "Análisis de casos de Copyright", descripcion: "Estudiar consecuencias legales sobre uso no autorizado." },
      { nombre: "Software Libre vs. Propietario", descripcion: "Comparar licencias MIT/GPL frente a comerciales." }
    ],
    "08": [
      { nombre: "Pirámide Invertida Digital", descripcion: "Reestructurar un texto colocando la idea clave al inicio." },
      { nombre: "Titulares de Alto Impacto", descripcion: "Crear titulares informativos evitando clickbait." },
      { nombre: "Técnicas de Escaneabilidad", descripcion: "Maquetar con citas y subtítulos estratégicos." },
      { nombre: "Crónica o Entrevista Multimedia", descripcion: "Escribir una pieza periodística enriquecida." }
    ],
    "09": [
      { nombre: "Mesa de Fact-Checking", descripcion: "Verificación cruzada de fuentes antes de publicar." },
      { nombre: "Lista de Chequeo Pre-Publicación", descripcion: "Pruebas de enlaces rotos y adaptabilidad móvil." },
      { nombre: "Publicación del Proyecto Final", descripcion: "Desplegar el recurso web garantizando ética y accesibilidad." },
      { nombre: "Auditoría de Pares (Peer Review)", descripcion: "Evaluación cruzada mediante rúbrica de calidad." }
    ]
  };

  // Async/Await y Try/Catch
  useEffect(() => {
    async function obtenerDatosSeguros() {
    // Lectura del archivo .env donde estan las llaves de acceso a la base de datos en la nube
    const NOCODB_URL = import.meta.env.VITE_NOCODB_URL;
    const API_TOKEN = import.meta.env.VITE_API_TOKEN;

      try {
        const respuesta = await fetch(NOCODB_URL, {
          method: 'GET',
          headers: {
            'xc-token': API_TOKEN,
            'Content-Type': 'application/json'
          }
        });

        // Validación de estado HTTP del servidor
        if (!respuesta.ok) {
          throw new Error(`Error en el servidor: Estado HTTP ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        const registros = datos.records || datos.list || datos.rows || [];
        setModulos(registros);
        setErrorServidor(null); // Limpiamos errores si la conexión es exitosa

      } catch (error) {
        console.error('Fallo detectado en la petición asincrónica:', error.message);
        setErrorServidor('No se pudo establecer conexión con la base de datos en la nube. Verifique su red o su API Token.');
      } finally {
        // Apagamos el semáforo de carga haya éxito o error
        setCargando(false);
      }
    }

    obtenerDatosSeguros();
  }, []);

  const informacionDocente = {
    nombre: "Delia Camila López Pío",
    subtitulo: "Docente de Tecnología y Estudiante de Profesorado en Enseñanza Media",
    biografia: "Creo en el poder de la educación y en la capacidad de transformar el futuro. Mi vocación como docente nace del convencimiento de que, con la guía y el acompañamiento correcto, cada estudiante tiene el potencial de alcanzar sus sueños y dejar su propia huella en el entorno digital."
  };

  const competenciaCurso = [
    "Crea artículos y recursos digitales con una intención comunicativa clara, integrando metadatos técnicos y criterios de seguridad en dominios para garantizar la integridad, autoría y visibilidad ética de la información en la Web.",
    "Transicionar de la redacción lineal a una redacción estratégica digital. El estudiante comprende cómo viaja la información en la red, reconoce el funcionamiento de los motores de renderizado, protocolos HTTP/HTTPS, hosting y tipos de dominio para publicar de manera responsable y segura.",
    "Mitigación del déficit de atención, desinformación y vulnerabilidades como el phishing mediante la formación crítica en metadatos y análisis de autoridad en dominios."
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="barra-menu">
        <ul className="menu-enlaces">
          <li className="enlace"><a href="#sobre-mi">Sobre mí</a></li>
          <li className="enlace"><a href="#competencia">Competencia</a></li>
          <li className="enlace"><a href="#bitacora">Bitácora de Módulos</a></li>
        </ul>
      </nav>

      <HeaderClase 
        tituloCurso="Producción de Contenido Digital — Bachillerato en Computación" 
      />

      <main className="contenedor">
        <ObjetivosCard 
          identificador="sobre-mi"
          tituloSeccion={informacionDocente.nombre}
          subtitulo={informacionDocente.subtitulo}
          descripcion={informacionDocente.biografia}
        />

        <ObjetivosCard 
          identificador="competencia"
          tituloSeccion="Competencia del curso"
          puntosClave={competenciaCurso}
        />

        <h1>Bitácora de Módulos</h1>

        {/* Semáforo de carga condicional */}
        {cargando && (
          <p style={{ textAlign: 'center', padding: '20px', color: 'var(--azul-cian)', fontWeight: 'bold' }}>
            <i className="fa-solid fa-spinner fa-spin"></i> Sincronizando datos desde el servidor en la nube...
          </p>
        )}

        {/* Alerta visual amigable si el bloque catch atrapó un error */}
        {errorServidor && (
          <div style={{ padding: '15px', background: '#fee2e2', border: '1px solid #ef4444', borderRadius: '8px', color: '#b91c1c', margin: '20px 0' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Atención Docente / Estudiante:</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '0.9em' }}>{errorServidor}</p>
          </div>
        )}

        {/* Renderizado visual seguro */}
        <div className="contenedor-secundario" id="bitacora">
          {!cargando && !errorServidor && modulos.length === 0 && (
            <p style={{ textAlign: 'center', padding: '20px', color: '#cbd5e1' }}>
              No se encontraron registros activos en la tabla de NocoDB.
            </p>
          )}

          {!cargando && !errorServidor && modulos.map((item, index) => {
            const campos = item.fields || item;
            
            const numeroCrudo = campos.numero !== undefined ? campos.numero : (index + 1);
            const numMod = String(numeroCrudo).padStart(2, '0');
            
            const nomMod = campos.nombre ;
            const descMod = campos.descripcion;
            
            const actividadesAsociadas = actividadesPorModulo[numMod] || [];

            return (
              <ActividadItem 
                key={item.id || index}
                numeroModulo={numMod}
                nombreModulo={nomMod}
                descripcionModulo={descMod}
                actividades={actividadesAsociadas}
                estaDesbloqueado={!!modulosDesbloqueados[numMod]}
                alCompletarModulo={desbloquearSiguienteModulo}
              />
            );
          })}
        </div>
      </main>

      <footer>
        <p>Bitácora de clases - Redacción Digital - Proyecto Desarrollo Web Semana 8</p>
        <p>Delia Camila López Pío - 2143225</p>
      </footer>
    </motion.div>
  );
}