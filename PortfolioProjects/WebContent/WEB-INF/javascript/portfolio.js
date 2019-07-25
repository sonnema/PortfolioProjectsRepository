var subject = 'Client Enquiry Mail';
var formData;
$(document).ready(function(){
  
	$('.navbar-nav a').click(function(){
		$('.navbar-collapse').collapse('hide');
	});

	$('.detailsClose').click(function(){
		$(this).parent().collapse('hide');
	});
	
	$( "#ContactNav" ).click(function() {
		$(function () {
			$("#name").focus();
		});
	});
//End of (document).ready function  
});
  
 