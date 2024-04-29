import express from 'express'
import morgan from 'morgan'

class Server {
  private readonly app: express.Application = express()
  private readonly PORT: Number = 3000

  constructor() {
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.listen()
  }

  public listen(): void {
    this.app.listen(this.PORT, () => {
      `Recibiendo en el puerto ${this.PORT}`
    })
  }
}

void new Server()
