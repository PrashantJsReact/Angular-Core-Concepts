import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PropertyType } from 'src/app/core/enums/property-type';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  // Make a variable reference to our Enum
  ePropertyType = PropertyType;

  // Build our propertyForm
  propertyForm!: FormGroup;
  type!: FormControl;
  price!: FormControl; // This is only here to make the propertyForm look more leg1t

  constructor(private formBuilder: FormBuilder) {
    this.createPropertyForm();
    this.propertyForm.valueChanges.subscribe({
      next: (control) => console.log(control),
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {}

  createPropertyForm() {
    this.propertyForm = this.formBuilder.group({
      type: [null, [Validators.required]],
      price: [0, [Validators.required]],
    });

    this.type = this.propertyForm.controls['type'] as FormControl;
    this.price = this.propertyForm.controls['price'] as FormControl;
  }
}
