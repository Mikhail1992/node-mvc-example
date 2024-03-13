"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const express_1 = require("express");
class BaseController {
    constructor() {
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    send(res, code, message) {
        if (message) {
            res.type('application/json');
            return res.status(code).json(message);
        }
        return res.status(code).send();
    }
    ok(res, message) {
        return this.send(res, 200, message);
    }
    created(res) {
        return res.status(201);
    }
    bindRoutes(routes) {
        routes.forEach(({ path, func, method, middlewares }) => {
            const middleware = middlewares === null || middlewares === void 0 ? void 0 : middlewares.map((m) => m.execute.bind(m));
            const handler = func.bind(this);
            const pipeline = middleware ? [...middleware, handler] : handler;
            this._router[method](path, pipeline);
        });
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map