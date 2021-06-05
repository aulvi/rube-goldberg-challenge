const {PublishCommand, SNSClient } = require('@aws-sdk/client-sns')

exports.handler = async (event, context) => {
    let response = null;
    const body = JSON.parse(event.body)

    try {
        const snsClient = new SNSClient({region: 'us-west-2'})
        const msg = {
            Message: {name: body.name, email: body.email},
            TopicArn: process.env['REGISTRATION_TOPIC']
        }

        const data = await snsClient.send(new PublishCommand(msg))

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: `Registration received for ${body.name}`,
            })
        }
    } catch (err) {
        return err
    }

    return response
}
