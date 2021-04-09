import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resultado-placa',
  templateUrl: './resultado-placa.component.html',
  styleUrls: ['./resultado-placa.component.css']
})
export class ResultadoPlacaComponent implements OnInit {

  @Input() name: any;
  @Input() valor: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
