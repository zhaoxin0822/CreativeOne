$(document).ready(function(){
        var submitButton = $("#submitButton"); // this is just to check the submit
        console.log(submitButton); // return the submmit button
        
        $("#submitButton").click(function(e) {
    	e.preventDefault();

        var myurl= "https://api.nasa.gov/planetary/apod?api_key=x7Lm8H40UCnx6fLQO0w6KCaSjl6dUiyWldo3Vb9I";
     	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		console.log(json);
		var results = "";
		results += "<hr/>";
		results += '<img src="'+json.url+'" width = 600>';
		results += "<hr/>";
		results += "<h2>" +json.title+ "</h2>";
		results += "<hr/>";
		results += json.date;
		results += "<hr/>";
		results += json.explanation;
		results += "<hr/>";
		$("#submitResults").html(results);
	    }
	    });
    });
});
