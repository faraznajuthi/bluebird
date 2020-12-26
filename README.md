# Build a Weather Bot using Amazon Lex

What is Amazon Lex?

Amazon Lex is a service for building conversational interfaces into any application using voice and text. Amazon Lex provides the advanced deep learning functionalities of automatic speech recognition (ASR) for converting speech to text, and natural language understanding (NLU) to recognize the intent of the text, to enable you to build applications with highly engaging user experiences and lifelike conversational interactions. With Amazon Lex, the same deep learning technologies that power Amazon Alexa are now available to any developer, enabling you to quickly and easily build sophisticated, natural language, conversational bots (&quot;chatbots&quot;).

What Lex WeatherBot will do :

What Lex Weatherbot will Do :Our Project Is A Conversational Chatbot. It Will Get Weather Info From A Third Party Service And Return It Back To User As Request. So After That We Will Integrate The Chatbot Into The Angular Application For Example: If A User Want To Know About the Weather In London It Will so That The Particular Occurrence Will The Received By Amazon Lex. And It Will Check If The Utterances Matches With The Defined Intent In Amazon Lex. And If So It Will Trigger A Lambda Function Which Will Called A Third Party API And Returned It Back To The User a relevant Weather Information.

What you will learn

You will learn the following by completing this workshop. We will provide the sample Weather chatbot. You will be publishing and deploying it as a web application. Summary of what you will learn are:

- How to create initialization &amp; validation Lambda function and use it in the Lex chatbot
- How to manage context between intents within the Lex chatbot
-
- How to publish a Lex chatbot as a web application

![](RackMultipart20201226-4-ghzaj7_html_fd6afcb6f24a82da.png)

Prerequisites for the Workshop

- Sign up for an AWS account
- General knowledge on web application development
- General knowledge on nodejs programming

Workshop Roadmap

We use following AWS services into our project:

These Services are used :

- Aws-amplify
- Aws-lex
- Cognito
- Aws Cloud-formation
- IAM
- Lambda

**Module1:**

**Create lambda function for intent fulfillment using serverless framework**  **:**

We use serverless framework to make a lambda function which will be deployed in the Cloudformation. It will be used in Amazon lex.

**Module2:**

**Validation intent fulfillment and test chatbot through AmazonLex** :

- Create an Intent
- Then create some sample utterances and response messages
- Then link previously created lambda function to fulfilment.
- Then click on &quot;save intent&quot;
- Then click on &quot;build&quot;
- Click &quot;Test bot &quot; for testing the chatbot through Aws-console.
- Then click on &quot;publish&quot;

**Module3:**

**Create an web application by using Angular and Amazon amplify:**

We Build An Web Application By Using Angular And Use Amplify To Create Cognito Authentication. We Can Verify User Authenticity By AWS Cognito . Then We Deploy It Into Cloud Formation.

Conclusion

What you learned in this workshop:

- How to create initialization &amp; validation Lambda function and use it in the Lex chatbot
- How to manage context between intents within the Lex chatbot
- How to publish a Lex chatbot as a web application

Final Step

Please do not forget:

- To delete the CloudFormation template which deletes the objects provisioned by the template.
