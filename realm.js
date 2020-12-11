import Realm from 'realm';
import {TestClass} from './TestClass';

const config = {
  schema: [TestClass],
  schemaVersion: 1,
};

var realm = new Realm(config);

export function getRealm() {
  if (!realm) {
    realm = new Realm(config);
  }

  return realm;
}
