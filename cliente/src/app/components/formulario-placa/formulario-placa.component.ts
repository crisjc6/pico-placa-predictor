import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PlacaService} from '../../services/plate.service';
import {PlacaIngresoInterface} from '../../interfaces/placa-ingreso-interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ResultadoPlacaComponent} from '../resultado-placa/resultado-placa.component';

@Component({
  selector: 'app-formulario-placa',
  templateUrl: './formulario-placa.component.html',
  styleUrls: ['./formulario-placa.component.css']
})
export class FormularioPlacaComponent implements OnInit {
  placaForm: FormGroup;
  titulo = 'Crear Placa';
  id: string | null;
  time = {hour: 13, minute: 30};

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              // tslint:disable-next-line:variable-name
              private _placaService: PlacaService,
              private aRouter: ActivatedRoute,
              private modalService: NgbModal
  ) {
    this.placaForm = this.fb.group(
      {
        placa: ['', Validators.required],
        fecha: ['', Validators.required],
        hora: ['', Validators.required],
      }
    );
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // this.esEditar();
  }
  // agregarPlaca() {
  //   console.log(this.placaForm);
  //   console.log(this.placaForm.get('placa')?.value);
  //
  //   const PRODCUTO: Placa  = {
  //     categoria: this.placaForm.get('categoria')?.value,
  //     nombre: this.placaForm.get('placa')?.value,
  //     precio: +this.placaForm.get('precio')?.value,
  //     ubicacion: this.placaForm.get('ubicacion')?.value
  //
  //   };
  //   if (this.id !== null ){
  //     this._placaService.editarPlaca(this.id, PRODCUTO).subscribe(data => {
  //       this.toastr.success('El placa fue actualizado con éxito', 'Placa Actualizado');
  //       this.router.navigate(['/']);
  //     }, error => {
  //       console.log(error);
  //       this.toastr.error('Error Actualizando placa', 'Error Actualizando');
  //       this.placaForm.reset();
  //     });
  //   } else {
  //     console.log(PRODCUTO);
  //     this._placaService.guardarPlaca(PRODCUTO).subscribe(data => {
  //       this.toastr.success('El placa fue registrado con éxito', 'Placa Registrado');
  //       this.router.navigate(['/']);
  //     }, error => {
  //       console.log(error);
  //       this.toastr.error('Error Creando placa', 'Error Creando');
  //       this.placaForm.reset();
  //     });
  //   }
  //
  // }
  //
  // esEditar(){
  //   if (this.id !== null) {
  //     this.titulo = 'Editar Placa';
  //     this._placaService.obtenerPlaca(this.id).subscribe(data => {
  //       this.placaForm.setValue({
  //         placa: data.nombre,
  //         categoria: data.categoria,
  //         ubicacion: data.ubicacion,
  //         precio: data.precio
  //       });
  //     });
  //   }
  // }
  // tslint:disable-next-line:typedef
  predecirPlaca() {
    const placaIngreso: PlacaIngresoInterface  = {
      plateNumber: this.placaForm.get('placa')?.value,
      fecha: this.placaForm.get('fecha')?.value,
      hora: this.placaForm.get('hora')?.value,

    };
    try {
      if (this._placaService.predecirPlaca(placaIngreso ) === true) {
        const modalRef = this.modalService.open(ResultadoPlacaComponent);
        modalRef.componentInstance.name = 'Usted puede circular';
        modalRef.componentInstance.valor = true;
      }
      else {
        const modalRef = this.modalService.open(ResultadoPlacaComponent);
        modalRef.componentInstance.name = 'Usted no puede circular';
        modalRef.componentInstance.valor = false;
      }
    }
    catch (error) {
      this.toastr.error('Ultimo dígito no válido ', 'Error');
    }
  }
}
