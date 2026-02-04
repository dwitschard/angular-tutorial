import {Component, input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-input-field-error',
  imports: [
    JsonPipe
  ],
  template: `
    @if (showRawError()) {
      <pre>{{ formField()?.errors | json }}</pre>
    }
    
    @if (formField()?.errors) {
      <div class="error">{{ formField()?.errors?.['required'] ? 'This field is required' : '' }}</div>
      <div
        class="error">{{ formField()?.errors?.['startsWithLowercaseLetter'] ? 'Input must start with Uppercase' : '' }}
      </div>
    }
  `,
  styles: `
    .error {
      color: red;
      font-size: 0.8rem;
    }
  `
})
export class InputFieldError {
  readonly showRawError = input.required<boolean>()
  readonly formField = input<AbstractControl | null | undefined>()
}
