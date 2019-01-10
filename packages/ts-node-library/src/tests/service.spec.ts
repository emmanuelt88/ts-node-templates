import { expect } from 'chai';
import 'mocha';
import DemoService from './../lib/service';



describe('Hello function', () => {

  it('should return hello world', () => {
    
    const result = new DemoService("John").greet();
    expect(result).to.equal('Hello, John');
  });

});