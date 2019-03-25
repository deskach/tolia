import {Component, OnInit} from '@angular/core'
import {mappedCourses, services, skills} from './constants'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public year = (new Date()).getFullYear()
  public courses = mappedCourses
  public years = Object.keys(this.courses).sort().reverse()
  public skills = skills
  public services = services

  constructor() {
  }

  ngOnInit() {
  }

}
