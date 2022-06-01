import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {
  name?:string;
  term:any;
  pageNumbers:number[]=[];
  trendingAll:any=[];

  constructor(private _MovieService:MovieService) {
    for(let i=1;i<=10;i++)
    {
      this.pageNumbers.push(i);
    }

    _MovieService.getTrendingAll(3).subscribe((data) => {
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
