"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
    bodyParser.urlencoded({
        extended: true
    })
);

restService.use(bodyParser.json());
restService.post("/color", function (req, res) {
    var speech =
        req.body.queryResult &&
            req.body.queryResult.parameters &&
            req.body.queryResult.parameters.color
            ? req.body.queryResult.parameters.color
            : "Seems like some problem. Speak again.";

    var answer = "Your lucky number is " + (Math.floor(Math.random() * 11 + 100))
    var speechResponse = {
        google: {
            expectUserResponse: true,
            richResponse: {
                items: [
                    {

                        simpleResponse: {
                            textToSpeech: answer
                            //Math.floor(Math.random() * 11); 
                        }
                    }
                ]
            }
        }
    };

    return res.json({
        payload: speechResponse,
        //data: speechResponse,
        fulfillmentText: answer,
        speech: answer,
        displayText: answer,
        source: "webhook-color-sample"
    });
});

restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
