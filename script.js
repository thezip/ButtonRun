const btn = document.getElementById('btnSale');

const random = (n) => Math.floor(Math.random() * n);

btn.onmouseover = (event) => {
	btn.style.position = 'absolute';
	btn.style.left = random(1600) + 'px';
	btn.style.top = random(800) + 'px';
	// alert(event.clientX + ':' + event.clientY);
}