import { App } from "./app.js";

const bootstrap = () => {
  const app = new App(3000);
  app.init();
};

bootstrap();
