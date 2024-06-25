$(() => {
    $("#modal-open-btn").click(() => {
        $(".overlay").css("display", "block");
        $(".modal").css("display", "block");
        $(".modal").append('<div class="modal__container"></div>');
        $(".modal__container").append('<button class="modal__btn-close"><div><span></span><span></span></div></button>');
        $(".modal__container")
            .append('<form class="modal__form form">' +
                '<h2 class="form__title">Войти в систему</h2>' +
                '<input class="form__inp" type="text" placeholder="Email/Телефон">' +
                '<input class="form__inp" type="password" placeholder="Пароль">' +
                '<input class="form__custom-check" id="remember" type="checkbox"/>' +
                '<label for="remember" tabindex="0">Запомнить пароль </label>' +
                '<a href="#" class="form__link">Восстановить</a>' +
                '<button class="form__btn btn_fill" id="log-in">Войти</button>' +
                '<button class="form__btn" id="sign-up">Зарегестрироваться</button>' +
                '</form>'
            );
        $('.modal__btn-close').click(() => {
            $('.modal__container').remove();
            $(".overlay").css("display", "none");
            $(".modal").css("display", "none");
        })
    })
})
