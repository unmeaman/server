var express = require("express");
var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    res.send("Hello");
});

    app.get('/data', function(req, res, next) {
    res.json(

{
  "quiz": {
    "Id": 1,
    "name": "MEAN Quiz",
    "description": "MEAN Quiz (contains mongodb, expressjs, angularjs, nodejs)"
  },
  "questions": [
    {
      "Id": 1,
      "Name": "Why so JavaScript and Java have similar name?",
      "QuestionTypeId": 1,
      "Options": [
        {
          "Id": 1055,
          "QuestionId": 1,
          "Name": "JavaScript is a stripped-down version of Java",
          "IsAnswer": false
        },
        {
          "Id": 1056,
          "QuestionId": 1,
          "Name": "JavaScript's syntax is loosely based on Java's",
          "IsAnswer": true
        },
        {
          "Id": 1057,
          "QuestionId": 1,
          "Name": "They both originated on the island of Java",
          "IsAnswer": false
        },
        {
          "Id": 1058,
          "QuestionId": 1,
          "Name": "None of the above",
          "IsAnswer": false
        }
      ],
      "QuestionType": {
        "Id": 1,
        "Name": "Multiple Choice",
        "IsActive": true
      }
    },
    {
      "Id": 2,
      "Name": "The feature in ASP.NET 2.0 that is used to fire a normal postback to a different page in the application is called",
      "QuestionTypeId": 1,
      "Options": [
        {
          "Id": 1055,
          "QuestionId": 2,
          "Name": "Theme",
          "IsAnswer": false
        },
        {
          "Id": 1057,
          "QuestionId": 2,
          "Name": "Code-front",
          "IsAnswer": false
        },
        {
          "Id": 1056,
          "QuestionId": 2,
          "Name": "Cross Page Posting",
          "IsAnswer": true
        },
        {
          "Id": 1058,
          "QuestionId": 2,
          "Name": "None of the above",
          "IsAnswer": false
        }
      ],
      "QuestionType": {
        "Id": 1,
        "Name": "Multiple Choice",
        "IsActive": true
      }
    },
    {
      "Id": 3,
      "Name": "What MVC stands for?",
      "QuestionTypeId": 1,
      "Options": [
        {
          "Id": 1055,
          "QuestionId": 2,
          "Name": "Model View Control",
          "IsAnswer": false
        },
        {
          "Id": 1057,
          "QuestionId": 2,
          "Name": "Model View Controller",
          "IsAnswer": true
        },
        {
          "Id": 1056,
          "QuestionId": 2,
          "Name": "Main View Control",
          "IsAnswer": false
        },
        {
          "Id": 1058,
          "QuestionId": 2,
          "Name": "None of the above",
          "IsAnswer": false
        }
      ],
      "QuestionType": {
        "Id": 1,
        "Name": "Multiple Choice",
        "IsActive": true
      }
    },
    {
      "Id": 4,
      "Name": "Which of the following is true about ng-disabled directive?",
      "QuestionTypeId": 1,
      "Options": [
        {
          "Id": 1055,
          "QuestionId": 2,
          "Name": "ng-disabled directive can enable a given control.",
          "IsAnswer": false
        },
        {
          "Id": 1057,
          "QuestionId": 2,
          "Name": "ng-disabled directive can disable a given control.",
          "IsAnswer": false
        },
        {
          "Id": 1056,
          "QuestionId": 2,
          "Name": "Both of the above.",
          "IsAnswer": true
        },
        {
          "Id": 1058,
          "QuestionId": 2,
          "Name": "None of the above.",
          "IsAnswer": false
        }
      ],
      "QuestionType": {
        "Id": 1,
        "Name": "Multiple Choice",
        "IsActive": true
      }
    },
    {
      "Id": 5,
      "Name": "Which of the following is true about ng-bind directive?",
      "QuestionTypeId": 1,
      "Options": [
        {
          "Id": 1055,
          "QuestionId": 2,
          "Name": "ng-bind directive binds the AngularJS Application data to HTML tags.",
          "IsAnswer": false
        },
        {
          "Id": 1057,
          "QuestionId": 2,
          "Name": "ng-bind updates the model created by ng-model directive to be displayed in the html tag.",
          "IsAnswer": false
        },
        {
          "Id": 1056,
          "QuestionId": 2,
          "Name": "ng-bind updates html control data when controller changes the model.",
          "IsAnswer": false
        },
        {
          "Id": 1058,
          "QuestionId": 2,
          "Name": "All of the above.",
          "IsAnswer": true
        }
      ],
      "QuestionType": {
        "Id": 1,
        "Name": "Multiple Choice",
        "IsActive": true
      }
    }
  ]
}
);
});

app.listen(1234,function(){
console.log("Node Server Starts....");
});