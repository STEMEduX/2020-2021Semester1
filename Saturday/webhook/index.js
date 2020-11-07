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

  var speechResponse = {
    google: {
      expectUserResponse: true,
      richResponse: {
        items: [
          {
            simpleResponse: {
              textToSpeech: "Your lucky number is " + speech.length
            }
          }
        ]
      }
    }
  };

  return res.json({
    payload: speechResponse,
    //data: speechResponse,
    fulfillmentText: speech,
    speech: speech,
    displayText: speech,
    source: "webhook-color-sample"
  });
});

restService.listen(process.env.PORT || 8000, function () {
  console.log("Server up and listening");
});
