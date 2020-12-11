import {Object} from 'realm';
export class TestClass extends Object {
  static schema = {
    name: 'TestClass',
    properties: {
      id: 'string',
      description: 'string?',
    },
  };

  static newTestClass(newId = 'Testing') {
    const result = new TestClass();
    result.id = newId;
    result.description = 'Testing stuff for the stuff';
    return result;
  }
}
