const buttonStart = document.getElementById("submit");

buttonStart.addEventListener( "click", (e) => {
	const s = parseInt(document.getElementById("sensitivity").value);
	const pc = parseInt(document.getElementById("currentPower").value) || 1;
	const spl = parseInt(document.getElementById("spl").value);
	const d = parseInt(document.getElementById("distance").value);
	
	// Log base 10 of the distance
	const logOfDistance = Math.log10(d);
	
	const exponent = ((spl-s+20*logOfDistance)/(10));
	
	// input power
	const p = Math.pow(10, exponent);
	
	const amplify = p/pc;
	
	document.getElementById("amplify").innerText = `You need to amplify by a factor of: ${amplify.toFixed(2)}`;
});




