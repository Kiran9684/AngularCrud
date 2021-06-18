import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appSelectRequiredValidator]',
  providers: [
    {
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator {

  constructor() { }
  validate(control:AbstractControl) :{[key:string]:any}|null{
   return control.value === '-1'? {'defaultSelected':true} : null;
  }
}
