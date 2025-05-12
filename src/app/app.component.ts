import { Component } from '@angular/core';
import { TuiButton, TuiRoot } from '@taiga-ui/core';
import { BasicFormComponent } from './basic-form/basic-form.component';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, TuiButton, BasicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-taiga-ui';
}
