"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor(code, message) {
        super();
        this.code = code;
        this.message = message;
    }
}
exports.default = Exception;
//# sourceMappingURL=exception.js.map