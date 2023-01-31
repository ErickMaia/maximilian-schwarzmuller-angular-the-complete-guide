import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultBackground: string = 'transparent'; 
  @Input('appBetterHighlight') highlightBackground: string = 'yellow'; 

  @HostBinding('style.backgroundColor') backgroundColor : string; 
  @HostBinding('style.transition') transition: string; 

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "blue")
    this.backgroundColor = this.defaultBackground; 
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue")
    // this.renderer.setStyle(this.elementRef.nativeElement, "transition", "background-color 3s")
    this.backgroundColor = this.highlightBackground
    this.transition = "background-color 3s"
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent")
    this.backgroundColor = this.defaultBackground
  }

}
