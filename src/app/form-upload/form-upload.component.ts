import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html'
})
export class FormUploadComponent implements OnInit {

  ano: any[] = [2013, 2014, 2015, 2016, 1017, 2018, 2019];
  trimestre: any[] = [
    {id: 1, trimestre: '1º Trimestre'},
    {id: 2, trimestre: '2º Trimestre'},
    {id: 3, trimestre: '3º Trimestre'},
    {id: 4, trimestre: '4º Trimestre'},
  ];
  eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.http.get('http://localhost:5000/api/Values/').subscribe(response => {
      this.eventos = response;
      console.log(response);
    }, error => {
      console.log(error);
  });
}
}
