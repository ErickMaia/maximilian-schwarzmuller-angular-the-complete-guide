import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  errorOcurred = new Subject<string>();


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
    ,
    error => {
      this.errorOcurred.next(error.message)
    })
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
    ),
    catchError(e => {
      //Send to analytics server

      return throwError(e); 
    })
    )
    
  }

  deleteAllPosts(){
    return this.httpClient.delete(
      'http://localhost:5215/api/Posts'
    )
  }
}
