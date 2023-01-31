import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor : string; 
  @HostBinding('style.transition') transition: string; 

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "blue")
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue")
    // this.renderer.setStyle(this.elementRef.nativeElement, "transition", "background-color 3s")
    this.backgroundColor = "blue"
    this.transition = "background-color 3s"
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent")
    this.backgroundColor = "transparent"
  }

}
