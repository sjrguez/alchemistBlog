import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { PostInterface } from '../../../shared/model/post.interface';
import { Observable } from 'rxjs';


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
  }[] = [  ];

  public posts$: Observable<PostInterface[]>;

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.posts$ =  this.postSvc.getAllPosts();
  }

}
