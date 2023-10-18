const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/api/users/users.routes.js']

swaggerAutogen(outputFile, endpointsFiles)