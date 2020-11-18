import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(public httpClinet: HttpClient) { }

  getData = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = "http://localhost:8080/users";
      this.httpClinet.get(url)
      .subscribe(res => {
          resolve(res);
      }, err => {
          reject(err);
      })
    })
  }

  createUser = (user: any): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = "http://localhost:8080/users";
      this.httpClinet.post(url, user)
      .subscribe(res =>{
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  detailData = (id): Promise<Object> =>{
    return new Promise((resolve, reject) => {
      let url = `http://localhost:8080/users?id=${id}`;
      this.httpClinet.get(url)
      .subscribe(res =>{
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

}
