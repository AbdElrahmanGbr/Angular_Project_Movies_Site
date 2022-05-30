import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {


  trendingAll:any=[];
  constructor(private _MovieService:MovieService) {
    _MovieService.getTrendingAll().subscribe((data) => {
      this.trendingAll = data.results;
      console.log(data.results);
    });

   }

  ngOnInit(): void {
  }

}

let Observable =
{
  subscribe()
  {
    () => {}
  }
}
