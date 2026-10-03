

const text = "Desarrolladora web Full-Stack";
const element = document.querySelector(".typing-text");

let index = 0;
let deleting = false;

function typeWriter() {
    if (!deleting) {
        // Escribir
        element.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            // Esperar antes de empezar a borrar
            setTimeout(() => {
                deleting = true;
                typeWriter();
            }, 1500);

            return;
        }
    } else {
        // Borrar
        element.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            deleting = false;
        }
    }

    setTimeout(typeWriter, deleting ? 60 : 100);
}

typeWriter();

const elements = document.querySelectorAll(".scroll-animation");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach((element) => {
    observer.observe(element);
});