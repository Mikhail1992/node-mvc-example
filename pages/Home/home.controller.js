import { BaseController } from "../../utils/base.controller.js";
import { __dirname } from "../../helpers.js";
import path from "path";
import { HomeModel } from "./home.model.js";

export class HomeController extends BaseController {
  constructor() {
    super();
    this.bindRoutes([
      {
        path: "/",
        method: "get",
        func: this.renderHomePage,
      },
    ]);
  }

  async renderHomePage(req, res, next) {
    try {
      const homeModelInst = new HomeModel();
      const content = await homeModelInst.getContent();
      res.render(path.resolve(__dirname, "pages", "Home", "./home.view.html"), {
        content,
      });
    } catch (error) {
      next(error);
    }
  }
}
