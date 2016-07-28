'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('feeds service', function() {
  it('registered the feeds service', () => {
    assert.ok(app.service('feeds'));
  });
});
