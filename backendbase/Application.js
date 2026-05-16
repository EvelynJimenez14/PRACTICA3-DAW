const express = require("express");
const app = express();
const puerto = 8080;
const url = require("url");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

app.get("/Action", (request, response) => {
    const q        = url.parse(request.url, true).query;
    const id       = q.id       || '(no proporcionado)';
    const password = q.password || '(no proporcionado)';
    const nombre   = q.nombre   || '(no proporcionado)';
    const boleta   = q.boleta   || '(no proporcionado)';

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Respuesta del Servidor - Practica 3</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f0f0f0; color: #000; margin: 0; padding: 20px; }
    .container { max-width: 840px; margin: 0 auto; background: #fff; padding: 20px 26px; border: 1px solid #ccc; }
    h1 { color: #003366; border-bottom: 2px solid #003366; padding-bottom: 8px; }
    h2 { color: #003366; font-size: 1.05rem; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 0; }
    section { border: 1px solid #ccc; padding: 14px 18px; margin-bottom: 16px; }
    table { width: 100%; border-collapse: collapse; }
    th { background: #003366; color: #fff; padding: 7px 11px; text-align: left; border: 1px solid #003366; }
    td { border: 1px solid #aaa; padding: 6px 11px; }
    tr:nth-child(even) td { background: #eef2f7; }
    pre { background: #f5f5f5; border: 1px solid #ccc; padding: 12px 16px; font-size: 13px; margin: 0; white-space: pre-wrap; }
    ul, ol { line-height: 1.9; padding-left: 22px; }
    .back-btn { display: inline-block; background: #003366; color: #fff; padding: 8px 22px; text-decoration: none; border: 1px solid #002244; margin-top: 8px; }
    .back-btn:hover { background: #004488; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Datos Recibidos por el Servidor</h1>
    <p>El servidor Express proceso correctamente la solicitud enviada desde el formulario React.</p>

    <!-- TABLE -->
    <section>
      <h2>Parametros Recibidos (table)</h2>
      <table>
        <thead>
          <tr><th>Parametro</th><th>Valor Recibido</th></tr>
        </thead>
        <tbody>
          <tr><td>ID / Usuario</td><td><strong>${id}</strong></td></tr>
          <tr><td>Contrasena</td><td>${password}</td></tr>
          <tr><td>Nombre</td><td>${nombre}</td></tr>
          <tr><td>Boleta</td><td>${boleta}</td></tr>
        </tbody>
      </table>
    </section>

    <!-- PRE -->
    <section>
      <h2>Datos en Formato Verbatim (pre)</h2>
      <pre>ID:         ${id}
Contrasena: ${password}
Nombre:     ${nombre}
Boleta:     ${boleta}</pre>
    </section>

    <!-- UL -->
    <section>
      <h2>Resumen de Datos (ul)</h2>
      <ul>
        <li><strong>ID:</strong> ${id}</li>
        <li><strong>Contrasena:</strong> ${password}</li>
        <li><strong>Nombre:</strong> ${nombre}</li>
        <li><strong>Boleta:</strong> ${boleta}</li>
      </ul>
    </section>

    <!-- OL -->
    <section>
      <h2>Pasos del Procesamiento (ol)</h2>
      <ol>
        <li>El cliente envio el formulario via GET desde el Front-End React.</li>
        <li>Express recibio la peticion HTTP en la ruta /Action.</li>
        <li>Se extrajeron los parametros de la query string con el modulo url.</li>
        <li>Se genero esta pagina HTML dinamica y se respondio con response.send().</li>
      </ol>
    </section>

    <!-- IMG -->
    <section>
      <h2>Imagen de Ejemplo (img)</h2>
      <img
        src="https://www.w3schools.com/html/pic_trulli.jpg"
        alt="Imagen de ejemplo"
        width="200"
        style="border:1px solid #aaa; padding:4px;"
      />
    </section>

    <!-- AUDIO -->
    <section>
      <h2>Archivo de Audio (audio)</h2>
      <audio controls>
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
        <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
        Tu navegador no soporta el elemento audio.
      </audio>
    </section>

    <!-- VIDEO -->
    <section>
      <h2>Archivo de Video (video)</h2>
      <video width="320" height="240" controls>
        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
        <source src="https://www.w3schools.com/html/movie.ogg" type="video/ogg" />
        Tu navegador no soporta el elemento video.
      </video>
    </section>

    <!-- IFRAME -->
    <section>
      <h2>Mapa de ESCOM (iframe)</h2>
      <iframe
        src="https://maps.google.com/maps?q=ESCOM+IPN+Mexico+City&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="460" height="280"
        style="border:1px solid #aaa;"
        allowfullscreen
        loading="lazy"
        title="Ubicacion ESCOM IPN">
      </iframe>
    </section>

    <!-- CANVAS -->
    <section>
      <h2>Confirmacion Visual (canvas)</h2>
      <canvas id="cvConfirm" width="380" height="90"
              style="border:1px solid #aaa; display:block;"></canvas>
      <script>
        (function () {
          var c   = document.getElementById('cvConfirm');
          var ctx = c.getContext('2d');
          ctx.fillStyle = '#003366';
          ctx.fillRect(0, 0, 380, 90);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 16px Arial';
          ctx.fillText('Datos procesados correctamente', 20, 38);
          ctx.fillStyle = '#aac4e8';
          ctx.font = '13px Arial';
          ctx.fillText('Servidor: Express 4.21.1  |  Puerto 8080', 20, 65);
        })();
      </script>
    </section>

    <a href="javascript:history.back()" class="back-btn">Volver al Formulario</a>
  </div>
</body>
</html>`;

    response.send(html);
});

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
