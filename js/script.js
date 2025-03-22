Fancybox.bind("[data-fancybox]", {});

document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    console.log("Кнопка .header__burger: класс active теперь:", this.classList.contains('active')); // Добавлено console.log
    document.querySelector('.header__right').classList.toggle('open');
});