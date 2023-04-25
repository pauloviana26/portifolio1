import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boasvindas',
  templateUrl: './boasvindas.page.html',
  styleUrls: ['./boasvindas.page.scss'],
})
export class BoasvindasPage implements OnInit {
  
  public mensagem: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.mensagem = this.route.snapshot.queryParamMap.get('parametro');
  }

}
