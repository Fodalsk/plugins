$(function(){

//PLUGIN SOCIAL MEDIA
	$('#social-share').jsSocials({
		shares: ["twitter", "facebook", "linkedin", "whatsapp"]
	});

//PLUGIN MASK
	$('input[name=telefone]').mask('(99)99999-9999');
	$('input[name=data]').mask('99/99/9999')
	$('input[name=cep]').mask('99999-999');
	$('input[name=cpf]').mask('999.999.999-99')


});
