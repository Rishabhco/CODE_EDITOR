require('dotenv').config()
const express = require('express');
const hbs = require('hbs');
const path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const publicDirectoryPath = path.join(__dirname, "../public")
const viewspath = path.join(__dirname, "../templates/views")

app.set('view engine', 'hbs')
app.set('views', viewspath)

app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicDirectoryPath));

app.get('/', function (req, res) {
    res.render("index");
});
var axios = require('axios');


app.post('/compilecode', function (req, res) {
    const input = req.body.input;
    const code = req.body.code;
    if (req.body.lang === "Select Language") {
        return res.send({
            error: "Please select a language"
        });
    }
    else if (req.body.lang === "C") {
        if (req.body.inputRadio === true) {
            var program = {
                script: code,
                language: "c",
                stdin: input,
                versionIndex: "4",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
        else {
            var program = {
                script: code,
                language: "c",
                versionIndex: "4",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
    }
    else if (req.body.lang === "C++") {
        if (req.body.inputRadio === true) {
            var program = {
                script: code,
                language: "cpp",
                stdin: input,
                versionIndex: "4",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
        else {
            var program = {
                script: code,
                language: "cpp",
                versionIndex: "4",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
    }
    else if (req.body.lang === "Python") {
        if (req.body.inputRadio === true) {
            var program = {
                script: code,
                language: "python3",
                stdin: input,
                versionIndex: "3",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
        else {
            var program = {
                script: code,
                language: "python3",
                versionIndex: "3",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
    }
    else if (req.body.lang === "Java") {
        if (req.body.inputRadio === true) {
            var program = {
                script: code,
                language: "java",
                stdin: input,
                versionIndex: "3",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
        else {
            var program = {
                script: code,
                language: "java",
                versionIndex: "3",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
    }
    else if (req.body.lang === "C#") {
        if (req.body.inputRadio === true) {
            var program = {
                script: code,
                language: "csharp",
                stdin: input,
                versionIndex: "3",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
        else {
            var program = {
                script: code,
                language: "csharp",
                versionIndex: "3",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            };
            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    if (error) {
                        res.send({
                            error: "ERROR !! " + error,
                        });
                    }
                    else {
                        res.send({
                            result: body.output,
                        });
                    }
                }
            );
        }
    }

});

app.listen(port, () => {
    console.log("Server is up on port " + port + " !")
})