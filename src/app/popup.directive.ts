import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPopup]'
})
export class PopupDirective implements OnInit{
  
  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('mouseover')
  handleMouseOver(){
    console.log('you need to find more about ', this.element.nativeElement.innerHTML);
  }

  @HostListener('mouseout')
  handleMouseOut(){
    console.log('mouse out');
  }

}
