import {User} from '../model/User';
import {AuthData} from '../model/auth-data';

export class AuthService {
  private user: User;

  registerUser(authData: AuthData){
    this.user = {
      email: authData.email,
      userId: "1"
    };
  }

  login(authData: AuthData){

  }

  logout() {
    this.user = null;
  }

  getUser(){
    return { ...this.user }; // return brand new object
  }

  isAuth(){
    return this.user == null;
  }

}
