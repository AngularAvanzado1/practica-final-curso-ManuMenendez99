import { Component, OnInit } from '@angular/core';
import { ApiService } from './servicios/api.service';
import { Pais, Regiones } from '@t/domain';
import { ThrowStmt } from '@angular/compiler';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ab-world-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent implements OnInit{
 title = "world"


  ngOnInit() {

  }
}

