import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
 
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
 
  episodeId = null;
 
  constructor(private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
  }
 
}