var express = require("express");

// Needed to parse the request body
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");

var lower=1;
var upper=3;
var option=Math.floor(lower+(Math.random()*(upper-lower+1)));



if(option==1){
	var soption="rock";
}

else if(option==2){
	var soption="paper";
}

else{
	var soption="scissor";
}


// Handles the sending of the index
app.get("/", function(req, res){
	
	res.sendFile(__dirname + "/homepg.html");
	
});
 
// Handles the form

  app.post("/myaction", function(req, res, next) {
	  
	var coption=req.body.select;
	
	next();
});
	  
	  
   app.use("/myaction", function(req, res, next) {
	  
   var cwin=0;
    var swin=0;
    var result=null;
    var x=0;
  
  if(coption===soption){
	  result="draw";
	  x=x+1;
	 
  }
   //rock beats scissor
  //scissor beats paper
  //paper beats rock
  
  else if(coption==="rock"&& soption==="scissor"){
	 
	  
	 cwin=cwin+1;
	  
  }
  else if(soption==="scissor"&& soption==="rock"){
	 
	  
	  swin=swin+1;
     }
     else if(coption==="scissor"&& soption==="paper"){
	  
	  cwin=cwin+1;
  }
  else if(soption==="paper"&& soption==="scissor"){
	  swin=swin+1;
     }
     
     else if(coption==="paper"&& soption==="rock"){
	  cwin=cwin+1;
     }
     else if(soption==="rock" && soption==="paper"){
	  swin=swin+1;
     }
     
     next();
  

});


app.get("/myaction", function(req, res) {
	
	
	
	if(cwin>swin){
		result="You win";
		x=x+cwin;
	}
	else{
		   result="server wins";
			x=x+swin;
		}
		
		var output=[cwin, swin, "coption", "soption", "result", x];
	
	res.render("profile", output);
	
});

app.listen(3000);


