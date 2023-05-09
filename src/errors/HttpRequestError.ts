export class CustomError extends Error {
  statusCode: number

  constructor(statusCode: number = 500, message: string = 'Erro no servidor.') {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)
    this.name = Error.name
    this.statusCode = statusCode
    Error.captureStackTrace(this)
  }
}
