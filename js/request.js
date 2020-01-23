async function request(mURL) {
    return $.ajax({
        method: 'GET',
        url: mURL,
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'application/json',
        },
    })
}