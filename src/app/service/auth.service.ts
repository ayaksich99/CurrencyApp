import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }
  login(){
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      val => this.router.navigate(['/chat'])
    ).catch(err=> this.router.navigate(['/']))
  }


  logout(){
    this.auth.signOut().then(val=>{
      this.router.navigate(['/'])
    }).catch()
  }
}
