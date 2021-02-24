export const contactAction = () => {
    $('.contact-form-name').blur(function (){
        const color = $(this).val() ? {'border': '1px solid green'} : {'border': '1px solid red'};
        $(this).css(color)

    })
    $('.contact-form-email').blur(function () {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const email = $(this).val()
        const validate = reg.test(email)
        const color = validate ? {'border': '1px solid green'} : {'border': '1px solid red'};
        $(this).css(color)

        const btn = $('.contact-form-btn')
        const name = $('.contact-form-name').val()
        const btnActive = validate && name ? $(btn).prop("disabled",false) : $(btn).prop("disabled",true)
    })


}