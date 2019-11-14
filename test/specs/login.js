import LoginPage from '../pageObjects/loginspec';
const assert =require('assert');
// const LoginPage = require('../pageObjects/loginspec');

describe('login page', function() {
  let demouser = 'asdaad';
  let validPass = 'asd@123$';

  beforeEach(function () {
    browser.pause(30000);
    browser.url('http://tutorialsninja.com/demo');
    browser.pause(10000);
  });

  it('should allow user to login ', function () {
    LoginPage.loginSpec(demouser, validPass);
    browser.pause(2000);
  });
});
