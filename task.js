document.addEventListener("click", (e) => {
    // получаем таргет
    const target = e.target    

    // проверяем является ли элемент подсказкой
    if (Array.from(target.classList).includes('has-tooltip')) {        
        // определяем координаты таргета
        let targetRect = target.getBoundingClientRect()
        
        // создаем элемент, координаты со смещением от таргета
        let tip = document.createElement('div')
        tip.className = 'tooltip tooltip_active'
        tip.style.left = (targetRect.x - tip.offsetHeight + 20) + 'px'
        tip.style.top = (targetRect.y - tip.offsetHeight + 20) + 'px'        
        tip.textContent = target.title

        // добавляем элемент на страницу
        document.body.append(tip)        
    }

    // отключаем переход по ссылке
    e.preventDefault()
})

document.addEventListener("mouseout", () => {
    const tips = [...document.querySelectorAll('.tooltip')]
    
    for (const t of tips) {
        if (t != null) {        
            // TODO: можно удалить класс активности 
            // или удалить элемент целиком, вопрос: что лучше?
            // t.classList.remove('tooltip_active')
                        
            t.remove()
        }   
    }  
})