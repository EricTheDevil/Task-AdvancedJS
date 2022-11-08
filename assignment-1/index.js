const counterContainer = document.querySelector('.counter');
const counterStarter = document.querySelector('.counterStarter');

let startTime = performance.now();

// refresh UI so it doesn't freeze
// feel like web worker would be 
async function refresh() {
	if (performance.now() > startTime + 30) {
		startTime = performance.now();
		await new Promise((r) => setTimeout(r, 0));
	}
}
// disable button while we wait for the return
async function call() {
	counterStarter.setAttribute('disabled', true);
	for (let i = 0; i < 100000000; i++) {
		console.log(i);
		counterContainer.innerHTML = i;
		await refresh();
	}
	return counterStarter.removeAttribute('disabled');
}
// alerts when we click on the button
function interrupt() {
	alert('Function called');
}
