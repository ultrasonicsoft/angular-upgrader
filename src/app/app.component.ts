import { Component } from '@angular/core';
import { CodeConverterService } from "app/converter/code-converter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  oldCode: string;
  newCode: string;
  constructor(private codeConverterService: CodeConverterService) {

  }

  ngOnInit() {
    this.oldCode = ``;
  }

  convert() {
    this.newCode = this.codeConverterService.convert(this.oldCode);
  }

  copy() {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", this.newCode);
  }

}
