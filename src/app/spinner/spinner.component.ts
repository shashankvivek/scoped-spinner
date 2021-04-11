import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements AfterViewInit {

  public isLoading = false;
  private loadingSubscription = new Subscription();

  @ViewChild('componentSpinner') componentSpinner: ElementRef<HTMLElement>;

  constructor(
    private readonly spinnerService: SpinnerService
  ) {
    this.loadingSubscription = this.spinnerService.isLoading$.subscribe(state => {
      this.isLoading = state;
    });
   }

  ngAfterViewInit(){
    this.componentSpinner.nativeElement.setAttribute('style', 'display: none')    
    this.spinnerService.setLocalSpinnerTemplate(this.componentSpinner);
  }

  ngOnDestroy(){
    this.loadingSubscription.unsubscribe();
  }

}
