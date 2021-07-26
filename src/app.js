const express = require('express');
const hbs = require('hbs');
const path = require('path');
var bodyParser = require('body-parser');
var compiler = require('compilex');

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

var option = { stats: true };
compiler.init(option);

app.get('/', function (req, res) {
    res.render("index");
});
var axios = require('axios');


app.post('/compilecode', function (req, res) {
    const input = req.body.input;
    const code = req.body.code;
    // console.log(code);
    // console.log(input);
    // console.log(req.body.inputRadio);
    // console.log(req.body.lang);
    if (req.body.lang === "Select Language") {
        return res.send({
            error: "Please select a language"
        });
    }
    else if ((req.body.lang === "C") || (req.body.lang === "C++")) {
        if (req.body.inputRadio === true) {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: false } };
            compiler.compileCPPWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send({
                        error: "ERROR !! " + data.error,
                    });
                }
                else {
                    res.send({
                        result: data.output,
                    });
                }
            });
        }
        else {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: false } };
            compiler.compileCPP(envData, code, function (data) {
                if (data.error) {
                    res.send({
                        error: "ERROR !! " + data.error
                    });
                }
                else {
                    res.send({
                        result: data.output
                    });
                }

            });
        }
    }
    else if (req.body.lang === "Python") {
        if (req.body.inputRadio === true) {
            var envData = { OS: "windows", options: { timeout: false } };
            compiler.compilePythonWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send({
                        error: "ERROR !! " + data.error,
                    });
                }
                else {
                    res.send({
                        result: data.output,
                    });
                }
            });
        }
        else {
            var envData = { OS: "windows" , options: { timeout: false }};
            compiler.compilePython(envData, code, function (data) {
                if (data.error) {
                    res.send({
                        error: "ERROR !! " + data.error,
                    });
                }
                else {
                    res.send({
                        result: data.output,
                    });
                }
            });
        }
    }
    else if (req.body.lang === "Java") {
        if (req.body.inputRadio === true) {
            var envData = { OS: "windows" , options: { timeout: false }};
            compiler.compileJavaWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send({
                        error: "ERROR !! " + data.error,
                    });
                }
                else {
                    res.send({
                        result: data.output,
                    });
                }
            });
        }
        else {
            var envData = { OS: "windows" , options: { timeout: false }};
            compiler.compileJava(envData, code, function (data) {
                if (data.error) {
                    res.send({
                        error: "ERROR !! " + data.error,
                    });
                }
                else {
                    res.send({
                        result: data.output,
                    });
                }
            });
        }
    }
    if (req.body.lang === "C#") {
        if (req.body.inputRadio === true) {
            var envData = { OS: "windows" , options: { timeout: false }};
            compiler.compileCSWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send({
                        error: "ERROR !! " + data.error,
                    });
                }
                else {
                    res.send({
                        result: data.output,
                    });
                }
            });
        }
        else {
            var envData = { OS: "windows" , options: { timeout: false }};
            compiler.compileCS(envData, code, function (data) {
                if (data.error) {
                    res.send({
                        error: "ERROR !! " + data.error,
                    });
                }
                else {
                    res.send({
                        result: data.output,
                    });
                }
            });
        }
    }

});

app.get('/fullStat', function (req, res) {
    compiler.fullStat(function (data) {
        res.send(data);
    });
});

compiler.flush(function () {
    console.log('All temporary files flushed !');
});


app.listen(port, () => {
    console.log("Server is up on port " + port + " !")
})