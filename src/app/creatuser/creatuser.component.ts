import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-creatuser',
  templateUrl: './creatuser.component.html',
  styleUrls: ['./creatuser.component.css']

})
export class CreatuserComponent implements OnInit {


  constructor(private service: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  user: any = {
    userName: "",
    userPassword: "",
  }

  showlist(){
    this.router.navigateByUrl('')
  }

  createUser(){
    this.service.createUser(this.user)
    .then(res => {
      this.router.navigateByUrl('/')
      window.alert('create thành công')
    }).catch(e =>{
      window.alert('Error')
    })
  }


}
