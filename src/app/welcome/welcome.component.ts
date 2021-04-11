import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name: string;
  constructor(private spinnerSvc: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerSvc.startLoading();
    of({ name: 'Ethan' })
      .pipe(
        delay(3000),
        finalize(() =>
          this.spinnerSvc.finishLoading()
        )
      )
      .subscribe((res) => {
        this.name = res.name;
      });
  }

}
