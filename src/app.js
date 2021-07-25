const express = require('express');
const hbs = require('hbs');
const path = require('path');
var bodyParser = require('body-parser');
var compiler = require('compilex');

const app = express();
const port = process.env.PORT || 3000

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
// var axios = require('axios');


app.get('/compilecode', function (req, res) {
    const input = req.query.cinput;
    const code = req.query.code;
    console.log(req.query.code);
    if (req.query.lang === "Select Language") {
        return res.send({
            error: "Please select a language"
        });
    }
    else if ((req.query.lang === "C") || (req.query.lang === "C++")) {
        if (req.query.cin === "true") {
            var envData = { OS: "windows", cmd: "g++" };
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
            // var data = JSON.stringify({
            //     "code": code,
            //     "language": req.query.lang,
            //     "input": input
            // });

            // var config = {
            //     method: 'post',
            //     url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     data: data
            // };

            // axios(config)
            //     .then(function (response) {
            //         console.log(response.data);
            //         return res.send({
            //             result:response.data
            //         })
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //         return res.send({
            //             error:error
            //         })

            //     });

        }
        else {
            var envData = { OS: "windows", cmd: "g++" };
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
    else if (req.query.lang === "Python") {
        if (req.query.cin === "true") {
            var envData = { OS: "windows" };
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
            var envData = { OS: "windows" };
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
    else if (req.query.lang === "Java") {
        if (req.query.cin === "true") {
            var envData = { OS: "windows" };
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
            var envData = { OS: "windows" };
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
    if (req.query.lang === "C#") {
        if (req.query.cin === "true") {
            var envData = { OS: "windows" };
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
            var envData = { OS: "windows" };
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