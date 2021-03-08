import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  textoBuscar: string ='';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albumes =>{
      //console.log(albumes);
      this.albums = albumes;
    });
  }

  onSearchChange(event){
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
