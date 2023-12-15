import { Component ,Input } from '@angular/core';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent {
  @Input() inputType!: string
  @Input() inputPlaceHolder!: string
  @Input() inputId!: string
  @Input() labelName!: string
  @Input() inputFormControlName!: string
  @Input() form!: FormGroup
constructor(){}

showErrors (): string {
  const form = this.form.get(this.inputFormControlName)
  if (form?.touched && form.invalid) {
    return this.getErrors(this.inputFormControlName)
  }
  return ''
}

private getErrors (name: string) {
  const inputData = this.form.get(name)
  if (inputData?.touched && !inputData.valid) {
    if (inputData.getError('required')) return this.labelName + ' is required'
    if (inputData.getError('minlength')) return this.labelName + ' is invalid'
    if (inputData.getError('maxlength')) return this.labelName + ' is invalid'
    if (inputData.getError('email')) return this.labelName + ' is invalid'
    if (inputData.errors)
      for (const errorKey in inputData.errors) {
        return inputData.errors[errorKey].message
      }
  }
  return ''
}
}
