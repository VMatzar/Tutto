import { Component, OnInit } from '@angular/core';
import { Profile } from '@core/models/profile.model';
import { ProfilesService } from '@core/services/profiles.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public titlePage: string;
  public profileId: number;
  public profileData: Profile;

  public drivers: Profile[];

  constructor(
    private profileService: ProfilesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titlePage = 'Dashboard';
    this.profileId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.profileData = this.profileService.getProfile(this.profileId);

    this.drivers = this.profileService.getAllProfiles();
  }

}
