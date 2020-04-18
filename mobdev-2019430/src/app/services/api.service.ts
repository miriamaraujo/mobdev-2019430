import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  constructor(private http: HttpClient) { }
 
  getEpisodes() {
    return this.http.get('https://breakingbadapi.com/episodes');
  }
 
  getEpisode(id) {
    return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
  }

  getCharacters() {
    return this.http.get('https://breakingbadapi.com/characters');
  }
 
  getCharacter(id) {
    return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
  }
}