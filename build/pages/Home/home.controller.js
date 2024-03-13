"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const path_1 = __importDefault(require("path"));
const base_controller_js_1 = require("../../utils/base.controller.js");
const home_model_js_1 = require("./home.model.js");
class HomeController extends base_controller_js_1.BaseController {
    constructor() {
        super();
        this.bindRoutes([
            {
                path: '/',
                method: 'get',
                func: this.renderHomePage
            }
        ]);
    }
    renderHomePage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const homeModelInst = new home_model_js_1.HomeModel();
                const content = yield homeModelInst.getContent();
                res.render(path_1.default.resolve(__dirname, 'pages', 'Home', './home.view.html'), {
                    content
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map