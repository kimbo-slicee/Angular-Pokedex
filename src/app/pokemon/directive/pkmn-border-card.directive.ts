import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class PkmnBorderCardDirective {
  @Input('pkmnBorderCard') borderColor!:string;//with alise
  @Input() pkmBorderCard! :string;
  private intialColor:string='#f5f5f5';
  private secondeColor:string='#009688';
  constructor(private el:ElementRef) {
    this.setBorder(this.intialColor)
    this.setHeight(180)
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.secondeColor)
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.intialColor)
  }

  setBorder(color:string){
    const border=`4px solid ${color}`
    this.el.nativeElement.style.border=border
  }
  setHeight(height:number){
    this.el.nativeElement.style.height=`${height}px`
  }


}
