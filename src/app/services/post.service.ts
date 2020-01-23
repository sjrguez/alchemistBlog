import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostInterface } from '../shared/model/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs: AngularFirestore) { }


  public getAllPosts(): Observable<PostInterface[]> {
    return this.afs.collection('Posts')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
             const data = a.payload.doc.data() as PostInterface;
             const id = a.payload.doc.id;
             return {id, ...data};
          })
        )
      );
  }
}
