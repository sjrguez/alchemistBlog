import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string
  }[] = [
    {
      id: '1',
      titlePost: 'Post One',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.
      
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.`,
      imagePost: 'https://i.picsum.photos/id/237/200/300.jpg'
    },
    {
      id: '2',
      titlePost: 'Post Two',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.
      
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300'
    }, {
      id: '3',
      titlePost: 'Post Three',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.
      
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300'
    }, {
      id: '3',
      titlePost: 'Post Three',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.
      
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300'
    }, {
      id: '3',
      titlePost: 'Post Three',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.
      
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300'
    }, {
      id: '3',
      titlePost: 'Post Three',
      contentPost: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.
      
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem consectetur exercitationem excepturi. Atque accusamus numquam est, mollitia sit, neque placeat excepturi qui corrupti iure non quo. Aliquid, explicabo ea.`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}