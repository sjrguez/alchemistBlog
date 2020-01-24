import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { PostComponent } from './components/posts/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';



import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule, StorageBucket, AngularFireStorage} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: StorageBucket, useValue: 'gs://the-alchemist-blog.appspot.com'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
