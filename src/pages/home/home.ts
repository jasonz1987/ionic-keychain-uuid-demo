import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { NgZone } from '@angular/core';

declare var KeychainUUID;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  deviceId:string;

  constructor(public navCtrl: NavController,
    private zone: NgZone,
    private platform: Platform) {

  }

  getDeviceID() {
    if(this.platform.is("ios")) {

      var args = {
        'key':'com.jason-z.test.uuid'
       };

       KeychainUUID.getDeviceID((id)=>{
          this.zone.run(()=>{
            this.deviceId = id;
          });
         
        },(err)=>{
          alert("获取失败");
          console.log(err);
        },args);
    }
  }

  deleteDeviceID() {
    if(this.platform.is("ios")) {

      var args = {
        'key':'com.jason-z.test.uuid'
       };

       KeychainUUID.deleteDeviceID(()=>{
           this.zone.run(()=>{
            this.deviceId = "";
          });
        },(err)=>{
          alert("删除失败");
          console.log(err);
        },args);
    }
  }



}
