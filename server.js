// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const path = require('path');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'repertorio',
//   password: '11235',
//   port: 5432,
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname+'/index.html'));
//   });

// app.get('/canciones', (req, res) => {
//   pool.query('SELECT * FROM canciones', (err, result) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.send(result.rows);
//   });
// });

// app.post('/cancion', (req, res) => {
//   const { titulo, artista, tono } = req.body;
//   const query = {
//     text: 'INSERT INTO canciones(titulo, artista, tono) VALUES($1, $2, $3)',
//     values: [titulo, artista, tono]
//   };
//   pool.query(query)
//     .then(() => res.send('Canción agregada'))
//     .catch((err) => console.log(err));
// });

// app.put('/cancion', (req, res) => {
//   const { id, titulo, artista, tono } = req.body;
//   const query = {
//     text: 'UPDATE canciones SET titulo=$1, artista=$2, tono=$3 WHERE id=$4',
//     values: [titulo, artista, tono, id]
//   };
//   pool.query(query)
//     .then(() => res.send('Canción actualizada'))
//     .catch((err) => console.log(err));
// });

// app.delete('/cancion', (req, res) => {
//   const { id } = req.query;
//   const query = {
//     text: 'DELETE FROM canciones WHERE id=$1',
//     values: [id]
//   };
//   pool.query(query)
//     .then(() => res.send('Canción eliminada'))
//     .catch((err) => console.log(err));
// });

// app.listen(3000, () => {
//   console.log('Servidor escuchando en el puerto 3000');
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const path = require('path');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'repertorio',
//   password: '11235',
//   port: 5432,
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname+'/index.html'));
// });

// app.get('/canciones', (req, res) => {
//   pool.query('SELECT * FROM canciones', (err, result) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.send(result.rows);
//   });
// });

// app.post('/cancion', (req, res) => {
//   const { titulo, artista, tono } = req.body;
//   const query = {
//     text: 'INSERT INTO canciones(titulo, artista, tono) VALUES($1, $2, $3)',
//     values: [titulo, artista, tono]
//   };
//   pool.query(query)
//     .then(() => res.send('Canción agregada'))
//     .catch((err) => console.log(err));
// });

// app.put('/cancion', (req, res) => {
//   const { id, titulo, artista, tono } = req.body;
//   const query = {
//     text: 'UPDATE canciones SET titulo=$1, artista=$2, tono=$3 WHERE id=$4',
//     values: [titulo, artista, tono, id]
//   };
//   pool.query(query)
//     .then(() => res.send('Canción actualizada'))
//     .catch((err) => console.log(err));
// });

// app.delete('/cancion', (req, res) => {
//   const { id } = req.query;
//   const query = {
//     text: 'DELETE FROM canciones WHERE id=$1',
//     values: [id]
//   };
//   pool.query(query)
//     .then(() => res.send('Canción eliminada'))
//     .catch((err) => console.log(err));
// });

// app.listen(3000, () => {
//   console.log('Servidor escuchando en el puerto 3000');
// });

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'repertorio',
  password: '11235',
  port: 5432,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/canciones', (req, res) => {
  pool.query('SELECT * FROM canciones', (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(result.rows);
  });
});

app.post('/cancion', (req, res) => {
  const { titulo, artista, tono } = req.body;
  const query = {
    text: 'INSERT INTO canciones(titulo, artista, tono) VALUES($1, $2, $3)',
    values: [titulo, artista, tono]
  };
  pool.query(query)
    .then(() => res.send('Canción agregada'))
    .catch((err) => console.log(err));
});

app.put('/cancion', (req, res) => {
  const { id, titulo, artista, tono } = req.body;
  const query = {
    text: 'UPDATE canciones SET titulo=$1, artista=$2, tono=$3 WHERE id=$4',
    values: [titulo, artista, tono, id]
  };
  pool.query(query)
    .then(() => res.send('Canción actualizada'))
    .catch((err) => console.log(err));
});

app.delete('/cancion', (req, res) => {
  const { id } = req.query;
  const query = {
    text: 'DELETE FROM canciones WHERE id=$1',
    values: [id]
  };
  pool.query(query)
    .then(() => res.send('Canción eliminada'))
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});