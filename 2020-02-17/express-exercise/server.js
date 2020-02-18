const express = require('express');
const facts = require('./facts');

const factsArray = facts.randomFacts;
const getRandomFact = facts.getRandomFact;

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

// get random fact
app.get('/facts', (req, res) => {
    res.json(getRandomFact());
});

// get fact by index
app.get('/facts/:index', (req, res) => {
    const index = req.params.index;
    if (!isNaN(index)) {
        res.json(factsArray[req.params.index]);
    } else {
        res.json('You need to use a number, dummy');
    }
});

// get all the facts
app.get('/facts-all', (req, res) => {
    res.json(factsArray);
});

// add random fact
app.get('/facts', (req, res) => {
    const body = req.body;

    factsArray.push(body);

    res.json("Fact successfully added");
});

// update random fact by index
app.put('/facts', (req, res) => {
    // randomFacts.splice(index, 1, newFact)
    res.json("Updating random fact by index");
});

// delete random fact by index
app.delete('/facts', (req, res) => {
    // randomFacts.splice(index, 1)
    res.json("Deleting random fact");
});