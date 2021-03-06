import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription; 

  constructor(private route: ActivatedRoute) { }

  // This is not needed if you know that your component
  // 100 times is going to be recreated else you
  //might want to use .subscribe as show below
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

  ngOnDestroy() {
    //this.paramsSubscription.unsubscribe();
  }

}
