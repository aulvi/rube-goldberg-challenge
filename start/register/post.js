exports.handler = async (event, context) => {
    console.log(event)
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world posted',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
