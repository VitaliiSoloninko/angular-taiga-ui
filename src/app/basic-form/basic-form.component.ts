import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper, TuiSelect } from '@taiga-ui/kit';

@Component({
  selector: 'app-basic-form',
  imports: [
    ReactiveFormsModule,
    TuiTextfield,
    TuiDataListWrapper,
    TuiChevron,
    TuiSelect,
  ],

  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css',
})
export class BasicFormComponent {
  readonly organizations = ['Taiga UI', 'Maskito'];

  readonly regions = [
    {
      id: '1',
      name: 'Central EU (Frankfurt)',
      isoCode: 'DE',
    },
    {
      id: '2',
      name: 'North EU (Finland)',
      isoCode: 'FI',
    },
    {
      id: '3',
      name: 'South EU (Spain)',
      isoCode: 'ES',
    },
  ];

  readonly form = new FormGroup({
    name: new FormControl(''),
    organization: new FormControl(''),
    region: new FormControl(''),
    password: new FormControl(''),
  });
}
