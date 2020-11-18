import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {

  idUser: number;

  user: any = {
    userName: "",
    userPassword: ""
  }

  constructor(public router: Router, private service: UserService, private actRoute: ActivatedRoute) {
    this.idUser = parseInt(this.actRoute.snapshot.params.id);
    this.getDataById(this.idUser);
  }

  ngOnInit(): void {
  }

  showlist() {
    this.router.navigateByUrl('/')
  }

  getDataById(id) {
    this.service.detailData(id)
      .then(res => {
        this.user = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  updateData() {
    debugger
    this.service.updateData(this.idUser, this.user)
      .then(res => {
        this.user = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

}
