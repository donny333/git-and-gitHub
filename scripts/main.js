document
    .querySelectorAll('#git li')
    .forEach(li => li.addEventListener('click', e => {
        console.log(e)
        const confetti = document.createElement('img');
        confetti.setAttribute('src', './images/confeti.gif');
        confetti.style.position = 'absolute';
        confetti.style.top = `${e.pageY}px`;
        confetti.style.left = `${e.pageY}px`;
        confetti.style.transform = `translate(-50%,-50%)`;
        confetti.style.zIndex = '-1';

        document.body.appendChild(confetti);
        setTimeout(() => {confetti.remove()}, 1900)
    }));