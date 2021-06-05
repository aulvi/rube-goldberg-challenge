# Rube Goldberg Challenge

Welcome to the Rube Goldberg Challenge! This solution contains a sample Machine to store an event registration (like when someone signs up for an event). The architecture looks something like this:

Registration Form --> Registration Post Handler (Lambda) --> SNS Topic --> Registration Message Subscriber (Lambda) --> DynamoDB

(sure wish that was a diagram! anyways...)

The goal in this challenge is to add steps in between the two Lambda handlers, thus increasing it's silliness and decreasing it's efficiency. Why are we doing this again?

__Scoring Criteria__

* Creativity
* Number of Steps
* Number of Unique Services
* Silliness Factor
* Extravagance
* Inefficiency

__Rules__

1. Steps can be added manually, programmatically, whatever
2. You don't have to write code to add steps
3. Be kind to one another
3. Have fun!

## How to get started

This whole solution is built on [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/index.html) and super easy to deploy. Give this recipe a try:

1. Launch a Cloud 9 instance, pop into the terminal
2. Clone this repo
    `git clone https://github.com/aulvi/rube-goldberg-challenge.git`
3. Deploy the solution. When this is done it will spit out the RegistrationApi endpoint url, highlight it and copy it for later.
    `cd rube-goldberg-challenge; sam build && sam deploy --guided`
4. Test it
    * Edit `register.sh` and populate the variables with your own data, including the endpoint url from Step 3.
    * Run `./register.sh`
    * Go into DynamoDB and see if your registration was saved correctly
5. Hope that worked!

## Resources

See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

[AWS Cloud9 User Guide](https://docs.aws.amazon.com/cloud9/latest/user-guide/welcome.html)

[AWS CLI](https://docs.aws.amazon.com/cli/index.html?nc2=h_ql_doc_cli)

[AWS SDKs](https://aws.amazon.com/tools/)

[Amazon Builder's Library](https://aws.amazon.com/builders-library)

[AWS Documentation](https://docs.aws.amazon.com/index.html)
