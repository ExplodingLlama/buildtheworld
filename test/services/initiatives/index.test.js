'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('initiatives service', function() {
  it('registered the initiatives service', () => {
    assert.ok(app.service('initiatives'));
  });
});
