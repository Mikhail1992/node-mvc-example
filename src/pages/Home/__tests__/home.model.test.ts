import { HomeModel } from '../home.model'

describe('HomeModel', () => {
  let modelInst: HomeModel
  beforeAll(() => {
    modelInst = new HomeModel()
  })

  test('shoult return home data', async () => {
    const result = modelInst.getContent()
    expect(result).toEqual(expect.not.stringContaining('Lorem'))
  })
})
