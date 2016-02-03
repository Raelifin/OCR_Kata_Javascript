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
		assert.ok( ocrParseCharacter(scannedCharacters[i]) == 0 , "Character "+i+" recognized as 0!");
	}
});