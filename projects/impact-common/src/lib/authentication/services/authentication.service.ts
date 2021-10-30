import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  /**
   * login
   * @param params body
   * @returns loggedIn user
   */
  login(params: any) {
    return this.http.post('/login', params).pipe(map((user) => user));
  }

  /**
   * register a user
   * @param params body
   * @returns new user
   */
  register(params: any) {
    return this.http.post('/register', params);
  }

  /**
   * set current user
   * @param user user object
   */
  setCurrentUser(user: any) {
    const currentUser = JSON.stringify(user);
    localStorage.setItem('currentUser', currentUser);
  }

  /** get current user
   *
   */
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  /**
   * set registered user
   * @returns registered-users
   */
  getRegisteredUser() {
    return JSON.parse(localStorage.getItem('registered-users'));
  }

  /**
   * remove current user
   * @returns currentuser
   */
  removeCurrentUser() {
    return localStorage.removeItem('currentUser');
  }

  /**
   * update profile
   * @param params body
   * @returns updated profile
   */
  updateUserProfile(params: any) {
    return this.http.post('/updateProfile', params);
  }

  /**
   * create notification
   * @param params body
   * @returns new notification
   */
  sendNotifications(params: any) {
    return this.http.post('/sendNotification', params);
  }

  /**
   * get notifications
   * @returns notifications
   */
  getNotifications() {
    return this.http.get('/notifications');
  }

  /**
   * delete notification
   * @param params body
   * @returns notifications
   */
  deleteNotification(params: any) {
    return this.http.post('/deleteMessage', params);
  }
}
