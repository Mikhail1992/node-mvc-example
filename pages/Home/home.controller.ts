import { NextFunction, Request, Response } from 'express'
import path from 'path'
import { BaseController } from '../../utils/base.controller'
import { HomeModel } from './home.model'

export class HomeController extends BaseController {
  constructor() {
    super()
    this.bindRoutes([
      {
        path: '/',
        method: 'get',
        func: this.renderHomePage
      }
    ])
  }

  async renderHomePage(req: Request, res: Response, next: NextFunction) {
    try {
      const homeModelInst = new HomeModel()
      const content = await homeModelInst.getContent()
      res.render(
        path.resolve(__dirname, '..', '..', 'views', './home.view.html'),
        {
          content
        }
      )
    } catch (error) {
      next(error)
    }
  }
}
