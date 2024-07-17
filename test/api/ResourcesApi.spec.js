/**
 * Conjur
 * This is an API definition for CyberArk Conjur Open Source. You can find out more at [Conjur.org](https://www.conjur.org/).
 *
 * The version of the OpenAPI document: 5.3.1
 * Contact: conj_maintainers@cyberark.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Conjur);
  }
}(this, function(expect, Conjur) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Conjur.ResourcesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ResourcesApi', function() {
    describe('showResource', function() {
      it('should call showResource successfully', function(done) {
        //uncomment below and update the code to test showResource
        //instance.showResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showResourcesForAccount', function() {
      it('should call showResourcesForAccount successfully', function(done) {
        //uncomment below and update the code to test showResourcesForAccount
        //instance.showResourcesForAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showResourcesForAllAccounts', function() {
      it('should call showResourcesForAllAccounts successfully', function(done) {
        //uncomment below and update the code to test showResourcesForAllAccounts
        //instance.showResourcesForAllAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showResourcesForKind', function() {
      it('should call showResourcesForKind successfully', function(done) {
        //uncomment below and update the code to test showResourcesForKind
        //instance.showResourcesForKind(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));