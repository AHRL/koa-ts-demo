import { Server } from 'http'
import { print } from 'configs/utils'
import { Environment } from 'configs/environments'
import { createServer } from 'configs/application'

module.exports = (async(): Promise<Server> => {
  try {
    const app = await createServer()
    return app.listen(Environment.port, () => {
      print.log(`server listening on ${Environment.port}, in ${Environment.identity} mode.`)
    })
  } catch (e) {
    console.log(e)
  }
})()