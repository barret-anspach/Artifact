'use strict';

describe('Directive: animations', function () {

  // load the directive's module
  beforeEach(module('artifactApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<animations></animations>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the animations directive');
  }));
});
