import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType, HttpResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
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

    let searchParams: HttpParams = new HttpParams(); 
    searchParams = searchParams.append("print", "pretty"); 
    searchParams = searchParams.append("custom", "key"); 

    return this.httpClient.get<{[key: string]: Post}>(
      'http://localhost:5215/api/Posts', 
      {
        headers: new HttpHeaders({"custom-header": "Hello!"}), 
        params: searchParams, 
        observe: "body", 
        responseType: "json" 
        //responseType: "json" is optional in this case because of the <{[key: string]: Post}> type above. 
        //It makes typescript infer that the responseType will be json. 
      }
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
      'http://localhost:5215/api/Posts',
      {
        observe: "events", 
        responseType: "text"
      }
    ).pipe(
      tap({
          next: (event: HttpEvent<any>) => {

            if(event.type === HttpEventType.Sent){
              console.log("Request sent. Awaiting for response. ")
            }
            if(event.type === HttpEventType.Response){
              console.log(event); 
            }
          }, 
          error: (error) => {
            console.log(error); 
          }}
      )
    )
  }
}
