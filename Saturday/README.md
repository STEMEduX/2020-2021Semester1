## Saturday Class 
---

### Please introduce yourself: click [here](https://flipgrid.com/85f3f2e7)
---
### On Saturday, please join class using following link

Join Zoom Meeting
https://zoom.us/j/95974471422?pwd=cFh3eERKSXRlSEluR2o5ZjBnZ3VaZz09

Meeting ID: 959 7447 1422
Passcode: 2ycEwZ

<!-- ---
## Join Wechat group
![image](https://user-images.githubusercontent.com/24532787/92997150-b8461200-f4d6-11ea-84cf-ab2c029c06cf.png)
-->


---
## 11/21/2020 9:15 Class 10
* continue DialogFlow discussion, https://codelabs.developers.google.com/codelabs/actions-1/#0
* https://github.com/STEMEduX/2020-2021Semester1/tree/master/Saturday/webhook
* finish lab from last week.
### Homework: 
 - Lanuch Visual Studio Code, add code include index.js and package.json, start web api locally using following two commands:
 ```
 npm install 
 npm start
 ```
 - Test local host web API using postman, URL is http://localhost:8000/color, request in raw format, and using json, copy following into your request section: 
 ```
 {
  "responseId": "c798c0de-3565-4aa0-86f0-9c25387e7293-ee7586fb",
  "queryResult": {
    "queryText": "green",
    "parameters": {
      "color": "green"
    },
    "allRequiredParamsPresent": true,
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            ""
          ]
        }
      }
    ],
    "intent": {
      "name": "projects/lab-epsg/agent/intents/49ef81a7-d315-4deb-aebd-34638c048aea",
      "displayName": "favorite color"
    },
    "intentDetectionConfidence": 1,
    "languageCode": "en"
  }
}
 ```
 - Launch ngrox using follwong command: 
 ```
 ngrok http 8000
 ```
 - Test Ngrok URL using postman
 - Go to Dialogflow console, setup default welcome intent and favorite color intent
 - Go to fulfilment and paste Ngrok URL
 - Test your action!
---


---
## 11/14/2020 9:15 Class 9
* continue DialogFlow discussion, https://codelabs.developers.google.com/codelabs/actions-1/#0
* https://github.com/STEMEduX/2020-2021Semester1/tree/master/Saturday/webhook
* finish lab from last week.
### outstanding issue: 
 - Install Postman on MacOS doesn't work
 - Visual Studio Code built-in termial doesn't have node path to run npm install
---

---
## 11/07/2020 9:15 Class 8
* check home work on Javascript
* continue DialogFlow discussion, https://codelabs.developers.google.com/codelabs/actions-1/#0
* https://github.com/STEMEduX/2020-2021Semester1/tree/master/Saturday/webhook
---

## 10/31/2020 9:15 
No Class

---
## 10/24/2020 9:15 Class 7
### Home Work Highlights
* [fibo1](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/fibo1.js)
* [fibo2](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/fibo2.js)
* [fibo3](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/fibo3.js)
* [fibo4](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/fibo4.js)

### Topics
* [string template/interpolation](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/04-string-template.js)
* [arrow function](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/05-arrow-function.js)
* [filter](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/06-filter.js)
* [map](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/04-string-template.js)
### [Home Work](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/07-map.js) 

---
## 10/17/2020 9:15 
No Class
---
## 10/10/2020 9:15 Class 6
### [Home Work Highlights](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/20201003_homework_highlights.md)
### [20201010 Lecture](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/20201010.md)
### [Home Work](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/20201010_homework.md)
---
## 10/3/2020 9:15 Class 5
### [Home Work](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/homework_20201003.md)
---
## 9/12/2020 9:15 Class 4
### Continue Javascript 
---
## 9/26/2020 9:15 Class 3
### [Javascript #1](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/01.md)    
### [Javascript #2](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/02.md)  
### [Javascript #3](https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/03.md)  
--- 

## 9/19/2020 9:15 Class 2
* Q&A: https://app.sli.do/event/vec78n8w
* Communication survey
* Discord: https://discord.gg/T2vSXGc  
![image](https://user-images.githubusercontent.com/24532787/93668707-ec2fb300-fa53-11ea-8729-25d4a0784358.png)

Homework: 
Finish this lab https://google-run.qwiklabs.com/focuses/2196?parent=catalog
---

### 9/12/2020 9:15 Class 1
* Self Instroduction 
* Instroduction to NLP
* Tools we use
* Google Assistance hands on (https://cloud.google.com/dialogflow/es/docs/tutorials/build-an-agent)
* Class plan

Recommend to watch
* [How language shapes the way we think | Lera Boroditsky](https://youtu.be/RKK7wGAYP6k)
* Google I/O 2019 http://www.youtube.com/watch?v=lyRPyRKHO8M&t=22m40s

#### Homework: 
* Finish your first agent with at least one Intent
* Try to figure out how to allow agent to answer multiple questions leveraging "Knowlege". 

https://dialogflow.cloud.google.com/#/getStarted
---


