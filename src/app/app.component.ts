import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { SubscriberContainer } from './service/subscrition-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  num: Number;
  numtwo: Number;
  subs = new SubscriberContainer;

  ngOnInit(): void {
    this.vistData();
    this.visistdatadua();
  }

  vistData() {
    this.subs.add = timer(0, 1000).subscribe(val => {
      this.num = val;
      if (val === 5) return this.subs.dispose();
    })
  }

  visistdatadua() {
    this.subs.add = timer(0, 1000).subscribe(val => {
      this.numtwo = val;
    })
  }

  ngOnDestroy() {
    this.subs.dispose();
  }

  reset() {
    window.location.reload();
  }

}
