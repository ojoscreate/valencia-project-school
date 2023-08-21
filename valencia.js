const services = document.querySelectorAll(".app");
const appearOptions = {  
    root: null,
    threshold: 0.2,
    rootMargin: "-50px"

}

const scrollAppear = new IntersectionObserver(function (entries, scrollAppear) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear")
            scrollAppear.unobserve(entry.target);
        } else {
            return;
        }
    }

    )

}, appearOptions);


services.forEach(service => {
    scrollAppear.observe(service)
}

);