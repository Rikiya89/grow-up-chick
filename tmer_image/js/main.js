'use strict';
{
    const balloon = document.querySelector('#balloon');
    const count = document.querySelector('#count');

    let size = 100;
    let i = 0;

    function bigger() {
        size += 10;

        balloon.style.width = `${size}px`
        balloon.style.height = `${size}px`
        i++;
        count.textContent = i;
        const timeoutId = setTimeout(bigger, 1000);

        if (i > 9) {
            clearInterval(timeoutId);
        }

    }
    bigger();
}