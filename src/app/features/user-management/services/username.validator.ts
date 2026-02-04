import {AbstractControl, ValidatorFn} from '@angular/forms';

export const startWithUppercaseValidator: ValidatorFn = (control: AbstractControl) => {

  const startsWithLowercaseLetter = control.value[0]?.toLowerCase() === control.value[0];

  if (startsWithLowercaseLetter) {
    return {
      startsWithLowercaseLetter: true
    }
  }
  return {};

}
