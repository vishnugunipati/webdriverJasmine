// import assert = require('assert');

class LoginPage{
  get login() { return $("=Login");}
  get username() {return $('#input-email');}
  get passwoed() { return $('#input-password');}
  get submit() { return $('[type="submit"]');}


  loginSpec(username, pass){
    this.login.clck();
    browser.pause(3000);
    this.username.setValue(username);
    this.passwoed.setValue(pass);
    browser.pause(3000);
    this.submit.click();
    browser.pause(3000);
  }
}
export default new LoginPage()
