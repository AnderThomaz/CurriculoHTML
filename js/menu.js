    const fabars = document.querySelector ('.fabars')
    const fabarsIcon = document.querySelector ('.fabars i')
    const dropmenu = document.querySelector ('.dropmenu')

    fabars.onclick = function () {
        dropmenu.classList.toggle ('open')
        const isOpen = dropmenu.classList.contains('open')

        fabarsIcon.classList = isOpen
        ?  'fa-solid fa-xmark'
        :  'fa-solid fa-bars'
    }
