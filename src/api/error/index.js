import _ from 'lodash';

class APIError {
  statusCode;
  type;
  traceId;
  title;

  // The problems are the errors received from the server
  problems;

  /**
   * Implement it into child class
   */
  message;

  constructor(httpError) {
    const {status, title, traceId, type, errors} = httpError.response.data;

    this.statusCode = httpError.response.status;
    this.type = type;
    this.traceId = traceId;
    this.title = title;

    problems = _.mapValues(errors => {
      return new ProblemDetail();
    });
  }
}

export class ProblemDetail {
  code;
  values;

  /**
   * @param {string} code  e.g. "password"
   * @param {string[]} values e.g [
      "'password' must not be empty.",
      "The length of 'password' must be at least 6 characters. You entered 0 characters."
    ]
   */
  constructor(code, values) {
    this.code = code;
    this.values = values;
  }
}

export default APIError;
