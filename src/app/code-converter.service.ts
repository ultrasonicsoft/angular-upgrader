import { Injectable } from '@angular/core';

@Injectable()
export class CodeConverterService {

  constructor() {
    console.log("Code converter service initailized...");
  }

  convert(oldCode: string): string {
    let convertedCode: string = "";
    let allLines = oldCode.split('\n');

    let convertedLines = new Array<string>();

    allLines.forEach(line => {
      let result = line;
      if (line.includes(Keywords.NG_REPEAT)) {
        result = Converter.convertNgRepeat(line);
      }
      convertedCode += result + "\n";
    });
    return convertedCode;
  }
}

export class Converter {
  static convertNgRepeat(line: string): string {
    let startIndex = line.indexOf(Keywords.NG_REPEAT);
    let startQuoteIndex = line.indexOf('\"', startIndex)
    let endQuoteIndex = line.indexOf('\"', startQuoteIndex + 1)
    console.log(`startIndex ${startIndex} startQuoteIndex${startQuoteIndex} ${endQuoteIndex}`);

    let ngRepeatPart = line.substr(startIndex, (endQuoteIndex - startIndex) + 1);
    console.log(`ngRepeatPart: ${ngRepeatPart}`);

    let parts = ngRepeatPart.split('=');
    let expressionParts = parts[1].split(' ');
    let variableName = expressionParts[0];
    variableName = variableName.replace('\"', '');

    let dataSourceName = expressionParts[expressionParts.length - 1];
    dataSourceName = dataSourceName.replace('\"', '');

    if (dataSourceName.includes('.')) {
      let dataSourceParts = dataSourceName.split('.');
      dataSourceName = dataSourceParts[dataSourceParts.length - 1];
    }

    let ngForPart = "*ngFor=\"let {1} of {2}\"";
    ngForPart = ngForPart.replace("{1}", variableName);
    ngForPart = ngForPart.replace("{2}", dataSourceName);

    line = line.replace(ngRepeatPart, ngForPart);
    return line;
  }
}

export class Keywords {
  static NG_REPEAT = "ng-repeat";
}