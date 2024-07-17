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
    instance = new Conjur.Resource();
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

  describe('Resource', function() {
    it('should create an instance of Resource', function() {
      // uncomment below and update the code to test Resource
      //var instane = new Conjur.Resource();
      //expect(instance).to.be.a(Conjur.Resource);
    });

    it('should have the property annotations (base name: "annotations")', function() {
      // uncomment below and update the code to test the property annotations
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

    it('should have the property policy (base name: "policy")', function() {
      // uncomment below and update the code to test the property policy
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

    it('should have the property policyVersions (base name: "policy_versions")', function() {
      // uncomment below and update the code to test the property policyVersions
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

    it('should have the property restrictedTo (base name: "restricted_to")', function() {
      // uncomment below and update the code to test the property restrictedTo
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

    it('should have the property secrets (base name: "secrets")', function() {
      // uncomment below and update the code to test the property secrets
      //var instane = new Conjur.Resource();
      //expect(instance).to.be();
    });

  });

}));
