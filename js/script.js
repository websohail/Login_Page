$('.modeSwitch').click(function(){
	var value = $(this).val();
	if (value == 0) {
		$(this).val(1);
		$('.mode label').addClass('onswitch');
		$('.mode label').text('Light Mode');
		$('.mode label').css('color','#fff');
		$('.mainbody').css('background-color', '#000');
		$('.loginBox').css('background-color', '#101010');
		$('.username, .password').css('color','#fff');
		$('#exampleInputEmail1, #exampleInputPassword1').css('background-color', '#272727');
		$('#exampleInputEmail1, #exampleInputPassword1').css('border', '1px solid #333');
		$('#exampleInputEmail1').addClass('userinputDark').removeClass('userinput');
		$('#exampleInputPassword1').addClass('userinputDark').removeClass('userinput');
		$('.form-check-label').css('color','#fff');
		$('.forget-pass img').attr('src','images/lock-solidwhite.png');
		$('.signuptext').css('color','#E0E0E0');
		$('.orLogintext, .footerText').css('color','#fff');
		$('.footerText span img').attr('src','images/logowhite.png');
	}else{
		$(this).val(0);
		$('.mode label').removeClass('onswitch');
		$('.mode label').text('Dark Mode');
		$('.mode label').css('color','#333');
		$('.mainbody').css('background-color', '#F5F5F5');
		$('.loginBox').css('background-color', '#fff');
		$('.username, .password').css('color','#333');
		$('#exampleInputEmail1, #exampleInputPassword1').css('background-color', '#fff');
		$('#exampleInputEmail1, #exampleInputPassword1').css('border', '1px solid #939EAD80');
		$('#exampleInputEmail1').addClass('userinput').removeClass('userinputDark');
		$('#exampleInputPassword1').addClass('userinput').removeClass('userinputDark');
		$('.form-check-label').css('color','#333');
		$('.forget-pass img').attr('src','images/lock-solid.png');
		$('.signuptext').css('color','#999');
		$('.orLogintext, .footerText').css('color','#333');
		$('.footerText span img').attr('src','images/logo.png');
	}

});