var errorCase0 = "This is not supposed to work!";
var errorCase1 = ''+
''+"\n"+
'| || || || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
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