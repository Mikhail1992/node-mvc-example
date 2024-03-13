"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const home_controller_1 = require("./pages/Home/home.controller");
const exception_filter_1 = require("./utils/exception.filter");
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
    }
    useMiddleware() {
        nunjucks_1.default.configure({
            autoescape: true,
            express: this.app
        });
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    useRoutes() {
        this.app.use('/', new home_controller_1.HomeController().router);
    }
    useExceptionFilters() {
        const exceptionFilter = new exception_filter_1.ExceptionFilter();
        this.app.use(exceptionFilter.catch.bind(exceptionFilter));
        this.app.use('*', (req, res) => res.render(path_1.default.resolve(__dirname, 'views', 'page-not-found.html')));
    }
    init() {
        this.useMiddleware();
        this.useRoutes();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        console.log(`Server works! Port ${this.port}`);
    }
    close() {
        this.server.close();
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map