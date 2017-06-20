import { Component, OnInit } from '@angular/core';
import { CodeConverterService } from "app/code-converter.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  oldCode: string;
  newCode: string;
  constructor(private codeConverterService: CodeConverterService) {

  }

  ngOnInit() {
    this.oldCode = `<tr ng-repeat="movie in vm.movies">
  <td>{{movie.title}}</td>
</tr>`;
  }

  convert() {
    this.newCode = this.codeConverterService.convert(this.oldCode);
  }
}
