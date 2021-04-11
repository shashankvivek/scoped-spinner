import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay, finalize } from "rxjs/operators";
import { SpinnerService } from "../spinner/spinner.service";

@Component({
  selector: "app-order-count",
  templateUrl: "./order-count.component.html",
  styleUrls: ["./order-count.component.scss"],
})
export class OrderCountComponent implements OnInit, AfterViewInit {
  @ViewChild("orderTemplate") orderTemplate: ElementRef;
  count: number;
  constructor(private spinnerSvc: SpinnerService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.spinnerSvc.startLoadingForComponent(this.orderTemplate);
    of({ count: 500 })
      .pipe(
        delay(3000),
        finalize(() =>
          this.spinnerSvc.finishLoadingForComponent(this.orderTemplate)
        )
      )
      .subscribe((res) => {
        this.count = res.count;
      });
  }
}
