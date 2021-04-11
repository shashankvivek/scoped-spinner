import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {
  private templateRef!: ElementRef;
  private loadingEvent$ = new Subject<boolean>();
  public isLoading$ = this.loadingEvent$.asObservable();
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public startLoading() {
    this.loadingEvent$.next(true);
  }

  public finishLoading() {
    this.loadingEvent$.next(false);
  }

  public setLocalSpinnerTemplate(template: ElementRef): void {
    this.templateRef = template;
  }

  public startLoadingForComponent<T>(component: ElementRef) {
    const element: HTMLElement = component.nativeElement;
    element.setAttribute("style", "position: relative");
    element.insertAdjacentHTML(
      "beforeend",
      this.templateRef.nativeElement.innerHTML
    );
  }

  public finishLoadingForComponent<T>(component: ElementRef) {
    const element: HTMLElement = component.nativeElement;
    const loadingCompTemplate = element.querySelector("#component-spinner");
    this.renderer.removeChild(element, loadingCompTemplate);
  }
}
