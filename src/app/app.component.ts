import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url = "http://202.170.122.157:9250/"

  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {
  }

  // การประกาศตัวแปร ชนิดตัวแปร
  // Global กับ Local
  // String Number Boolean Array Object
  // let var const

  // การสร้าง method และ function
  // methodA() {}
  // function A() {}
  // let A = function() {}
  // let B = () => {}
  // parameter กับ argument
  // methodA(name: string) {}
  // function functionA(name: string) {}

  // localStorage

  // เงื่อนไข if else และ switch case
  // if() {}
  // if() {} else {}
  // if() {} else if() {} else {}
  // switch () {
  //   case ...:
  //   break;
  // default:
  //   break;
  // }

  // การ Loop for กับ forEach
  // for (let index = 0; index < array.length; index++) {}
  // array.forEach((element: any, index: number) => {});

  // การใช้งาน http request และ api คืออะไร
  // methodHttp() {
  //   this.http.get("").subscribe((response: any) => { })
  //   this.http.post("", {}).subscribe((response: any) => { })
  //   this.http.put("", {}).subscribe((response: any) => { })
  //   this.http.delete("").subscribe((response: any) => { })
  // }

  // การใช้งาน Material
  // การทำ popup

  // การใช้งาน Flex-layout
  // <div fxLayout="row warp">
  //   <div fxFlex="33" fxFlex.gt-xs="33" fxFlex.gt-sm="33" fxFlex.gt-md="33" fxFlex.gt-lg="33">
  //   </div>
  // </div>

  // การใช้ ngModel ngFor ngIf

  // การทำ lazy-load
}
