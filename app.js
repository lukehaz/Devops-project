const express = require('express');

const app = express();
const port = 80; 
//change port for deployment to 80 and local test to 3000

// root route
app.get('/', (req, res) => {
  const jObject = {
    message: `My name is Luke Hazelton :)`,
    timestamp: Date.now(),
  };
  const formattedJobj = JSON.stringify(jObject, null, 2);  //fc
  res.set('Content-Type', 'application/json');             //fc
  res.send(formattedJobj);                                 //fc
  //res.json(jObject);
});

app.listen(port, () => {
  console.log(`Server is Successfully Running, and App is listening on port: ${port}`);
});
