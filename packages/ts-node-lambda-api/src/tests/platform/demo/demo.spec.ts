import { expect } from 'chai';
import 'mocha';
import DemoSaludator from '../../../app/platform/demo';

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = new DemoSaludator("John").greet();
    expect(result).to.equal('Hello, John');
  });

});