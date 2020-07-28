const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('root');
});

app.listen(port, () => console.log(`Listening on port ${port}`));