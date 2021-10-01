import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

  public appInfo: any = {
    applicationName: "",
    version: ""
  };

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9090/info").subscribe((data: any) => {
      this.appInfo = data;
      console.log(data);
    });
  };


}
