import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') onMouseOver(event: Event) {
    console.log(event)
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    console.log(event)
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black')
  }
}

