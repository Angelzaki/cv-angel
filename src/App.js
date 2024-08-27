import React from 'react';
import { Link } from 'react-scroll'; // Importa para navegación suave
import './index.css'; // Asegúrate de que Tailwind CSS esté importado correctamente

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-gray-100 p-8 rounded-lg shadow-lg border-4 border-gray-200">
        <h1 className="text-4xl font-bold mb-4">Angel David Salazar Maylle</h1>
        <p className="text-lg mb-4">San Juan de Lurigancho, Lima | (+51) 925518365 | angel.salazarmaylle@gmail.com | DNI: 76841880</p>
        <div className="flex space-x-4 mb-8">
          <a href="https://www.linkedin.com/in/angel-salazar-maylle-36236b198/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a href="https://github.com/Angelzaki" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://angelzaki.github.io/#portfolio" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe text-2xl"></i>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/CV-Angel-Salazar.pdf" download>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Descargar CV
            </button>
          </a>
          <Link to="contact" smooth={true} duration={500}>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Contactar
            </button>
          </Link>
        </div>
      </div>

      <main className="p-8 w-full max-w-3xl">
        <section id="perfil" className="mb-8">
          <h2 className="text-3xl font-semibold">Perfil</h2>
          <p className="mt-2 text-justify">
            Estudiante de Ingeniería de Sistemas apasionado por el desarrollo de software, con habilidades en metodologías ágiles y herramientas tecnológicas. Experiencia en proyectos que involucran desarrollo de soluciones innovadoras, optimización de procesos y trabajo en equipo. Busco oportunidades para aplicar mis habilidades en un entorno dinámico y colaborativo.
          </p>
        </section>
        <section id="educacion" className="mb-8">
          <h2 className="text-3xl font-semibold">Educación</h2>
          <p className="mt-2 text-justify">Universidad Tecnológica del Perú</p>
          <p className="text-justify">Mar 2021 – Actualidad</p>
          <p className="text-justify">Ingeniería de sistemas e informática, X ciclo</p>
          <p className="text-justify">Quinto Superior</p>
        </section>
        <section id="actividades" className="mb-8">
          <h2 className="text-3xl font-semibold">Actividades Extracurriculares</h2>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">Scrum Master / Control de Calidad - No Country</h3>
            <p>Junio 2024 – Agosto 2024</p>
            <ul className="list-disc list-inside ml-4 mt-2 text-justify">
              <li>Facilité reuniones diarias y retrospectivas, asegurando la adherencia a los principios de Scrum y optimizando la gestión del tiempo y los recursos.</li>
              <li>Coordiné con desarrolladores y diseñadores para resolver problemas y alinearse con los objetivos del proyecto.</li>
              <li>Ejecuté pruebas manuales y automatizadas, creando planes de prueba y documentando defectos para asegurar que la aplicación cumpliera con los estándares de calidad.</li>
              <li>Proporcioné feedback para mejorar la usabilidad y la experiencia del usuario.</li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Proyecto Personal: Chatbot de IA para Diagnóstico de Dermatitis</h3>
            <p>Julio 2024 – Presente</p>
            <ul className="list-disc list-inside ml-4 mt-2 text-justify">
              <li>Desarrollando un chatbot utilizando inteligencia artificial para la identificación y clasificación de tipos de dermatitis, centrado en mejorar la precisión diagnóstica en el sector salud.</li>
              <li>Implemento técnicas de procesamiento del lenguaje natural (PLN) para desarrollar el chatbot.</li>
              <li>Analicé datos de interacción para evaluar la precisión del diagnóstico y la efectividad en la información proporcionada al usuario.</li>
            </ul>
          </div>
        </section>
        <section id="habilidades" className="mb-8">
          <h2 className="text-3xl font-semibold">Habilidades Técnicas</h2>
          <ul className="list-disc list-inside ml-4 mt-2 text-justify">
            <li><strong>Lenguajes de Programación:</strong> Java, JavaScript, Python, HTML, CSS.</li>
            <li><strong>Frameworks y Librerías:</strong> React, Angular, React Native.</li>
            <li><strong>Bases de Datos:</strong> SQL Server, Oracle, MySQL, Firebase.</li>
            <li><strong>Herramientas de Prueba y Automatización:</strong> Cypress, Selenium, Postman, JMETER.</li>
            <li><strong>Metodologías y Marcos de Trabajo:</strong> Scrum, ITIL, TOGAF, Lean Six Sigma.</li>
            <li><strong>Otros:</strong> Power BI, Visual Studio, Power Apps, Power Automate, Office 365.</li>
          </ul>
        </section>
        <section id="certificados" className="mb-8">
          <h2 className="text-3xl font-semibold">Certificados</h2>
          <ul className="list-disc list-inside ml-4 mt-2 text-justify">
            <li>Manejo de Inglés a Nivel Avanzado, ICPNA, 2021.</li>
            <li>Scrum Master Professional Certificate - SMPC®, CertiProf, 2024.</li>
            <li>Fundamentos de la Dirección de Proyectos Predictive, PMI, 2024.</li>
            <li>QA desde cero: Principio, habilidades y el futuro con IA, Desafio Latam, 2024.</li>
            <li>Accredited Software Testing Fundamentals Certification (AICS® ASTFC), AICS 2024.</li>
            <li>Aprende a analizar datos con Python I y II, Desafio Latam, 2024.</li>
            <li>Curso profesional de Python - Semana de Datos, CodigoFacilito 2024.</li>
            <li>Introduction to Cybersecurity, Cisco Networking Academy, 2024.</li>
            <li>IA Text Summarizer App, Postman 2024.</li>
            <li>CCNA: Switching, Routing, and Wireless Essentials, Cisco Networking Academy 2024.</li>
          </ul>
        </section>
      </main>
      
      <footer id="contact" className="w-full max-w-3xl bg-gray-100 p-8 rounded-lg shadow-lg border-4 border-gray-200 mt-8">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <p className="text-lg">Si tienes alguna pregunta o deseas discutir una posible colaboración, no dudes en contactarme.</p>
        <div className="mt-4">
          <a href="mailto:angel.salazarmaylle@gmail.com">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Enviar Email
            </button>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
