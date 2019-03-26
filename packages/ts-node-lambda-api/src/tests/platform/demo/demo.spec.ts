import { expect } from 'chai';
import 'mocha';
import DemoSaludator from '../../../app/domains/platform/demo/DemoSaludator';

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = new DemoSaludator().greet("John");
    expect(result).to.equal('Hello, John');
  });

});