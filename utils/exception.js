export default class Exception extends Error {
  constructor(code, message) {
    super();
    this.code = code;
    this.message = message;
  }
}
