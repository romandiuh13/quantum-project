export const questionsAction = ()=>{
    $('.questions-item-heading').click(function (){
        $(this).next().slideToggle()
        const next= $(this).find('.questions-item-heading-icon')
        $(next).toggleClass('open')
    })
}