import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs';
import { APP_CONFIG, AppConfig } from '@digi/web/shared/app-config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    lang: localStorage.getItem('lang') === 'en' ? 'en' : 'vi'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

  get<T>(url: string, params: HttpParams) {
    return this.http.get<T>(this.appConfig.apiUrl + url, { ...httpOptions, params });
  }

  post<T, P>(url: string, bodyData: P | null = null) {
    return this.http.post<T>(this.appConfig.apiUrl + url, bodyData, httpOptions);
  }

  put<T, P>(url: string, bodyData: P | null = null) {
    return this.http.put<T>(this.appConfig.apiUrl + url, bodyData, httpOptions);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(this.appConfig.apiUrl + url, httpOptions);
  }

  deleteWithBody<T, P>(url: string, bodyData: P | null = null) {
    return this.http.delete<T>(this.appConfig.apiUrl + url, { ...httpOptions, body: bodyData });
  }

  getResponse<T>(url: string) {
    return this.http.get<T>(this.appConfig.apiUrl + url, { ...httpOptions, observe: 'response' });
  }

  getWithRetry<T>(url: string, retryNumber: number) {
    return this.http.get<T>(this.appConfig.apiUrl + url, httpOptions).pipe(retry(retryNumber));
  }
}
