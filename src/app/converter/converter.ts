
import { OldKeywords, NewKeywords } from "app/converter/keywords";

export class Converter {
    static convertNgRepeat(line: string): string {
        let startIndex = line.indexOf(OldKeywords.NG_REPEAT);
        let startQuoteIndex = line.indexOf('\"', startIndex)
        let endQuoteIndex = line.indexOf('\"', startQuoteIndex + 1)

        let ngRepeatPart = line.substr(startIndex, (endQuoteIndex - startIndex) + 1);

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

    static convertNgClass(line: string): string {
        line = line.replace(OldKeywords.NG_CLASS, NewKeywords.NG_CLASS);
        return line;
    }

    static convertNgClick(line: string): string {
        line = line.replace(OldKeywords.NG_CLICK, NewKeywords.NG_CLICK);
        return line;
    }

    static convertNgHref(line: string): string {
        line = line.replace(OldKeywords.NG_HREF, NewKeywords.NG_HREF);
        return line;
    }

    static convertNgIf(line: string): string {
        line = line.replace(OldKeywords.NG_IF, NewKeywords.NG_IF);
        return line;
    }

    static convertNgModel(line: string): string {
        line = line.replace(OldKeywords.NG_MODEL, NewKeywords.NG_MODEL);
        return line;
    }

    static convertNgShow(line: string): string {

        let parts = line.split('=');
        for (let index = 0; index < parts.length; index++) {
            if (parts[index].indexOf(OldKeywords.NG_SHOW) > 0) {
                parts[index + 1] = "\"!" + parts[index + 1].substr(1);
                break;
            }
        }

        let result = parts.join('=');
        result = result.replace(OldKeywords.NG_SHOW, NewKeywords.NG_SHOW);

        return result;
    }

    static convertNgSrc(line: string): string {
        line = line.replace(OldKeywords.NG_SRC, NewKeywords.NG_SRC);
        return line;
    }

    static convertNgStyle(line: string): string {
        line = line.replace(OldKeywords.NG_STYLE, NewKeywords.NG_STYLE);
        return line;
    }
    static convertNgSwitch(line: string): string {
        line = line.replace(/\bng-switch\b/gi, NewKeywords.NG_SWITCH);
        return line;
    }
    static convertNgSwitchWhen(line: string): string {
        line = line.replace(/\bng-switch-when\b/gi, NewKeywords.NG_SWITCH_WHEN);
        return line;
    }
    static convertNgSwitchDefault(line: string): string {
        line = line.replace(/\bng-switch-default\b/gi, NewKeywords.NG_SWITCH_DEFAULT);
        return line;
    }

    static convertNgLimitTo(line: string): string {
        line = line.replace(OldKeywords.NG_REPEAT, NewKeywords.NG_REPEAT);
        let parts = line.split("in");
        let firstParts = parts[0].split('\"');
        let variable = "let " + firstParts[firstParts.length - 1];

        let secondParts = parts[1].split('\"');
        let source = " of ";

        let result = firstParts[0] + "\"" + variable + " of " + parts[parts.length - 1];
        result = result.replace(OldKeywords.NG_LimitTo, NewKeywords.NG_LimitTo);

        parts = result.split(':');
        let quoteParts = parts[parts.length - 1].split('\"');

        let temp = quoteParts[0];
        parts[parts.length - 1] = parts[parts.length - 2];
        parts[parts.length - 2] = temp;
        result = parts.join(':');
        result += "\">"
        return result;
    }
}