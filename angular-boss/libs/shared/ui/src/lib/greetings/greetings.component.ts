import { GreetingsService } from "@a-boss/data";
import { Greetings } from "@a-boss/domain";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-ui-greetings',
  template: `
    <p>
      {{ theGreeting.message }}
    </p>
  `,
  styles: []
})
export class GreetingsComponent implements OnInit {
  public theGreeting: Greetings = { message: 'Hello world' };
  constructor(private greetingsService: GreetingsService) { }
  public ngOnInit() {
    this.greetingsService.getGreetings$().subscribe(this.appendApiMessage)
  }
  private appendApiMessage = (apiGreetings: Greetings) =>
    (this.theGreeting.message += ' and ' + apiGreetings.message)
}
