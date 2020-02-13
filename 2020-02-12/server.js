"use strict";
const http = require("http");
const myFacts = [
    "I have a pet rabbit",
    "I am an only child",
    "My favorite color is green",
    "I have a permanent spot on one of my teeth from when I had a fever so high it melted the enamel",
    "My right foot is bigger than my left foot",
    "I have an extra cusp on the outside of one of my molars",
    "I have never broken a bone (to my knowledge)",
    "I played trumpet through high school and into college",
    "I have build multiple computers",
    "I am an Eagle Scout",
];

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    let randNum = Math.floor(Math.random() * (myFacts.length));
    res.write(`
    <html>
        <style>
            * {
                box-sizing: border-box;
            }
            body {
                display: flex;
                flex-direction: column;
                background-color: #535353;
                color: ghostwhite;
            }
            h1 {
                margin-bottom: 0;
            }
            #fact-preface {
                font-weight: bold;
            }
        </style>
        <body>
            <h1>Random Facts</h1>
            <p>about John McCarthy</p>
            <p><span id="fact-preface">Random fact:</span> ${myFacts[randNum]}</p>
        </body>
    </html>`);
    res.end();
}).listen(8186);