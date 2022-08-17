/* eslint-disable no-undef */
module.exports.transform = {
  '^.+\\.(t|j)s$': 'ts-jest',
};
module.exports.testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)s$';
module.exports.moduleFileExtensions = ['ts', 'js', 'json', 'node'];

