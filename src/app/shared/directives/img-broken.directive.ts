import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
  //standalone: true
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('esta imagen revento -->', this.elHost);
    elNative.src = '../../../assets/images/asylum_marketing_logo.jpeg'

  }

  constructor(private elHost: ElementRef ) {
    console.log(this.elHost );
   }

}
