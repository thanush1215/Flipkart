$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Dell/eclipse-workspace/MavenCucumber/src/test/resources/Fecbook/CreateAcc.feature");
formatter.feature({
  "name": "Create new account in facbook",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To Click create new account button then fill details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To execute the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAcc.toExecuteTheFacebookUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the crreate new account button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc.toClickTheCrreateNewAccountButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To fill the first name",
  "rows": [
    {
      "cells": [
        "emaildata1",
        "syed"
      ]
    },
    {
      "cells": [
        "emaildata2",
        "Raja"
      ]
    },
    {
      "cells": [
        "emaildata3",
        "Santhosh"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc.toFillTheFirstName(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To fill the mobile no",
  "rows": [
    {
      "cells": [
        "mobnumber1",
        "mobnumber2",
        "mobnumber3",
        "mobnumber4"
      ]
    },
    {
      "cells": [
        "12345678",
        "75675363",
        "6736536",
        "78636387"
      ]
    },
    {
      "cells": [
        "89673372",
        "44444444",
        "7777777",
        "00000000"
      ]
    },
    {
      "cells": [
        "12222222",
        "555555555",
        "8888888",
        "78636387"
      ]
    },
    {
      "cells": [
        "33333333",
        "666666666",
        "9999999",
        "78636387"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc.toFillTheMobileNo(DataTable)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.CreateAcc.toFillTheMobileNo(CreateAcc.java:53)\r\n\tat ✽.To fill the mobile no(C:/Users/Dell/eclipse-workspace/MavenCucumber/src/test/resources/Fecbook/CreateAcc.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To Fill the new password",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc.toFillTheNewPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc.toClickSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To close the given application",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAcc.toCloseTheGivenApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/Dell/eclipse-workspace/MavenCucumber/src/test/resources/Fecbook/Fb.feature");
formatter.feature({
  "name": "To login facebook applicetion",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To impliment valied username and valied password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch application by using url",
  "keyword": "When "
});
formatter.match({
  "location": "FaceBook.to_launch_application_by_using_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the valied username on email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBook.to_pass_the_valied_username_on_email_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the valid password on password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBook.to_pass_the_valid_password_on_password_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBook.to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close application",
  "keyword": "Then "
});
formatter.match({
  "location": "FaceBook.to_close_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User  has to pass the positive \"\u003cemaildatas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass the negative \"\u003cpaaword datas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.step({
  "name": "close url",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "paaword datas"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "12345678"
      ]
    },
    {
      "cells": [
        "efg@gmail.com",
        "Lion@123"
      ]
    },
    {
      "cells": [
        "mno@gmail.com",
        "in@#$friend"
      ]
    },
    {
      "cells": [
        "stu@gmail.com",
        "strong@321"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  has to pass the positive \"abc@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_pass_the_positive_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the negative \"12345678\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_pass_the_negative_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close url",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveAndNegative.close_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  has to pass the positive \"efg@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_pass_the_positive_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the negative \"Lion@123\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_pass_the_negative_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close url",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveAndNegative.close_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  has to pass the positive \"mno@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_pass_the_positive_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the negative \"in@#$friend\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_pass_the_negative_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close url",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveAndNegative.close_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  has to pass the positive \"stu@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_pass_the_positive_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the negative \"strong@321\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_pass_the_negative_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegative.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close url",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveAndNegative.close_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/Dell/eclipse-workspace/MavenCucumber/src/test/resources/Fecbook/Insta.feature");
formatter.feature({
  "name": "To login instagram username and password",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the vaild username and valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To execute the browser",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To hit the requirement url",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To validate the vaild username on user feild",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To validate the vaild password on user feild",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To click the submit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To close the  browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});