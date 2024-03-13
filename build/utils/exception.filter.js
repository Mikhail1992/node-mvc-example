"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionFilter = void 0;
const path_1 = __importDefault(require("path"));
class ExceptionFilter {
    catch(err, req, res, next) {
        res.render(path_1.default.resolve(__dirname, 'views', 'error.html'));
    }
}
exports.ExceptionFilter = ExceptionFilter;
//# sourceMappingURL=exception.filter.js.map