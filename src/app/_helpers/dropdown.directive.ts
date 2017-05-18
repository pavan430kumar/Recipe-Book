import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('click') Open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') Close() {
    this.isOpen = false;
  }
  private isOpen = false;
}
