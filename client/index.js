const http = require('http')



http

  .createServer(function (req, res) {

    http

      .get(`http://${process.env.SERVER_HOST}:8888/count`, (response) => {

        let todo = ''

        response.on('data', (chunk) => {

          todo += chunk

        })

        response.on('end', () => {

          res.end('You visited ' + todo + ' time\n')

        })

      })

      .on('error', (error) => {

        console.log('Error: ' + error.message)

      })

  })

  .listen(8887)



console.log('8887 port is listening')


