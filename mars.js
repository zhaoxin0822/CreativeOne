$(document).ready(function(){
        var submitButton = $("#submitButton"); // this is just to check the submit
        console.log(submitButton); // return the submmit button
        
        $("#submitButton").click(function(e) {
    	e.preventDefault();
    	
    	var value = $("#dateInput").val();

        var myurl= "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+value+"&api_key=x7Lm8H40UCnx6fLQO0w6KCaSjl6dUiyWldo3Vb9I";
     	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		console.log(json);
		var results = "";
		const searchResult = json.photos;
	    item = searchResult[0];
	       results += "<p>you are receiving this picture from " + item.rover.name; +"</p>";
	       results += "<p>the landing date is " + item.rover.landing_date + " and launched on " + item.rover.launch_date + "</p>";
	       results += "<hr/>";
		   results += '<img src="'+item.img_src+'" width = 600>';
		   results += "<hr/>";
		    $("#submitResults").html(results);
	    }
	    });
    });
});
