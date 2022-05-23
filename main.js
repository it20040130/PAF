$(document).ready(function() 
{ 
 	$("#alertSuccess").hide(); 
 	$("#alertError").hide(); 
}); 

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
	// Clear status msges-------------
 	$("#alertSuccess").text(""); 
 	$("#alertSuccess").hide(); 
 	$("#alertError").text(""); 
 	$("#alertError").hide(); 
 	
	// Form validation----------------
	var status = validatePaymentForm(); 
	
	// If not valid-------------------
	if (status != true) 
 	{ 
 		$("#alertError").text(status); 
 		$("#alertError").show(); 
 		return; 
 	} 
 	
	// If valid----------------------
	var payment = getPayment($("#txtAccNumber").val().trim(), 
 	$("#DateOfPayment").val());
 	$("#Amount").val());
 	$("#TypeOfPayment").val());

 	$("#colPayments").append(payment); 
 
 	$("#alertSuccess").text("Saved successfully."); 
 	$("#alertSuccess").show(); 
 
 	$("#formPayment")[0].reset(); 
}); 

// REMOVE==========================================
$(document).on("click", ".remove", function(event) 
{ 
 	$(this).closest(".payment").remove(); 
 
 	$("#alertSuccess").text("Removed successfully."); 
 	$("#alertSuccess").show(); 
}); 

// CLIENT-MODEL=================================================================
function validateItemForm() 
{ 
	// ACCOUNT NO
	if ($("#txtAccNumber").val().trim() == "") 
 	{ 
 		return "Insert Account No."; 
 	} 
 	
	// DATE OF PAYMENT
	if ($("#DateOfPayment").val() == "0") 
 	{ 
 		return "Select Date Of Payment."; 
 	} 
 	
	// AMOUNT
	if ($("#Amount").val() == "0") 
 	{ 
 		return "Select Amount."; 
 	} 
 	
 	// TYPE OF PAYMENT
	if ($("#TypeOfPayment").val() == "0") 
 	{ 
 		return "Select Type Of Payment."; 
 	} 
 	
	return true; 
} 

 
 	var payment = ""; 
 	payment += "<div class=\"payment card bg-light m-2\" 
 				style=\"max-width: 10rem; float: left;\">"; 
 	payment += "<div class=\"card-body\">"; 
 	payment += title + " " + DateOfPayment + ","; 
 	payment += "<br>"; 
 	payment += Amount + " Amount"; 
 	payment += "<br>";
 	payment += TypeOfPayment + " TypeOfPayment";
 	payment += "</div>"; 
 	payment += "<input type=\"button\" value=\"Remove\" 
 			class=\"btn btn-danger remove\">"; 
 	payment += "</div>"; 
 	
	return payment; 
}
