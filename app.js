const express = require("express");
const app = express();
const queriesBeginner = require("./queriesBeginner");
const queriesIntermediate = require("./queriesIntermediate");
const queriesAdvanced = require("./queriesAdvanced");
const queriesExpert = require("./queriesExpert");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.get("/beginner", (request, response) => {
  queriesBeginner.list().then(beginner => {
    response.json({beginner});
  }).catch(console.error);
});
app.get("/beginner/:id", (request, response) => {
  queriesBeginner.read(request.params.id).then(beginner => {
    beginner
    ? response.json({beginner})
    : response.sendStatus(404)
  }).catch(console.error);
});
app.post("/beginner", (request, response) => {
  queriesBeginner.create(request.body).then(beginner => {
    response.status(201).json({beginner: beginner});
  }).catch(console.error);
});
app.delete("/beginner/:id", (request, response) => {
  queriesBeginner.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(console.error);
});
app.put("/beginner/:id", (request, response) => {
  queriesBeginner.update(request.params.id, request.body).then(beginner => {
    response.json({beginner: beginner[0]});
  }).catch(console.error);
});


app.get("/intermediate", (request, response) => {
  queriesIntermediate.list().then(intermediate => {
    response.json({intermediate});
  }).catch(console.error);
});
app.get("/intermediate/:id", (request, response) => {
  queriesIntermediate.read(request.params.id).then(intermediate => {
    intermediate
    ? response.json({intermediate})
    : response.sendStatus(404)
  }).catch(console.error);
});
app.post("/intermediate", (request, response) => {
  queriesIntermediate.create(request.body).then(intermediate => {
    response.status(201).json({intermediate: intermediate});
  }).catch(console.error);
});
app.delete("/intermediate/:id", (request, response) => {
  queriesIntermediate.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(console.error);
});
app.put("/intermediate/:id", (request, response) => {
  queriesIntermediate.update(request.params.id, request.body).then(intermediate => {
    response.json({intermediate: intermediate[0]});
  }).catch(console.error);
});


app.get("/advanced", (request, response) => {
    queriesAdvanced.list().then(advanced => {
        response.json({advanced});
    }).catch(console.error);
});
app.get("/advanced/:id", (request, response) => {
    queriesAdvanced.read(request.params.id).then(advanced => {
        advanced
            ? response.json({advanced})
            : response.sendStatus(404)
    }).catch(console.error);
});
app.post("/advanced", (request, response) => {
    queriesAdvanced.create(request.body).then(advanced => {
        response.status(201).json({advanced: advanced});
    }).catch(console.error);
});
app.delete("/advanced/:id", (request, response) => {
    queriesAdvanced.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});
app.put("/advanced/:id", (request, response) => {
    queriesAdvanced.update(request.params.id, request.body).then(advanced => {
        response.json({advanced: advanced[0]});
    }).catch(console.error);
});


app.get("/expert", (request, response) => {
    queriesExpert.list().then(expert => {
        response.json({expert});
    }).catch(console.error);
});
app.get("/expert/:id", (request, response) => {
    queriesExpert.read(request.params.id).then(expert => {
        expert
            ? response.json({expert})
            : response.sendStatus(404)
    }).catch(console.error);
});
app.post("/expert", (request, response) => {
    queriesExpert.create(request.body).then(expert => {
        response.status(201).json({expert: expert});
    }).catch(console.error);
});
app.delete("/expert/:id", (request, response) => {
    queriesExpert.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});
app.put("/expert/:id", (request, response) => {
    queriesExpert.update(request.params.id, request.body).then(expert => {
        response.json({expert: expert[0]});
    }).catch(console.error);
});


app.use((request, response) => {
  response.send(404);
});

module.exports = app;
