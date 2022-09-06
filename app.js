const express = require('express');

const mainRoutes = require('./routers/main')

const app = express();

app.use(express.static("public"));

app.use("/", mainRoutes);

/*app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'))
})*/


app.listen(3010, () => {
  console.log("servidor corriendo");
  console.log('http://localhost:3010');
});