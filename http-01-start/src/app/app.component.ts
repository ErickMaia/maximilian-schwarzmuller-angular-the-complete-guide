import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);

    this.httpClient.post<{name: string}>(
      'https://angular-testing-bfa5c-default-rtdb.firebaseio.com/posts.json', 
      postData
    ).subscribe(
      responseData => {
        console.log(responseData);
        
      }
    )

  }

  onFetchPosts() {
    this.fetchPosts(); 
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.httpClient.get<{[key: string]: Post}>(
      'https://angular-testing-bfa5c-default-rtdb.firebaseio.com/posts.json'
    )
    .pipe(map(
      (responseData) => {
        const postsArray: Post[] = []; 
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postsArray.push({... responseData[key], id: key})
          }
        }
        return postsArray; 
      }
    ))
    .subscribe(
      posts => console.log(posts)
    )
  }
}