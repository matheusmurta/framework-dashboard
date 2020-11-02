import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../models/album';
import { Post } from '../../../../models/post';
import { Todo } from '../../../../models/todo';
import { Albums } from '../../../../services/album.service';
import { Posts } from '../../../../services/post.service';
import { Todos } from '../../../../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postTotal: number;
  albumTotal: number;
  todoTotal: number;

  single: any[];
  view: any[] = [700, 200];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Estatísticas ';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Módulos';

  colorScheme = {
    domain: ['#d53f8c','#5a67d8', '#dd6b20',  '#AAAAAA']
  };

  constructor(
    public postService: Posts,
    public todosListervice: Todos,
    public albumsListervice: Albums
  ) {

  }

  refreshGraph(){
    if (this.postTotal > 0 && this.albumTotal > 0 && this.todoTotal > 0) {
      this.single = [
        {
          "name": "Posts",
          "value": this.postTotal
        },
        {
          "name": "Albums",
          "value": this.albumTotal
        },
        {
          "name": "Todos",
          "value": this.todoTotal
        }
      ];
    }
  }

  ngOnInit() {
    this.getTotalOfAll();

    this.single = [
      {
        "name": "Posts",
        "value": 0
      },
      {
        "name": "Albums",
        "value": 0
      },
      {
        "name": "Todos",
        "value": 0
      }
    ];

  }

  getTotalOfAll() {
    this.postService.get().subscribe((posts: Post[]) => {
      this.postTotal = posts.length;
      this.refreshGraph();
    });

    this.todosListervice.get().subscribe((todosList: Todo[]) => {
      this.albumTotal = todosList.length;
      this.refreshGraph();

    });

    this.albumsListervice.get().subscribe((albumsList: Album[]) => {
      this.todoTotal = albumsList.length;
      this.refreshGraph();
    });
  }

  
}
