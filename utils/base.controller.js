import { Router } from "express";

class BaseController {
  constructor() {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  send(res, code, message) {
    if (message) {
      res.type("application/json");
      return res.status(code).json(message);
    }
    return res.status(code).send();
  }

  ok(res, message) {
    return this.send < T > (res, 200, message);
  }

  created(res) {
    return res.sendStatus(201);
  }

  bindRoutes(routes) {
    routes.forEach(({ path, func, method, middlewares }) => {
      const middleware = middlewares?.map((m) => m.execute.bind(m));
      const handler = func.bind(this);
      const pipeline = middleware ? [...middleware, handler] : handler;
      this._router[method](path, pipeline);
    });
  }
}

export { BaseController };
