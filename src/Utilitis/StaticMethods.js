
export class StaticMethods {
  static getTwoDecimalPlacesString(number = 0) {
    var numberString = number?.toString();
    if (numberString?.length > 1 && number - Math?.floor(number) !== 0) {
      // Decimal is present. Split by decimal
      var splittedStrings = numberString.split('.');
      if (splittedStrings[1]?.length > 2) {
        // Here's the case we handle to number not to round off.
        return splittedStrings[0] + '.' + splittedStrings[1]?.substring(0, 2);
      } else {
        return number?.toFixed(2);
      }
    } else {
      return number?.toFixed(2);
    }
  }
}
