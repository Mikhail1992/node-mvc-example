import path from 'path'
import { __dirname } from '../helpers.js';

class ExceptionFilter {
  catch(err, req, res, next) {
    res.render(path.resolve(__dirname, 'views', 'error.html'))
  }
}

export { ExceptionFilter };
