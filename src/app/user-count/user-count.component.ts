import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { of } from "rxjs";
import { delay, finalize } from "rxjs/operators";
import { SpinnerService } from "../spinner/spinner.service";

@Component({
  selector: "app-user-count",
  templateUrl: "./user-count.component.html",
  styleUrls: ["./user-count.component.scss"],
})
export class UserCountComponent implements AfterViewInit {
  count: number;
  @ViewChild("userTemplate") userTemplate: ElementRef;

  constructor(private spinnerSvc: SpinnerService) {}

  ngAfterViewInit(): void {
    this.spinnerSvc.startLoadingForComponent(this.userTemplate);
    of({ count: 5 })
      .pipe(
        delay(5000),
        finalize(() =>
          this.spinnerSvc.finishLoadingForComponent(this.userTemplate)
        )
      )
      .subscribe((res) => {
        this.count = res.count;
      });
  }
}
