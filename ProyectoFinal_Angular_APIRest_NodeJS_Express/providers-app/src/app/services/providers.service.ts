import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface  Provider {
  cif: string;
  name: string;
  activity: string;
  address: string;
  city: string;
  cp: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  private endpoint: string = 'http://localhost:3000/providers';

  constructor(private http: HttpClient) { }

  getProviders(): Observable<Provider[]> {
    return this.http.get(this.endpoint)
      .pipe(map((data: any) => data.providers));
  }

  getProviderByCif(cif: string): Observable<Provider> {
    return this.http.get<Provider>(`${this.endpoint}/${cif}`);
  }

  addProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(this.endpoint, provider);
  }

  updateProvider(cif: string, provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(`${this.endpoint}/${cif}`, provider);
  }

  deleteProvider(cif: string): Observable<Provider> {
    return this.http.delete<Provider>(`${this.endpoint}/${cif}`);
  }
}
