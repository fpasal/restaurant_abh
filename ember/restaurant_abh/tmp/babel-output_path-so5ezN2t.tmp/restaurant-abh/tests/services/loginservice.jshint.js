define('restaurant-abh/tests/services/loginservice.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/loginservice.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/loginservice.js should pass jshint.\nservices/loginservice.js: line 8, col 12, \'$\' is not defined.\nservices/loginservice.js: line 16, col 7, \'$\' is not defined.\nservices/loginservice.js: line 18, col 7, \'$\' is not defined.\nservices/loginservice.js: line 20, col 7, \'$\' is not defined.\n\n4 errors');
  });
});