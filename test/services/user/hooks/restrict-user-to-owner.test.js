'use strict';

const assert = require('assert');
const restrictUserToOwner = require('../../../../src/services/user/hooks/restrict-user-to-owner.js');

describe('user restrictUserToOwner hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restrictUserToOwner()(mockHook);

    assert.ok(mockHook.restrictUserToOwner);
  });
});
