export default function SignIn(a, b){

  var OurLogin = Object();

  var login = [];

  OurLogin.emailLogin = a;
  OurLogin.passLogin = b;

  if(sessionStorage.login){
    login = JSON.parse(sessionStorage.getItem('login'));
  }else{
    login = [];
  }

  login.push(OurLogin);
  
  if(sessionStorage.setItem('login', JSON.stringify(login))){
    return 1;
  }else{
    return 0;
  }
  
};