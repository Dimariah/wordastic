const input = document.querySelector('.input');
const container = document.querySelector('.cont');
const btn = document.querySelector('.gen');
input.addEventListener('keypress', (key) => {
	key.preventDefault();
})
const words = ['babe', 'smooth', 'cycle', 'orange', 'max', 'cattle', 'horn', 'scooby', 'washington', 'dilemma', 'casco', 'barny', 'ben'];
const length = words.length
input.max = length;
btn.addEventListener('click', () => {
	container.innerHTML = '';
	const uni = [];
	for (i=0; i<input.value; i++) {
		function no_repeat_words() {
			const random = Math.floor(Math.random() * length);
			let word = words[random];
			if (uni.includes(word)) {
				no_repeat_words();
			}else {
				uni.push(word);
			}
		}
		no_repeat_words();
	}
	function display_uni() {
			const li = document.createElement('li');
			li.textContent = uni.join(' ');
			container.appendChild(li);
	}
	display_uni();
})