// import LoginPage from '../pageObjects/loginspec';
const assert =require('assert');
const LoginPage = require('../pageObjects/loginspec')

describe('phptravels.net login page', function() {
  let demouser = 'user@phptravels.com';
  let validPass = 'demouser';

  beforeEach(function () {
    browser.url('http://www.phptravels.net/login');
    browser.pause(10000);
  });

  it('should allow user to login ', function () {
    LoginPage.loginSpec(demouser, validPass);
    browser.pause(2000);
  });
});
