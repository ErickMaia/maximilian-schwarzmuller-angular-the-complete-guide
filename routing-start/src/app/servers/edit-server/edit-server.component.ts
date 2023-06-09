import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Params, Router, UrlTree } from '@angular/router';

import { ServersService } from '../servers.service';
import { CanDeactivateComponent } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false; 
  changesSaved = false; 

  constructor(
    private serversService: ServersService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  canDeactivate: () => boolean | Promise<boolean> | UrlTree | Observable<boolean | UrlTree>
  =
  () => {
    
    if(!this.allowEdit) 
          return true; 

    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
        && this.changesSaved == false)
      {
        return confirm("Do you want to leave without saving changes?")
      }else{
        return true
      }

  }
  ;

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.queryParams)
    console.log(this.activatedRoute.snapshot.fragment)
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      }
    )
    this.activatedRoute.fragment.subscribe()
    let id = +this.activatedRoute.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    // subscribe route params to update the id if params change
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        let id = +this.activatedRoute.snapshot.params['id']
        this.server = this.serversService.getServer(id);
      }
    )
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true; 
    this.router.navigate(['../'], {relativeTo: this.activatedRoute})
  }

}
