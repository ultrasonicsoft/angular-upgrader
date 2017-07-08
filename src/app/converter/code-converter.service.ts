import { Injectable } from '@angular/core';
import { OldKeywords } from "app/converter/keywords";
import { Converter } from "app/converter/converter";

@Injectable()
export class CodeConverterService {

  constructor() {
    //    console.log("Code converter service initailized...");
  }

  convert(oldCode: string): string {
    let convertedCode: string = "";
    let allLines = oldCode.split('\n');

    let convertedLines = new Array<string>();

    allLines.forEach(line => {
      let result = line;

      //ng-repeat
      if (line.includes(OldKeywords.NG_REPEAT)) {
        result = Converter.convertNgRepeat(line);
      }
      //ng-limit-to
      if (line.includes(OldKeywords.NG_LimitTo)) {
        result = Converter.convertNgLimitTo(line);
      }
      //ng-class
      else if (line.includes(OldKeywords.NG_CLASS)) {
        result = Converter.convertNgClass(line);
      }
      //ng-click
      else if (line.includes(OldKeywords.NG_CLICK)) {
        result = Converter.convertNgClick(line);
      }
      //ng-href
      else if (line.includes(OldKeywords.NG_HREF)) {
        result = Converter.convertNgHref(line);
      }
      //ng-if
      else if (line.includes(OldKeywords.NG_IF)) {
        result = Converter.convertNgIf(line);
      }
      //ng-model
      else if (line.includes(OldKeywords.NG_MODEL)) {
        result = Converter.convertNgModel(line);
      }
      //ng-show
      else if (line.includes(OldKeywords.NG_SHOW)) {
        result = Converter.convertNgShow(line);
      }
      //ng-src
      else if (line.includes(OldKeywords.NG_SRC)) {
        result = Converter.convertNgSrc(line);
      }
      //ng-style
      else if (line.includes(OldKeywords.NG_STYLE)) {
        result = Converter.convertNgStyle(line);
      }
      //ng-switch
      else if (line.includes(OldKeywords.NG_SWITCH)) {
        result = Converter.convertNgSwitch(line);
      }
      //ng-switch-when
      if (line.includes(OldKeywords.NG_SWITCH_WHEN)) {
        result = Converter.convertNgSwitchWhen(line);
      }
      //ng-switch-default
      if (line.includes(OldKeywords.NG_SWITCH_DEFAULT)) {
        result = Converter.convertNgSwitchDefault(line);
      }
      convertedCode += result + "\n";
    });
    return convertedCode;
  }
}

