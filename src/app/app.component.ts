import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ready = false;
  user: Object;
 constructor(private authservice: AuthService, private auth: AngularFireAuth){
  this.auth.user.subscribe(v=>{ 
    this.user = v;
    this.ready = true
  });
 }

 logout(){
   this.authservice.logout();
 }
}
