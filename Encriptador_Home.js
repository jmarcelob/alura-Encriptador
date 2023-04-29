function encript() {
	const text_input = document.getElementById('Texto').value;
	const rules ={
		'e': 'enter',
		'i': 'imes',
		'a': 'ai',
		'o': 'ober',
		'u': 'ufat'
	};

	let text_encript = text_input.replace(/[eiaou]/g, m => rules[m]);

	/*prompt(text_encript);*/

	localStorage.setItem("text", text_encript);

	return;
}

function desencript() {
	const text_input = document.getElementById('Texto').value;
	const rules ={
		enter: "e",
		imes: "i",
		ai: "a",
		ober: "o",
		ufat: "u"
	};

	let text_desencript = text_input.replace(/enter|imes|ai|ober|ufat/gi, m => rules[m]);

	/*prompt(text_desencript);*/

	localStorage.setItem("text", text_desencript);

	return;
}

function Copy() {
	// Get the text field
	var copyText = document.getElementById("Texto-Desencriptado");
  
	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices
  
	 // Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
  
	// Alert the copied text
	alert("El texto ha sido copiado");
  }