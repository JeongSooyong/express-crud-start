// 상태 코드(404, 400 등)를 담는 에러
export default class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}