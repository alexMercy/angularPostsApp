import {booleanAttribute, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() text!: string;
    @Input() type: 'primary' | 'default' = "default";
    @Input({transform: booleanAttribute}) danger = false;
    @Input() icon!: "sign-in" | "sign-out" | "log-in";

    class!:string

  ngOnInit(): void {
    this.class = `${this.type}${this.danger ? "-danger" : ""}`
  }
}
