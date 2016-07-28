'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('karmaprofiles service', function() {
  it('registered the karmaprofiles service', () => {
    assert.ok(app.service('karmaprofiles'));
  });
});
