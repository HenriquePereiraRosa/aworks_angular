import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lancamento-grid',
  templateUrl: './lancamento-grid.component.html',
  styleUrls: ['./lancamento-grid.component.css']
})
export class LancamentoGridComponent implements OnInit {

  @Input() lancamentos = [];

  constructor(auth: AuthService) { }

  ngOnInit() {
  }

}
