const log = require('./logger');

module.exports = class api {
  static #scheme = 'http'
  static #domain = 'localhost'
  static #port = '3000'

  static get #origin() {
    return `${this.#scheme}://${this.#domain}:${this.#port}`
  }

  static async get(path) {
    const method = 'GET'
    const url = this.#origin + path
    log.info(`(→ Req) ${method} - ` + url)
    const result = await fetch(url)
    const body = await result.json()
    log.info(`(← Res) ${result.status}: ${result.statusText} > ` + JSON.stringify(body))
    return body
  }

  static async post(path, request) {
    const method = 'POST'
    const url = this.#origin + path
    log.info(`(→ Req) ${method} - ` + url)
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
    const body = await result.json()
    log.info(`(← Res) ${result.status}: ${result.statusText} > ` + JSON.stringify(body))
    return body
  }

  static async put(path, request) {
    const method = 'PUT'
    const url = this.#origin + path
    log.info(`(→ Req) ${method} - ` + url)
    const result = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
    const body = await result.json()
    log.info(`(← Res) ${result.status}: ${result.statusText} > ` + JSON.stringify(body))
    return body
  }

  static async delete(path) {
    const method = 'DELETE'
    const url = this.#origin + path
    log.info(`(→ Req) ${method} - ` + url)
    const result = await fetch(url, {
      method: "DELETE",
    })
    const body = await result.json()
    log.info(`(← Res) ${result.status}: ${result.statusText} > ` + JSON.stringify(body))
    return body
  }
}