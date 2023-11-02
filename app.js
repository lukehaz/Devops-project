const express = require('express');

const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  const jObject = {
    message: `My name is Luke Hazelton`,
    timestamp: Date.now(),
  };
  res.json(jObject);
});

app.listen(port, () => {
  console.log(`Server is Successfully Running, and App is listening on port: ${port}`);
});
