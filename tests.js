var errorCase0 = "This is not supposed to work!";
var errorCase1 = ''+
''+"\n"+
'| || || || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           ';
var errorCase2 = ''+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'| || || || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'   .           .           '+"\n"+
'                           '+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'                           ';
var errorCase3 = ''+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'| ||0|| || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           '+"\n"+
'                           '+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'                           ';

var useCase0 = ''+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'| || || || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           ';

var useCase1 = ''+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'| || || || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           '+"\n"+
'                           '+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'                           '+"\n"+
' _  _  _  _  _  _  _  _  _ '+"\n"+
' _| _| _| _| _| _| _| _| _|'+"\n"+
'|_ |_ |_ |_ |_ |_ |_ |_ |_ '+"\n"+
'                           '+"\n"+
' _  _  _  _  _  _  _  _  _ '+"\n"+
' _| _| _| _| _| _| _| _| _|'+"\n"+
' _| _| _| _| _| _| _| _| _|'+"\n"+
'                           '+"\n"+
'                           '+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'                           '+"\n"+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'|_ |_ |_ |_ |_ |_ |_ |_ |_ '+"\n"+
' _| _| _| _| _| _| _| _| _|'+"\n"+
'                           '+"\n"+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'|_ |_ |_ |_ |_ |_ |_ |_ |_ '+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           '+"\n"+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'                           '+"\n"+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           '+"\n"+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
' _| _| _| _| _| _| _| _| _|'+"\n"+
'                           ';
var useCase2 = ''+
' _| _  _  _  _  _  _  _  _ '+"\n"+
'| || || || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           '+"\n"+
'                           '+"\n"+
'  | _|  |  |  |  |  |  |  |'+"\n"+
'  |  |  |  |  |  |  |  |  |'+"\n"+
'                           ';


QUnit.test("Rejects misshapen input", function( assert ) {
	assert.throws(function(){
		ocrDivideInputFile(errorCase0);
	}, "Error Case 0 Passed!");
	assert.throws(function(){
		ocrDivideInputFile(errorCase1);
	}, "Error Case 1 Passed!");
});

QUnit.test("Accepts well-shaped input", function( assert ) {
	assert.ok(ocrDivideInputFile(useCase0) != null, "Use Case 0 Passed!");
	assert.ok(ocrDivideInputFile(useCase1) != null, "Use Case 1 Passed!");
});

QUnit.test("Rejects files without blank lines", function( assert ) {
	assert.throws(function(){
		ocrDivideInputFile(errorCase2);
	}, "Error Case 2 Passed!");
});

QUnit.test("Recieve 9 characters from simple input", function( assert ) {
	assert.ok( ocrDivideScannedEntry(ocrDivideInputFile(useCase0)[0]).length == 9 , "Use Case 0 Passed!");
});

QUnit.test("Recieve all 0 characters from 000000000 input", function( assert ) {
	var scannedCharacters = ocrDivideScannedEntry(ocrDivideInputFile(useCase0)[0]);
	for (var i in scannedCharacters) {
		assert.ok( ocrParseCharacter(scannedCharacters[i]) == '0' , "Character "+i+" recognized as 0!");
	}
});

QUnit.test("Rejects inputs with nonstandard (e.g. not space, underscore or pipe) characters.", function( assert ) {
	assert.throws(function(){
		var scannedCharacters = ocrDivideScannedEntry(ocrDivideInputFile(errorCase3)[0]);
		for (var i in scannedCharacters) {
			ocrParseCharacter(scannedCharacters[i]);
		}
	}, "Error Case 3 Passed!");
});

QUnit.test("Recieve all same characters from Use Case 1 input", function( assert ) {
	var scannedCharacters = ocrDivideScannedEntry(ocrDivideInputFile(useCase0)[0]);
	var targetCharacter = '?';
	for (var i in scannedCharacters) {
		if (i == 0) {
			targetCharacter = ocrParseCharacter(scannedCharacters[i]);
		} else {
			assert.ok( ocrParseCharacter(scannedCharacters[i]) == targetCharacter , "Character "+i+" recognized as "+targetCharacter+"!");
		}
	}
});

QUnit.test("Recieve all 1 characters from 111111111 input", function( assert ) {
	var scannedCharacters = ocrDivideScannedEntry(ocrDivideInputFile(useCase1)[1]);
	for (var i in scannedCharacters) {
		assert.ok( ocrParseCharacter(scannedCharacters[i]) == '1' , "Character "+i+" recognized as 1!");
	}
});

QUnit.test("Gives ?s for input characters that don't exactly match", function( assert ) {
	var entries = ocrDivideInputFile(useCase2);
	
	var scannedCharacters1 = ocrDivideScannedEntry(entries[0]); //Should have a goof on character 0
	for (var i in scannedCharacters1) {
		if (i == 0) {
			assert.ok( ocrParseCharacter(scannedCharacters1[i]) == '?' , "Character "+i+" recognized as ?");
		} else {
			assert.ok( ocrParseCharacter(scannedCharacters1[i]) == '0' , "Character "+i+" recognized as 0!");
		}
	}
	var scannedCharacters2 = ocrDivideScannedEntry(entries[1]); //Should have a goof on character 1
	for (var i in scannedCharacters2) {
		if (i == 1) {
			assert.ok( ocrParseCharacter(scannedCharacters2[i]) == '?' , "Character "+i+" recognized as ?");
		} else {
			assert.ok( ocrParseCharacter(scannedCharacters2[i]) == '1' , "Character "+i+" recognized as 1!");
		}
	}
});