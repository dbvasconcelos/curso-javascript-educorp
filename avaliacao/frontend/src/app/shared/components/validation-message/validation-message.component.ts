import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html'
})
export class ValidationMessageComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit() {
  }

}
