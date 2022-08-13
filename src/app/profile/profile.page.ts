import { Component, OnInit } from '@angular/core';
import { Profile } from '@core/models/profile.model';
import { ProfilesService } from '@core/services/profiles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public titlePage: string;
  public profileId: number;
  public profileData: Profile;

  constructor(
    private profileService: ProfilesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titlePage = 'Profile';
    this.profileId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.profileData = this.profileService.getProfile(this.profileId);
  }

}
