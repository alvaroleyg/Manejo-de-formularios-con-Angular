import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProvidersService } from 'src/app/services/providers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent {
  providerForm: FormGroup;
  formSubmitted = false;

  constructor(
    private providersService: ProvidersService,
    private router: Router
  ) {
    this.providerForm = new FormGroup({
      cif: new FormControl('', Validators.required),
      name: new FormControl(''),
      activity: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      cp: new FormControl(''),
      phone: new FormControl('')
    });
  }

  addProvider(): void {
    this.formSubmitted = true;

    if (this.providerForm.invalid) {
      return;
    }

    this.providersService.addProvider(this.providerForm.value).subscribe(() => {
      this.router.navigate(['/providers']);
    });
  }
}
