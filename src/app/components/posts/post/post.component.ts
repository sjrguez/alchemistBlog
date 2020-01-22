import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string
  } = {
    id: '1',
    titlePost: 'Post One',
    contentPost: 'Hello World',
    imagePost: 'https://i.picsum.photos/id/180/200/300.jpg'
  }
  constructor(private _Router: ActivatedRoute) { }

  ngOnInit() {
    this.post = this._Router.snapshot.params.id;
  }

}
