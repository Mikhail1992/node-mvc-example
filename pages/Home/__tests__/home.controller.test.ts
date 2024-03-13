import { HomeController } from '../home.controller'
import { Request } from 'express'
import path from 'path'

describe('HomeController', () => {
  describe('renderHomePage', () => {
    let res: any
    beforeAll(() => {
      const req = {} as Request
      res = {
        render: jest.fn()
      }
      const next = () => {}

      new HomeController().renderHomePage(req, res, next)
    })
    test('shoult render home page', async () => {
      expect(res.render).toHaveBeenCalledWith(
        path.resolve(__dirname, '..', '..', '..', 'views', './home.view.html'),
        { content: 'Lorem Ipsum' }
      )
    })
  })
})
