import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: 'like.component.html',
  styleUrls: [ './like.component.css' ]
})
export class LikeComponent  {
  isliked = false;
  
  likeButtonClick() {
    this.isliked = true ;
  }

  dislikeButtonClick() {
    this.isliked;
  }
}