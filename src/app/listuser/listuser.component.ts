import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users: any = [];


  constructor(public router: Router, private service: UserService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  create(){
    this.router.navigateByUrl('/create')
  }

  updateUser(id){
    this.router.navigateByUrl('/detail'+id)
  }

  getData(){
    this.service.getData()
    .then(res => {
      this.users = res;
    }).catch(e =>{
      window.alert('connection Error')
    })
  }


  // idUser:  number;

  // user: any;

  // constructor(public router: Router, private service: UserService, private actRoute: ActivatedRoute) {
  //   this.idUser = parseInt(this.actRoute.snapshot.params.id);
  //   this.getdetail(this.idUser);
  // }

  // ngOnInit(): void {

  // }
  // getdetail(id){
  //   debugger
  //   this.service.detailData(id)
  //   .then(res => {
  //     this.user = res;
  //   }).catch(e =>{
  //     window.alert('connection Error')
  //   })
  // }


}
