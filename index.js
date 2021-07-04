//Calculate age
var dob = new Date("07/15/2001");
var age_date = new Date(Date.now() - dob.getTime());
var age = Math.abs(age_date.getUTCFullYear() - 1970);

document.getElementById("age").innerText = age + " Years";

$(".know-more-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#profile").offset().top},
        'slow');
});

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

//Show the div on scrolling
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            return;
        else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

document.getElementById("copyright-info").innerText = "Inam Ullah - " + new Date().getFullYear();