const unirest = require('unirest')

unirest.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/info')
        .header('x-rapidapi-host', 'omgvamp-hearthstone-v1.p.rapidapi.com')
        .header('x-rapidapi-key', '611767d6b7mshd87a6db125f3d35p180d87jsn0c4aba7115b8')

        .end(result => {
            console.log(result.status, result.header, result.body)
        })

module.exports = getData