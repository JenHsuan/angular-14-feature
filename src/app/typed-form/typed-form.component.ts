import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, FormRecord, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { TypedForm } from './service/typed-form.domain';
import { BaseComponent } from '../base/base.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-typed-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionContainerComponent, HighlightModule],
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.scss']
})
export class TypedFormComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.TYPED_FORM);
  fromGroupCode = `
  interface TypedForm {
    firstName: FormControl<string>;
    lastName: FormControl<string | null>;
    address: FormGroup<{
      street: FormControl<string | null>;
      city: FormControl<string | null>;
      state: FormControl<string | null>;
      zip: FormControl<string | null>
    }>;
    aliases: FormArray<FormControl<string | null>>;
  };

  profileForm = new FormGroup<TypedForm>({
    firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  });
  `;

  fromGroupCodeError = `
  //The following code will have error messages for incorrect type calculation
  this.profileForm.controls.address.get('street') - 1


  //The values of the non-nullable field will be null after restting
  this.profileForm.reset();


  //The following code will have error messages for the lacks of requires fields
  this.profileForm.controls.address.setValue({
    street: '123',
    city: '123',
    state: '123',
  });

  //We can use patchValue instead
  this.profileForm.patchValue({
    address: {
      street: '123',
      city: '123',
      state: '123'
    }
  });

  //The following code will have error messages becase we are unallowed to remove a required field.
  this.profileForm.removeControl('street');
  `;

  untypedFromGroupCodeError = `
  profileUntypedForm = new UntypedFormGroup({
    firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  });

  ///The following code works fine
  this.profileUntypedForm.removeControl('address');

  profileRecordForm = new FormRecord<FormControl<string | null>>({
    firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl('', Validators.required)
  });

  //The following code works fine
  this.profileRecordForm.removeControl('firstName')
  `;

  profileForm = new FormGroup<TypedForm>({
    firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  });

  profileRecordForm = new FormRecord<FormControl<string | null>>({
    firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl('', Validators.required)
  });

  profileUntypedForm = new UntypedFormGroup({
    firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  });
  
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(new FormControl(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  getFormValue() {
    return JSON.stringify(this.profileUntypedForm.value);
  }

  resetForm() {
    //The value will be null after restting
    this.profileUntypedForm.reset();
  }

  removeStreet() {
    //will have error messages
    //this.profileForm.removeControl('street');
  }

  updateProfile() {
    this.profileForm.controls.address.setValue({
      street: '123',
      city: '123',
      state: '123',
      zip: '123'
    });

    /*
    this.profileForm.patchValue({
      address: {
        street: '123 Drew Street'
      }
    });
    */

    //this.profileForm.controls.address.get('street') - 1
  }

}
