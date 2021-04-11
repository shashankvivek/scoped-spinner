import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, finalize } from "rxjs/operators";
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private spinnerSvc: SpinnerService) { }

  ngOnInit(): void {
    // this.spinnerSvc.startLoading();
    // of({name: 'Superman'}).pipe(delay(3000), finalize(() => this.spinnerSvc.finishLoading())).subscribe(res => {
    //   this.username = res.name;
    // })
  }

}
