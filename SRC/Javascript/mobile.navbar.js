class MobileNavBar{
    constructor(mobileMenu,navlist,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navlist = document.querySelector(navlist);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.navlist.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animatedLinks();
    }
    animatedLinks(){
        this.navLinks.forEach((link, index) =>{
            console.log(index / 7 + 0.3);
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);

    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar (
    ".mobile-menu",
    ".nav_list",
    ".nav_item a",

);
mobileNavBar.init()