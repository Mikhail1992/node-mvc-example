import { App } from './app'

const bootstrap = () => {
  const app = new App(3000)
  app.init()
}

bootstrap()
