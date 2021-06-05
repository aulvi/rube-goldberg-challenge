const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb')
const dynamodbClient = new DynamoDBClient({ region: 'us-west-2' })
const ddbDocClient = DynamoDBDocumentClient.from(dynamodbClient)

exports.handler = async (event, context) => {
  try {
    const message = JSON.parse(event.Records[0].Sns.Message)

    const params = {
      TableName: process.env.REGISTRATION_TABLE,
      Item: {
        name: message.name,
        email: message.email
      }
    }

    return ddbDocClient.send(new PutCommand(params))
  } catch (err) {
    return err
  }
}
