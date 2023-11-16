const tips = [...document.querySelectorAll('.has-tooltip')]

for (const tip of tips) {
    tip.addEventListener("click", (e) => {
        e.preventDefault();

        const tipActive = document.querySelector('.tooltip_active');
        if (tipActive) {
            tipActive.remove();
            if (tipActive.textContent === tip.getAttribute('title')) {
                return;
            }        
        } 

        // определяем координаты таргета
        let targetRect = tip.getBoundingClientRect()
        
        // создаем элемент, координаты со смещением от таргета
        let tipNew = document.createElement('div')
        tipNew.className = 'tooltip tooltip_active'
        tipNew.style.left = (targetRect.x - tipNew.offsetHeight + 20) + 'px'
        tipNew.style.top = (targetRect.y - tipNew.offsetHeight + 20) + 'px'        
        tipNew.textContent = tip.title

        // добавляем элемент на страницу
        document.body.append(tipNew)
    })
}