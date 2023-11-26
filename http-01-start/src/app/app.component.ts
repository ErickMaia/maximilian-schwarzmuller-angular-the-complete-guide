import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { Post } from './post.model';
import { PostsService } from './services/posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching: boolean = false; 
  error = null; 

  constructor(
    private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    this.fetchPosts(); 
  }

  private fetchPosts(){
    this.isFetching = true; 
    this.postsService.fetchPosts()
      .subscribe(
        posts => {
          this.loadedPosts = posts
          this.isFetching = false;
        }
      )
  }

  onClearPosts() {
    this.clearPosts(); 
  }

  clearPosts(){
    this.postsService.deleteAllPosts().subscribe(
      () => {
        this.loadedPosts = []
      }
    , error => {
      console.log("Error when trying to delete: ", error)
      this.error = error.message; 
    }); 
  }

  
}
