import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService {
  private apiUrl = 'http://localhost:8080/api/absences';

  constructor(private http: HttpClient) {}

  getAbsences(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createAbsence(absence: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, absence);
  }

  deleteAbsence(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
