function ocrDivideInputFile(fileAsString) { //Input is a string read from file. Outputs an array of entries, where each entry is an array of 3 strings of 27 characters each.
	var rawLines = fileAsString.split(/\r?\n/);
	if (rawLines.length % 4 != 0) throw "Misshapen input. File has "+rawLines.length+". Expecting a multiple of 4.";
	var resultLines = [];
	for (var i=0; i < rawLines.length; i += 4) {
		var entry = [];
		for (var j=0; j < 4; j++) {
			if (rawLines[i+j].length != 27) throw "Misshapen input. Line "+(i+j)+" has "+rawLines[i+j].length+" characters. Expecting 27. ("+rawLines[i+j]+")";
			if (j == 3) {
				if (rawLines[i+j] != '                           ') throw "Bad input. Line "+(i+j)+" was expected to be blank, but instead had:"+rawLines[i+j];
			} else {
				entry.push(rawLines[i+j]);
			}
		}
		resultLines.push(entry);
	}
	return resultLines;
}

function ocrDivideScannedEntry(scannedEntry) { //Input consists of an array of 3 strings of 27 characters each. Outputs array of 9 strings, corresponding to scanned characters.
	var resultCharacters = [];
	for (var i=0; i < 9; i++) {
		resultCharacters.push("");
	}
	return resultCharacters;
}