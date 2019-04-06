import { CalculatorRequest } from "../@types";

export default class Calculator {
  public sum(request: CalculatorRequest) {
    return request.a + request.b;
  }

  public multiply(request: CalculatorRequest) {
    return request.a * request.b;
  }
}
