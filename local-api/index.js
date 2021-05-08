const CreateServer = require('./create-server')

const PORT = 3050
const ServerInstance = CreateServer()

ServerInstance.listen(PORT, () => {
  console.log(`Local API listening at http://localhost:${PORT}`)
})
