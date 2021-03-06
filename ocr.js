/**
 * Chops an input file into lines.
 * @param {string} fileAsString Full file text as a single string.
 * @return {array} An array of entries, where an entry is an array of 3 strings of length 27.
 */
function ocrDivideInputFile(fileAsString) {
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

/**
 * Breaks an entry into an array of scanned characters.
 * @param {array} scannedEntry Array of 3 strings of length 27.
 * @return {array} Array of 9 strings of length 9.
 */
function ocrDivideScannedEntry(scannedEntry) {
	var resultCharacters = [];
	for (var i=0; i < 9; i++) {
		resultCharacters.push(scannedEntry[0].substring(i*3,(i+1)*3)+scannedEntry[1].substring(i*3,(i+1)*3)+scannedEntry[2].substring(i*3,(i+1)*3));
	}
	return resultCharacters;
}

/**
 * Translates a digit into a scanned character.
 * @param {number} digit Target character, between 0 and 9.
 * @return {array} String of length 9 representing the character as ideally seen by the ocr system.
 */
function ocrGenerateOpticalCharacterFromDigit(digit) {
	digit = parseInt(digit); //Safely handle non-numerical input.
	switch (digit) {
		case 0:
			return ' _ '+'| |'+'|_|';
		case 1:
			return '   '+'  |'+'  |';
		case 2:
			return ' _ '+' _|'+'|_ ';
		case 3:
			return ' _ '+' _|'+' _|';
		case 4:
			return '   '+'|_|'+'  |';
		case 5:
			return ' _ '+'|_ '+' _|';
		case 6:
			return ' _ '+'|_ '+'|_|';
		case 7:
			return ' _ '+'  |'+'  |';
		case 8:
			return ' _ '+'|_|'+'|_|';
		case 9:
			return ' _ '+'|_|'+' _|';
		default:
			throw 'No ocr character found for input:'+digit;
	}
}

/**
 * Attempts to parse a scanned character into an digit.
 * @param {string} Input of length 9. First three characters are the top of the scanned character, the next three are the middle, and the last three are the bottom.
 * @return {string} A single digit between 0 and 9, or a ? if the input does not match a known digit.
 */
function ocrParseCharacter(rawCharacter) {
	if (rawCharacter.match(/[^\s_|]/g)) throw "Bad input. Contains a character besides space, pipe, and underscore.";
	for (var i=0; i <= 9; i++) {
		if (ocrGenerateOpticalCharacterFromDigit(i) == rawCharacter) {
			return ''+i;
		}
	}
	return '?';
}