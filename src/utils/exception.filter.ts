import path from "path";
import { NextFunction, Request, Response } from "express";
import Exception from "./exception";

class ExceptionFilter {
  catch(
    err: Error | Exception,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    console.log(err);
    res.render(path.resolve(__dirname, "..", "views", "error.html"));
  }
}

export { ExceptionFilter };
