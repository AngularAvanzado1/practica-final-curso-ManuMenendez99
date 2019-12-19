import { Component, OnInit } from '@angular/core';
import { Regiones, Pais } from "@t/domain";
import { ApiService } from '../servicios/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PaisesComponent } from '../paises/paises.component';

@Component({
  selector: 'ab-world-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {
  paises: Pais
  displayedColumns: string[] = ['code','iso2code', 'name', 'actions'];
  dataSource: Regiones

  constructor(private service: ApiService,public dialog: MatDialog) {
  }
  name: string;
  PaisPorRegion(sID: string) {
    this.dialog.open(PaisesComponent, {
      data: {sID: sID},
      width: '2500px'
    })
  }


  getRegiones() {
    this.service.getRegiones().subscribe(
      res => {
        this.dataSource = res[1]
      },
      err => console.log(err)
      )
    }
  ngOnInit() {
    this.getRegiones()
  }

}
