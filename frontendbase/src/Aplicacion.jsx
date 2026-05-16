import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

class Aplicacion extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById('canvasPractica');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#003366';
      ctx.fillRect(0, 0, 420, 150);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px Arial';
      ctx.fillText('Practica 3', 24, 55);
      ctx.font = '15px Arial';
      ctx.fillText('Aplicacion Web Multimedia', 24, 82);
      ctx.fillStyle = '#aac4e8';
      ctx.font = '13px Arial';
      ctx.fillText('Grupo: 4AM2  |  ESCOM - IPN', 24, 112);
      ctx.strokeStyle = '#aac4e8';
      ctx.lineWidth = 2;
      ctx.strokeRect(6, 6, 408, 138);
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">Practica 3 - Aplicacion Web Multimedia</h1>

        {/* CANVAS */}
        <div className="card">
          <h2>Banner de la Practica (canvas)</h2>
          <canvas id="canvasPractica" width="420" height="150" />
        </div>

        {/* TABLE */}
        <div className="card">
          <h2>Equipo de Trabajo (table)</h2>
          <table className="team-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Nombres</th>
                <th>Boleta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td><td>Jimenez</td><td>Balderas</td>
                <td>Evelyn Monserrat</td><td>2025630056</td>
              </tr>
              <tr>
                <td>2</td><td>Reyes</td><td>Calva</td>
                <td>Angel David</td><td>2025630345</td>
              </tr>
              <tr>
                <td>3</td><td>Ortega</td><td>Reyes</td>
                <td>Dante Santiago</td><td>2025630508</td>
              </tr>
              <tr>
                <td>4</td><td>Moreno</td><td>Popoca</td>
                <td>Erick Fernando</td><td>2022710124</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PRE */}
        <div className="card">
          <h2>Informacion de la Practica (pre)</h2>
          <pre className="info-pre">
{`Grupo:    4AM2
Practica: 3 - Aplicacion Web Multimedia
Materia:  Desarrollo de Aplicaciones Web
Escuela:  ESCOM - IPN`}
          </pre>
        </div>

        {/* UL */}
        <div className="card">
          <h2>Tecnologias Utilizadas (ul)</h2>
          <ul>
            <li>React 19 con Babel (ECMAScript 6 a ES5)</li>
            <li>Webpack 5 con HtmlWebpackPlugin</li>
            <li>Node.js con Express 4.21.1</li>
            <li>MySQL 8.3.0 con Sequelize ORM</li>
            <li>Bootstrap 5 y CSS3</li>
          </ul>
        </div>

        {/* OL */}
        <div className="card">
          <h2>Flujo de la Aplicacion (ol)</h2>
          <ol>
            <li>El usuario llena el formulario en el Front-End (React).</li>
            <li>Al dar Submit, los datos viajan via GET a /Action.</li>
            <li>El servidor Express recibe y parsea los parametros.</li>
            <li>El servidor genera y retorna una pagina HTML completa y dinamica.</li>
          </ol>
        </div>

        {/* IMG */}
        <div className="card">
          <h2>Imagen de Ejemplo (img)</h2>
          <img
            src="https://www.w3schools.com/html/pic_trulli.jpg"
            alt="Imagen de ejemplo"
            width="200"
            className="logo-img"
          />
        </div>

        {/* AUDIO */}
        <div className="card">
          <h2>Archivo de Audio (audio)</h2>
          <audio controls>
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
            <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
            Tu navegador no soporta el elemento audio.
          </audio>
        </div>

        {/* VIDEO */}
        <div className="card">
          <h2>Archivo de Video (video)</h2>
          <video width="320" height="240" controls>
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            <source src="https://www.w3schools.com/html/movie.ogg" type="video/ogg" />
            Tu navegador no soporta el elemento video.
          </video>
        </div>

        {/* IFRAME */}
        <div className="card">
          <h2>Mapa de ESCOM (iframe)</h2>
          <iframe
            src="https://maps.google.com/maps?q=ESCOM+IPN+Mexico+City&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="460"
            height="300"
            style={{ border: '1px solid #aaa' }}
            allowFullScreen
            loading="lazy"
            title="Ubicacion ESCOM IPN"
          />
        </div>

        {/* FORM */}
        <div className="card">
          <h2>Formulario de Acceso</h2>
          <form method="get" action="http://localhost:8080/Action" className="login-form">
            <div className="field">
              <label htmlFor="id">Usuario / ID:</label>
              <input type="text" id="id" name="id" placeholder="Ingresa tu ID" />
            </div>
            <div className="field">
              <label htmlFor="password">Contrasena:</label>
              <input type="password" id="password" name="password" placeholder="Ingresa tu contrasena" />
            </div>
            <div className="field">
              <label htmlFor="nombre">Nombre completo:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Nombre y apellidos" />
            </div>
            <div className="field">
              <label htmlFor="boleta">Boleta:</label>
              <input type="text" id="boleta" name="boleta" placeholder="Numero de boleta" />
            </div>
            <input type="submit" value="Enviar Datos" className="submit-btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default Aplicacion;

const rootElement = document.getElementById("contenedor");
const root = createRoot(rootElement);
root.render(<Aplicacion />);
