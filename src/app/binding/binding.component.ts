import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
changerTitre() {
  this.titre = "Mon nouveau titre "
throw new Error('Method not implemented.');
}
  titre: string ="Apprendre le Databinding dans Angular 10"
  status : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
