import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent'
  @Input() highLightColor = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string
  @HostBinding('style.color') color: string = 'black'

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') onMouseOver(event: Event) {
    console.log(event)
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')*/
    this.backgroundColor = this.highLightColor
    this.color = 'white'
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    console.log(event)
    /*    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black')*/
    this.backgroundColor = this.defaultColor
    this.color = 'black'
  }
}

