import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface TypedForm {
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