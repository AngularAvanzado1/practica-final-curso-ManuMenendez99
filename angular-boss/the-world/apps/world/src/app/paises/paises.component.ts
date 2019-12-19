import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../servicios/api.service';
import { Pais } from '@t/domain';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PaisComponent } from '../pais/pais.component';

@Component({
  selector: 'ab-world-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
})
export class PaisesComponent implements OnInit {

  constructor(private service: ApiService,
              public dialogRef: MatDialogRef<PaisesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string,
              private _bottomSheet: MatBottomSheet) { }

    displayedColumns: string[] = ['id','iso2code', 'name', 'actions'];
    dataSource: Pais[]
    isLoading = true;
    noData = false;
    getPaisesPorRegion(sID: string) {
     this.service.getPaisPorRegion(sID).subscribe(
       res => {
        this.dataSource = res[1]
        if (this.dataSource['length'] === 0) {
          this.noData = true
        } else {
          this.noData = false
        }
        this.isLoading = false
       },
       err => {
         console.log(err)
         this.isLoading = false
       }
     )
    }

    VerPais(sID: number) {
      this._bottomSheet.open(PaisComponent, {
        data: {sID: sID}
      });
    }

    ngOnInit() {
      this.getPaisesPorRegion(this.data['sID'])
  }

}
