import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {
  message;
  constructor(private _http: HttpClient) 
  { 

  }

  ngOnInit() {
    return this._http.get("http://localhost:8080/hello").subscribe(res => {
      console.log(res);
     },
     error => {
      console.log("Some Error Happend");
    });
    
  }
  

  callRestApi(){
    this._http.get("http://localhost:8080/hello").subscribe(res => {
         console.log(res);
         this.message = res;
    });
    
    //() => {
    //console.log("Some Error Happend");
    //});
  }
}

