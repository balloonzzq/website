const http = require('http')

const homePage = `
<!DOCTYPE html>
<html>
  <style>
    body {
      background-color: '#ddd'
    }
  </style>
  <head>
    <meta charset="utf-8">
    <title>Node</title>
  </head>
  <body>
    <h1>
      hello test
    </h1>
  </body>
</html>
`

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(homePage)
})
.listen(3000, () => {
  console.log('Server Running At 3000')
})