import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css']
})
export class BoardingComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed = 1;
  public campus;
  public selectedValue = '';
  public color = false;
  public submit = true;
  public missingSelect = false;
  public missingCity = false;
  public name = '';

  constructor(public router: Router, public route: ActivatedRoute, public data: DataService) {
    this.lottieConfig = {
      path: '../../../assets/animations/boarding/boarding.json',
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {
    this.name = this.data.getData().name;
    this.data.getCampus().subscribe(res => this.campus = res);
  }

  scroll(el) {
    if (this.selectedValue !== '') {el.scrollIntoView(); }
}

  onConfirm() {
    if (this.selectedValue !== '') {
      this.submit = false;
      this.play();
      setTimeout(() => {
        this.router.navigate(['/handButton']);
      }, 4700);
    } else {
      this.missingSelect = true;
      this.missingCity = true;
    }
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }

  toggleOptList(select) {
    const optList = select.querySelector('.optList');
    optList.classList.toggle('hidden');
  }

  setAttributeToList(course) {
    const value = document.querySelector('.value');
    value.innerHTML = course;
    this.color = true;
    this.missingSelect = false;
    this.missingCity = false;
    this.selectedValue = course;
    this.data.addCity(this.selectedValue);
  }
}
