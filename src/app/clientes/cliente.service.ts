import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.jason';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Cliente[]{
        return CLIENTES;
  }
}
