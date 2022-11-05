const http = require('http')

let count = 0



http

  .createServer(function (req, res) {

    if (req.url == '/') {

      res.end(JSON.stringify(process))

    }



    if (req.url == '/count') {

      res.writeHead(200, {

        'Access-Control-Allow-Origin': '*',

      })
      console.log(req)
      res.end('' + ++count)

    }

  })

  .listen(8888)



console.log('8888 port is listening')





