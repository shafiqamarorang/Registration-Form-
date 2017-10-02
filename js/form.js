$(document).ready(function() {
        if (!window.localStorage) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
            $("#return_form").submit(function(){
									setAllItems();
            });						
				}
});

	var setAllItems = function(){
	var newDate, itemId, formSave;
								
	newDate = new Date();
    itemId = newDate.getTime();
	formSave = {
        fname  		: $("input[name='firstname']").val(),
        lname 		: $("input[name='lastname']").val(),
        email		: $("input[name='email']").val(),
		passwd	 	: $("input[name='password']").val(),
        conf_passwd	: $("input[name='conf_password']").val(),
        profile		: $("input[name='profile']").val(),
        gender 		: $("input[name='gender']:checked").val(),
		birthday 	: $("input[name='birthday']").val(),
		nation	 	: $("select[name='nation']").val(),
        phone 	    : $("input[name='phone']").val(),
        					
		//industryInfo: $("input[name='industry_info']").attr('checked')
				};
						
	// turn data into JSON string
	localStorage.setItem( itemId, JSON.stringify(formSave));
	};