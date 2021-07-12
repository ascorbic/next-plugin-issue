const handler = async (event) => {
    return {
        body: JSON.stringify(process.env),
        statusCode: 200,
        headers: {
            "content-type": "application/json"
        }
    }
}

exports.handler = handler