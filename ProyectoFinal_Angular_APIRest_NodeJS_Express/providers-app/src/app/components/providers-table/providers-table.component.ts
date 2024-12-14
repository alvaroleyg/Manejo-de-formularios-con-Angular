import { Component, OnInit } from '@angular/core';
import { Provider, ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-providers-table',
  templateUrl: './providers-table.component.html',
  styleUrls: ['./providers-table.component.css']
})
export class ProvidersTableComponent implements OnInit {
  providers: Provider[] = [];

  constructor(private providersService: ProvidersService) { }

  ngOnInit(): void {
    this.providersService.getProviders().subscribe((data: Provider[]) => {
      this.providers = data;
    });
  }

  deleteProvider(cif: string): void {
    this.providersService.deleteProvider(cif).subscribe(() => {
      this.providers = this.providers.filter(provider => provider.cif !== cif);
    });
  }
}
