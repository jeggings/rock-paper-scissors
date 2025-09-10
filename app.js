const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());


// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});



app.get('/choose', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'html/choose.html');
    res.sendFile(filePath);
});

app.get('/lobby', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'html/lobby.html');
    res.sendFile(filePath);
});

app.get('/game', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'html/game.html');
    res.sendFile(filePath);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    const filePath = path.join(__dirname, 'public', 'html/404.html');
    res.sendFile(filePath);
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});