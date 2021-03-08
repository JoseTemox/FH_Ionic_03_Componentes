import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  publisher: string ='';


  superHeroes: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.superHeroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(event ){


    //this.dataService.getSuperHeroes().subscribe
    //console.log(event.detail.value);

    // if(event.detail.value === 'todos'){
    //   return this.publisher ='';
    // }
    this.publisher = event.detail.value;

  }

}
