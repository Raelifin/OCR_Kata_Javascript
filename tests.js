var errorCase1 = "This is not supposed to work!";
var errorCase2 = ''+
''+"\n"+
'| || || || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           ';

var useCase1 = ''+
' _  _  _  _  _  _  _  _  _ '+"\n"+
'| || || || || || || || || |'+"\n"+
'|_||_||_||_||_||_||_||_||_|'+"\n"+
'                           ';


QUnit.test("Rejects misshapen input", function( assert ) {
	assert.throws(function(){
		ocrDivideInputFile(errorCase1);
	}, "Error Case 1 Passed!");
	assert.throws(function(){
		ocrDivideInputFile(errorCase2);
	}, "Error Case 2 Passed!");
});

QUnit.test("Accepts well-shaped input", function( assert ) {
	assert.ok(ocrDivideInputFile(useCase1) != null, "Passed!");
});