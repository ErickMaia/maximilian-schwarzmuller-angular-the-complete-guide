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
  isFetching: boolean = false; 

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);

    this.httpClient.post<{name: string}>(
      'http://localhost:5215/api/Posts', 
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
    this.isFetching = true; 
    this.httpClient.get<{[key: string]: Post}>(
      'http://localhost:5215/api/Posts'
    )
    .pipe(map(
      (responseData) => {
        console.log("Response data", responseData);
        const postsArray: Post[] = []; 
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postsArray.push({... responseData[key], id: key})
          }
        }
        console.log("Posts list", postsArray)
        return postsArray; 
      }
    ))
    .subscribe(
      posts => {
        this.loadedPosts = posts
        this.isFetching = false;
      }
    )
  }
}
