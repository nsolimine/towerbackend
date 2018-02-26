const express = require("express");
const app = express();
const queriesAdvanced = require("./queriesAdvanced");
const queriesIntermediate = require("./queriesIntermediate");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.get("/advanceds", (request, response) => {
    queriesAdvanced.list().then(advanceds => {
        response.json({advanceds});
    }).catch(console.error);
});

app.get("/advanceds/:id", (request, response) => {
    queriesAdvanced.read(request.params.id).then(advanced => {
        advanced
            ? response.json({advanced})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/advanceds", (request, response) => {
    queriesAdvanced.create(request.body).then(advanced => {
        response.status(201).json({advanced: advanced});
    }).catch(console.error);
});

app.delete("/advanceds/:id", (request, response) => {
    queriesAdvanced.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/advanceds/:id", (request, response) => {
    queriesAdvanced.update(request.params.id, request.body).then(advanced => {
        response.json({advanced: advanced[0]});
    }).catch(console.error);
});


app.get("/intermediates", (request, response) => {
    queriesIntermediate.list().then(intermediates => {
        response.json({intermediates});
    }).catch(console.error);
});

app.get("/intermediates/:id", (request, response) => {
    queriesIntermediate.read(request.params.id).then(intermediate => {
        intermediate
            ? response.json({intermediate})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/intermediates", (request, response) => {
    queriesIntermediate.create(request.body).then(intermediate => {
        response.status(201).json({intermediate: intermediate});
    }).catch(console.error);
});

app.delete("/intermediates/:id", (request, response) => {
    queriesIntermediate.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/intermediates/:id", (request, response) => {
    queriesIntermediate.update(request.params.id, request.body).then(intermediate => {
        response.json({intermediate: intermediate[0]});
    }).catch(console.error);
});


app.use((request, response) => {
  response.send(404);
});

module.exports = app;
