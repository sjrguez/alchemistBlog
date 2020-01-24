import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { Observable } from 'rxjs';
import { PostInterface } from '../../../shared/model/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post$: Observable<PostInterface>;

  constructor(private Router: ActivatedRoute, private postSrv: PostService) { }

  ngOnInit() {
    const post = this.Router.snapshot.params.id;
    this.post$ = this.postSrv.getOnePost(post);
    this.post$.subscribe((data => console.log(data)))
  }

}
