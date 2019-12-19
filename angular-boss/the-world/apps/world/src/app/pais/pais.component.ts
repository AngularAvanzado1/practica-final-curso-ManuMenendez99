import { Component, OnInit, Inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ApiService } from '../servicios/api.service';
import { Pais } from '@t/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-world-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisComponent implements OnInit {

  constructor(private service: ApiService,
              private _bottomSheetRef: MatBottomSheetRef<PaisComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  paises$: Observable<Pais[]>
  isLoading = true;

  parentExample: string;
  exampleParent: string;

  exampleMethodParent($event) {
    this.exampleParent = $event
  }

  getPaisObservable(sID: string) {
    this.paises$ = this.service.getPais(sID)
  }

  ngOnInit() {
    this.getPaisObservable(this.data['sID'])
    this.parentExample = "Hello Angular 7"
  }

  showMatricula(event):void{
    alert(event.nombre)
  }

}
