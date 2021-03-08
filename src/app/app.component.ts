import { Component } from '@angular/core';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>

  constructor(private menuCtrl: MenuController, private dataService: DataService) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuCtrl.open('first');

  }
}
