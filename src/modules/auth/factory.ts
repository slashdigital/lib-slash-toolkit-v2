import AbstractAuthStrategy from "./strategy/abstract";
import LocalAuthStrategy from "./strategy/local";

export default class AuthFactory {
  static createLocalAuth(): AbstractAuthStrategy {
    return new LocalAuthStrategy();
  }
}