import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import nunjucks from "nunjucks";
import { HomeController } from "./pages/Home/home.controller.js";
import { ExceptionFilter } from "./utils/exception.filter.js";
import { __dirname } from "./helpers.js";

export class App {
  constructor(port) {
    this.app = express();
    this.port = port;
  }

  useMiddleware() {
    nunjucks.configure({
      autoescape: true,
      express: this.app,
    });
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  useRoutes() {
    this.app.use("/", new HomeController().router);
  }

  useExceptionFilters() {
    const exceptionFilter = new ExceptionFilter();
    this.app.use(exceptionFilter.catch.bind(exceptionFilter));

    this.app.use("*", (req, res) =>
      res.render(path.resolve(__dirname, 'views', 'page-not-found.html'))
    );
  }

  init() {
    this.useMiddleware();
    this.useRoutes();
    this.useExceptionFilters();
    this.app.listen(this.port);
    console.log(`Server works! Port ${this.port}`);
  }

  close() {
    this.app.close();
  }
}
