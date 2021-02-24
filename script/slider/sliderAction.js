export const sliderAction = () =>{


    $('.slider-main-item:first').addClass('active')
    const length = $('.slider-main-item').length

    $('.slider-arrow-icon.right').click(function (){
        const activeUser = $('.slider-main-item.active')
        const nextUser = activeUser.next('.slider-main-item')

        if(nextUser.length !== 0){
            activeUser.removeClass('active').next().addClass('active')
        }
        const activeNumber = $('.slider-main-item.active').data('slide')
        $('.slider-main-number').text(`${activeNumber}/${length}`)
    })

    $('.slider-arrow-icon.left').click(function (){

        const activeUser = $('.slider-main-item.active')
        const prevUser = activeUser.prev()

        if(prevUser.length !== 0){
            activeUser.removeClass('active').prev().addClass('active')
        }

        const activeNumber = $('.slider-main-item.active').data('slide')
        $('.slider-main-number').text(`${activeNumber}/${length}`)
    })
    const activeNumber = $('.slider-main-item.active').data('slide')
    $('.slider-main-number').text(`${activeNumber}/${length}`)

}