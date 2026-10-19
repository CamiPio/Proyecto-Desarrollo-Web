import React, { useState } from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';
import './style.css';

export default function App() {
  // Estado para controlar cuáles módulos están desbloqueados (Módulo 1 inicia desbloqueado)
  const [modulosDesbloqueados, setModulosDesbloqueados] = useState({ "01": true });

  const desbloquearSiguienteModulo = (numeroActual) => {
    const numeroSiguiente = String(parseInt(numeroActual, 10) + 1).padStart(2, '0');
    setModulosDesbloqueados((prev) => ({
      ...prev,
      [numeroSiguiente]: true
    }));
  };

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

  const listaModulos = [
    {
      numero: "01",
      nombre: "Funcionamiento Web y Motores de Renderizado",
      descripcion: "Analizando la infraestructura de internet, el viaje de los paquetes de datos y cómo los motores de renderizado procesan los documentos web.",
      actividades: [
        { nombre: "Laboratorio de inspección en DevTools", descripcion: "Abrir F12 e inspeccionar la pestaña Network al cargar un sitio de noticias para identificar archivos y orden de renderizado." },
        { nombre: "Rastreando la ruta de una página web", descripcion: "Usar Ping.eu para visualizar en un mapa el recorrido de los paquetes de datos desde Guatemala." },
        { nombre: "Maquetación visual vs. Árbol DOM", descripcion: "Diagramar el Árbol DOM (Padres, Hijos, Nodos) a partir de un código HTML5 semántico." },
        { nombre: "Infografía interactiva sobre motores", descripcion: "Crear un recurso en Canva/Genially comparando Blink, Gecko y WebKit." }
      ]
    },
    {
      numero: "02",
      nombre: "Protocolos de Seguridad (HTTP/HTTPS) y Netiqueta",
      descripcion: "Comprendiendo el cifrado de datos en la web, prevención de phishing y la aplicación de las reglas del código de ética digital.",
      actividades: [
        { nombre: "Auditoría de certificados SSL/TLS", descripcion: "Inspeccionar el candado de seguridad, Autoridad Certificadora y fechas de expiración en navegadores." },
        { nombre: "Escape Room de Phishing", descripcion: "Analizar 4 escenarios de correos y enlaces sospechosos para evitar trampas de ingeniería social." },
        { nombre: "Simulación HTTP vs HTTPS", descripcion: "Demostración de captura de tráfico comparando datos en texto plano vs. texto cifrado." },
        { nombre: "Manual de Netiqueta Digital", descripcion: "Redacción colaborativa de un código de ética para publicaciones y foros escolares." }
      ]
    },
    {
      numero: "03",
      nombre: "Arquitectura de Dominios y Jerarquía Web",
      descripcion: "Identificando extensiones (.com, .gob, .org), jerarquías de dominio y el nivel de autoridad e integridad institucional.",
      actividades: [
        { nombre: "Desarmando direcciones web", descripcion: "Separar URLs en protocolo, nombre principal y extensión (.com, .gob, .edu, .gt)." },
        { nombre: "Cédula de una página con WHOIS", descripcion: "Investigar dueño, año de creación y vencimiento de sitios oficiales vs. comerciales." },
        { nombre: "Diagrama Sitemap", descripcion: "Diseñar el árbol jerárquico de carpetas y navegación para un portal educativo." },
        { nombre: "Detección de Typosquatting", descripcion: "Analizar direcciones falsas con errores ortográficos y redactar consejos de prevención." }
      ]
    },
    {
      numero: "04",
      nombre: "Servicios de Hosting y Evaluación de Proveedores",
      descripcion: "Comparando plataformas de hosting gratuitas vs. de pago, analizando costos, restricciones, derechos sobre el contenido y riesgos.",
      actividades: [
        { nombre: "Cuadro comparativo de Hosting", descripcion: "Evaluar proveedores Compartido, VPS y Cloud según ancho de banda, espacio y costos." },
        { nombre: "Servidor local con XAMPP", descripcion: "Configurar un entorno local ejecutando un archivo de prueba en http://localhost." },
        { nombre: "Letras chiquitas de servicios gratuitos", descripcion: "Analizar limitaciones de visitas, anuncios y propiedad de contenido en plataformas gratuitas." },
        { nombre: "Subiendo archivos a la nube", descripcion: "Desplegar un sitio o archivo mediante GitHub Pages o enlaces públicos." }
      ]
    },
    {
      numero: "05",
      nombre: "Metadatos de Intermediación y Extensiones",
      descripcion: "Configurando metadatos técnicos para proteger la autoría, indexar contenidos y definir la información técnica del sitio.",
      actividades: [
        { nombre: "Laboratorio de etiquetas <head>", descripcion: "Agregar etiquetas charset, viewport, autor, descripción y palabras clave en HTML5." },
        { nombre: "Tarjeta Open Graph para redes", descripcion: "Configurar og:title, og:image y og:description para previsualizaciones en WhatsApp/Facebook." },
        { nombre: "Eliminación de metadatos Exif", descripcion: "Inspeccionar y borrar GPS y datos ocultos en fotografías digitales antes de publicarlas." },
        { nombre: "Creación del archivo robots.txt", descripcion: "Redactar directivas de acceso para motores de búsqueda." }
      ]
    },
    {
      numero: "06",
      nombre: "SEO Técnico y Etiquetas de Posicionamiento",
      descripcion: "Optimizando artículos mediante meta etiquetas para la interpretación de buscadores y redes.",
      actividades: [
        { nombre: "Auditoría con Google Lighthouse", descripcion: "Medir rendimiento, accesibilidad, buenas prácticas y SEO en el navegador." },
        { nombre: "Estructuración de encabezados", descripcion: "Corregir jerarquía de <h1> a <h6> en un artículo web." },
        { nombre: "Redacción de Snippets SEO", descripcion: "Escribir títulos (60 caracteres) y descripciones (155 caracteres) optimizados con palabras clave." },
        { nombre: "Optimización de imágenes y Alt Text", descripcion: "Comprimir imágenes y agregar texto alternativo para lectores de pantalla." }
      ]
    },
    {
      numero: "07",
      nombre: "Licencias de Datos, Software y Autoría",
      descripcion: "Aplicando licencias Creative Commons, gestión de derechos de autor y atribución transparente en publicaciones digitales.",
      actividades: [
        { nombre: "Generador Creative Commons", descripcion: "Seleccionar la licencia adecuada (BY, NC, ND, SA) e integrar su distintivo en la web." },
        { nombre: "Atribución con regla TASL", descripcion: "Redactar créditos formales para 5 recursos libres (Título, Autor, Fuente, Licencia)." },
        { nombre: "Análisis de casos de Copyright", descripcion: "Estudiar consecuencias legales sobre uso no autorizado de música e imágenes." },
        { nombre: "Software Libre vs. Propietario", descripcion: "Comparar licencias MIT/GPL frente a licencias comerciales restringidas." }
      ]
    },
    {
      numero: "08",
      nombre: "Tipologías de Artículos y Técnicas de Redacción",
      descripcion: "Redactando editoriales, crónicas, entrevistas y artículos de fondo diseñados para mantener la atención del lector digital.",
      actividades: [
        { nombre: "Pirámide Invertida Digital", descripcion: "Reestructurar un texto Placing la idea clave en el primer párrafo con viñetas y negritas." },
        { nombre: "Titulares de Alto Impacto", descripcion: "Crear titulares informativos y de opinión evitando el clickbait engañoso." },
        { nombre: "Técnicas de Escaneabilidad", descripcion: "Maquetar con citas <blockquote>, subtítulos y negritas estratégicas." },
        { nombre: "Crónica o Entrevista Multimedia", descripcion: "Escribir una pieza periodística enriquecida con enlaces e imágenes." }
      ]
    },
    {
      numero: "09",
      nombre: "Intención Comunicativa y Publicación Ética",
      descripcion: "Definiendo el objetivo de la publicación, realizando pruebas de seguridad e integridad.",
      actividades: [
        { nombre: "Mesa de Fact-Checking", descripcion: "Verificación cruzada de fuentes y búsqueda inversa de imágenes antes de publicar." },
        { nombre: "Lista de Chequeo Pre-Publicación", descripcion: "Pruebas de enlaces rotos, ortografía, adaptabilidad móvil y velocidad." },
        { nombre: "Publicación del Proyecto Final", descripcion: "Desplegar el recurso web garantizando estándares de accesibilidad y ética." },
        { nombre: "Auditoría de Pares (Peer Review)", descripcion: "Evaluación cruzada entre estudiantes mediante una rúbrica de calidad." }
      ]
    }
  ];

  return (
    <>
      <nav className="barra-menu">
        <ul className="menu-enlaces">
          <li className="enlace"><a href="#sobre-mi">Sobre mi</a></li>
          <li className="enlace"><a href="#competencia">Competencia</a></li>
          <li className="enlace"><a href="#bitacora">Bitacora de Módulos</a></li>
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

        <h1>Bitacora de modulos</h1>
        <div className="contenedor-secundario" id="bitacora">
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
      </main>

      <footer>
        <p>Bitacora de clases - Redacción Digital - Proyecto Semana 2</p>
        <p>Delia Camila López Pío - 2143225</p>
      </footer>
    </>
  );
}