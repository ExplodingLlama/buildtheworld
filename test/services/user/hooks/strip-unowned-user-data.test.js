'use strict';

const assert = require('assert');
const stripUnownedUserData = require('../../../../src/services/user/hooks/strip-unowned-user-data.js');

describe('user stripUnownedUserData hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    stripUnownedUserData()(mockHook);

    assert.ok(mockHook.stripUnownedUserData);
  });
});
