// import assert = require('assert');

class LoginPage{

  get username() {return $('username');}
  get passwoed() { return $('password');}
  get login() { return $('Login');}


  loginSpec(username, pass){
    this.username.setValue(username);
    this.passwoed.setValue(pass);
    browser.pause(3000);
    this.login.click();
    browser.pause(3000);
  }
}
export default new LoginPage()
