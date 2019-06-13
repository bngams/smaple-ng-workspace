import { Resource } from './resource';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ResourceService<I, T extends Resource<I>> {

  constructor(
    private API_BASE_URL: string,
    private httpClient: HttpClient,
    private endpoint: string
  ) { }

  list(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.API_BASE_URL}/${this.endpoint}`);
  }

  create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.API_BASE_URL}/${this.endpoint}`, item);
  }

  update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.API_BASE_URL}/${this.endpoint}/${item.id}`, item);
  }

  get(id: I): Observable<T> {
    return this.httpClient.get<T>(`${this.API_BASE_URL}/${this.endpoint}/${id}`);
  }

  delete(id: I) {
    return this.httpClient.delete(`${this.API_BASE_URL}/${this.endpoint}/${id}`);
  }

}
