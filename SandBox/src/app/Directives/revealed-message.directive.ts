import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRevealedMessage]'
})
export class RevealedMessageDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  //HostListener also works with custom events
  @HostListener('customEventEmitter') messageWasRevealed(event: Event){
    console.log("helloooo there")
    
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'goldenrod')
    
  }
}
