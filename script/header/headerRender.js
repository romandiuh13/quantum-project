export const headerRender = () => {
    $(document).ready(function(){
        $('.header-burger-icon').click(function(){
            $('.header-menu-navbar').toggleClass('active')
            $('.header-burger-icon').toggleClass('active');
        });
    });
    return (`

    <div class="header-container">
        <div class="header-menu">
            <div class="header-menu-logo">
                <span>LOGO</span>
            </div>
            <div class="header-burger">
                <div class="header-burger-icon">
                    <span></span>
                </div>
            </div>
            <nav class="header-menu-navbar">
                    <a href="#" class="header-menu-navbar-item">How it works</a>
                    <a href="#" class="header-menu-navbar-item">About</a>
                    <a href="#" class="header-menu-navbar-item">Instructions</a>
                    <a href="#" class="header-menu-navbar-item">Accounts</a>
                    <a href="#" class="header-menu-navbar-item">Platforms</a>
                    <a href="#" class="header-menu-navbar-item">Contact</a>
            </nav>
            </div>
            <div class="header-auth">
               <select class="header-auth-select" name="" id="">
                <option value="">EN</option>
                <option value="">RU</option>
                </select>
                <button class="header-auth-btn btn">Sign in for free</button>
            </div>
    </div>
`)
}