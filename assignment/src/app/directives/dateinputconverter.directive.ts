import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input[type=date][ngModel], input[type=date][formControl]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputConverterDirective),
    multi: true
  }]
})
export class DateInputConverterDirective implements ControlValueAccessor{

  @HostListener('blur', []) onTouched: any = () => { };
  @HostListener('input', ['$event']) onChange: any = () => { };

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  registerOnTouched(fn: () => void) { this.onTouched = fn; }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = (event: any) => fn(event.target["valueAsDate"])
  }

  writeValue(value: Date | string) {
    var convertedValue = new Date(value);
    this.renderer.setProperty(this.elementRef.nativeElement, 'valueAsDate', convertedValue);
  }

}
