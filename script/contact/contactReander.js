export const contactRender = () =>{
    return(
        `<div class="contact-container">
        <div class="contact-support">
            <h2 class="contact-support-title">Contact us!</h2>
            <p class="contact-support-description">The support staff and customer service are available to help you with any questions or needs you might have. Just drop us a line.</p>
            <p class="contact-support-owned">This site is owned and operated by Kode Tech Solutions LTD</p>
            <h3 class="contact-support-heading">Phone:</h3>
            <p class="contact-support-info">442038857261</p>
            <h3 class="contact-support-heading">Email:</h3>
            <p class="contact-support-info">help@google.com</p>
            <h3 class="contact-support-heading">Address:</h3>
            <p class="contact-support-info">Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands, MH 96960</p>
        </div>
            <form action="" class="contact-form" >
                <input class="contact-form-name" type="text" placeholder="Name">
                <input class="contact-form-email" type="email" placeholder="Email">
                <input class="contact-form-message" type="text" placeholder="Message">
                <button class="contact-form-btn btn" disabled>SEND</button>
            </form>
    </div>`
    )
}