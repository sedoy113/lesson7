window.addEventListener('DOMContentLoaded', function() {
	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}
	}
	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab' ) {
				for (let i = 0; i < tab.length; i++) {
					if (target == tab[i]) {
						showTabContent(i);
						break;
					}
				}
		};
	})
	
});

yoga.onclick = function() {
      animate(function(timePassed) {
        yoga.style.left = timePassed / 2.5 + 'px';
      }, 2000);
    };

    // Рисует функция draw
    // Продолжительность анимации duration
    function animate(draw, duration) {
      var start = performance.now();

      requestAnimationFrame(function animate(time) {
        // определить, сколько прошло времени с начала анимации
        var timePassed = time - start;

        console.log(time, start)
          // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) timePassed = duration;

        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }

      });
    }

