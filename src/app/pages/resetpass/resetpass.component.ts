import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss']
})
export class ResetpassComponent {
  user: User;
  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = '';
  emailInput: string;
  passwordInput: string;
  isForgotPassword: boolean;
  userDetails: any;


  constructor(public  afAuth: AngularFireAuth, private  authService: AuthService) {
    this.selectedVal = 'login';
    this.isForgotPassword = false;

  }
  public onValChange(val: string) {
    this.showMessage("", "");
    this.selectedVal = val;
  }

forgotPassword() {
  this.authService.sendPasswordResetEmail(this.emailInput)
    .then(res => {
      console.log(res);
      this.isForgotPassword = false;
      this.showMessage('success', 'Por favor checa tu Email');
    }, err => {
      this.showMessage('danger', err.message);
    });

}
showMessage(type, msg) {
  this.responseMessageType = type;
  this.responseMessage = msg;
  setTimeout(() => {
    this.responseMessage = "";
  }, 2000);
}

}

