import { Component, OnInit, NgZone } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, FormFieldTypes, UI_AUTH_CHANNEL, AUTH_STATE_CHANGE_EVENT } from '@aws-amplify/ui-components';
import {ActivatedRoute, Router, UrlSerializer} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authState: AuthState;
  authStateTypes = AuthState;
  
  constructor(private zone: NgZone,private router: Router) {
    
   }

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      console.log(authState);
      console.log(authData);
     
      if (authState == this.authStateTypes.SignedIn){
        
        this.zone.run(args => {
          // if (roles.includes('admin'))
              this.router.navigate(['/home']);
          })

      }
      if (authState == this.authStateTypes.SignedOut){
        
        this.zone.run(args => {
          // if (roles.includes('admin'))
              this.router.navigate(['/login']);
          })

      }
     
    });
  }

}
