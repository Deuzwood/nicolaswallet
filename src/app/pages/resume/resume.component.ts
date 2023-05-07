import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  timeSpent: any = {
    sogeti: null,
    aae: null
  }

  constructor() { }

  ngOnInit(): void {
      this.timeSpent.sogeti = this.formatFrom(new Date('2022-04-01'));
      this.timeSpent.aae = this.formatFrom(new Date('2023-07-01'));
  }

  formatFrom(fromDate : Date): string {
    const now = new Date();
    const YEAR_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 365.25

    const diffTime = Math.abs(now.getTime() - fromDate.getTime());
    const diffYears = Math.floor(diffTime / YEAR_IN_MILLISECONDS);
    const diffMonths = Math.floor((diffTime % YEAR_IN_MILLISECONDS) / (1000 * 60 * 60 * 24 * 30));

    return `${diffYears 
      ? `${diffYears} an${diffYears > 1 ? 's' : ''} ${diffMonths ? 'et ' : '' }`
      : ''}${diffMonths ? `${diffMonths} mois` : ''}`
  }

}
