import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  createAndStorePost(title: string, content: string){
    // Send Http request

    let postData: Post = {content: content, title: title}

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

  fetchPosts(): Observable<Post[]>{
    return this.httpClient.get<{[key: string]: Post}>(
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
  }
}
