// member.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberModel } from '../Models/member-model';
import { createMember } from '../Models/create-member-model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'https://localhost:5000';

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<MemberModel[]> {
    return this.http.get<MemberModel[]>(`${this.apiUrl}/api/member`);
  }

  getMemberById(id: string): Observable<MemberModel> {
    return this.http.get<MemberModel>(`${this.apiUrl}/api/member/${id}`);
  }

  createMember(newMember: createMember): Observable<createMember> {
    return this.http.post<createMember>(`${this.apiUrl}/api/member`, newMember);
  }

  updateMember(id: string, member: MemberModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/member/${id}`, member);
  }

  deleteMember(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/member/${id}`);
  }
}
