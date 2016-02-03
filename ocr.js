function ocrDivideInputFile(fileAsString) {
	var rawLines = fileAsString.split(/\r?\n/);
	if (rawLines.length % 4 != 0) throw "Misshapen input. File has "+rawLines.length+". Expecting a multiple of 4.";
	var resultLines = [];
	for (var i=0; i < rawLines.length; i += 4) {
		var resultLine = [];
		for (var j=0; j < 4; j++) {
			if (rawLines[i+j].length != 27) throw "Misshapen input. Line "+(i+j)+" has "+rawLines[i+j].length+" characters. Expecting 27. ("+rawLines[i+j]+")";
			if (j == 3) {
				if (rawLines[i+j] != '                           ') throw "Bad input. Line "+(i+j)+" was expected to be blank, but instead had:"+rawLines[i+j];
			} else {
				resultLine.push(rawLines[i+j]);
			}
		}
		resultLines.push(resultLine);
	}
	return resultLines;
}