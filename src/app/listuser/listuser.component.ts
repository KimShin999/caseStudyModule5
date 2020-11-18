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

  detailuser(id){
    debugger
    this.router.navigateByUrl('/detail/'+id)
  }

  getData(){
    this.service.getData()
    .then(res => {
      this.users = res;
    }).catch(e =>{
      window.alert('connection Error')
    })
  }

}
