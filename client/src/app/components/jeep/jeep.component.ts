import { Component, OnInit, Output, Input } from "@angular/core";
import { Router, Data, ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-jeep",
  templateUrl: "./jeep.component.html",
  styleUrls: ["./jeep.component.css"]
})
export class JeepComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  public name: string = "";
  public surname: string = "";
  public color = false;
  public submit = true;
  public missingName = false;
  public missingSurname = false;

  constructor(public route: Router, public data: DataService, public activatedRoute:ActivatedRoute) {
    this.lottieConfig = {
      path: "../../../assets/animations/jeep/jeep.json",
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>console.log(params))
  }

  Login() {
    window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=773anx1suvcdkc&redirect_uri=http://localhost:4200/jeep&state=987654321&scope=r_basicprofile';
    }

  scroll(el) {
    if (this.name !== "" && this.surname !== "") el.scrollIntoView();
  }

  onNameChange(name: string) {
    this.name = name;
    this.name !== "" && this.surname !== ""
      ? (this.color = true)
      : (this.color = false);
    if (this.name !== "") this.missingName = false;
  }

  onSurnameChange(surname: string) {
    this.surname = surname;
    this.name !== "" && this.surname !== ""
      ? (this.color = true)
      : (this.color = false);
    if (this.surname !== "") this.missingSurname = false;
  }

  onConfirm() {
    if (this.name !== "" && this.surname !== "") {
      this.submit = false;
      this.data.addName(this.name, this.surname);
      this.play();
      setTimeout(() => {
        this.route.navigate(["/boarding"]);
      }, 3000);
    } else if (this.name == "" && this.surname == "") {
      this.missingName = true;
      this.missingSurname = true;
    } else if (this.surname == "") {
      this.missingSurname = true;
    } else if (this.name == "") {
      this.missingName = true;
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
}
