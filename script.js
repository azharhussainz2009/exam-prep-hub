const toast = document.querySelector('.toast');
let toastTimer;

function showToast(message) {
	toast.textContent = message;
	toast.classList.add('show');
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function startPreparing() {
	window.location.href = 'subjects.html';
}

document.querySelectorAll('.subject-card').forEach((card) => {
	card.addEventListener('click', () => {
		showToast(`${card.dataset.subject} resources are ready to explore.`);
	});
});

document.querySelector('#start-button').addEventListener('click', () => {
	startPreparing();
});

document.querySelector('#quiz-button').addEventListener('click', () => {
	showToast('Your quick quiz is being prepared. Good luck!');
});
