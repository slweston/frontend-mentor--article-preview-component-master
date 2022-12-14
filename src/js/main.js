(() => {
	const mainGrid = document.querySelector('.main-grid');
	const authorCardShareButton = document.querySelector('.author-card__share-button');
	authorCardShareButton.addEventListener('click', (e) => {
		e.preventDefault();
		if (mainGrid.classList.contains('expanded-social-media')) {
			mainGrid.classList.remove('expanded-social-media');
		} else {
			mainGrid.classList.add('expanded-social-media');
		}
	});

	const socialMediaShareButton = document.querySelector('.social-media__share-button');
	socialMediaShareButton.addEventListener('click', (e) => {
		e.preventDefault();
		mainGrid.classList.remove('expanded-social-media');
	});
})();