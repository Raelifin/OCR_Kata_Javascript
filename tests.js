var errorCase1 = " This is not supposed to work!";

var useCase1 = "\
 _  _  _  _  _  _  _  _  _ \
| || || || || || || || || |\
|_||_||_||_||_||_||_||_||_|\
                           ";
						   
useCase1 = useCase1.substring(1,useCase1.length); //Trim the initial newlines. (Which are added for ease of reading source code.)

QUnit.test("Rejects misshapen input", function( assert ) {
	assert.throws(function(){
		ocrDivideInputFile(errorCase1);
	}, "Passed!");
});