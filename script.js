// function toggleMenu() {
//   const menu = document.getElementById("mobileMenu");
//   menu.classList.toggle("active");
// }
function reloadPage() {
  location.reload();
}

document.getElementById("consultBtn").addEventListener("click", function () {
  const phoneNumber = "9779862721917"; // WhatsApp number
  const message = "Hello, I would like to consult regarding your services.";
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
});

window.onload = () => {
  let count = 0;
  const target = 100;
  const counter = document.getElementById("clientCount");

  const interval = setInterval(() => {
    if (count < target) {
      count++;
      counter.textContent = count + "+";
    } else {
      clearInterval(interval);
    }
  }, 30);
};
const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;
    let interval;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
          img.classList.add('active');
        }
      });
    }

    function startSlideshow() {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }, 3000);
    }

    images.forEach(img => {
      img.addEventListener('click', () => {
        clearInterval(interval);
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        startSlideshow();
      });
    });

    document.addEventListener('DOMContentLoaded', () => {
      showImage(currentIndex);
      startSlideshow();
    });
   function changeSlide(direction) {
      clearInterval(interval);
      currentIndex = (currentIndex + direction + images.length) % images.length;
      showImage(currentIndex);
      startSlideshow();
    }

    function startSlideshow() {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }, 3000);
    }

    images.forEach(img => {
      img.addEventListener('click', () => {
        changeSlide(1);
      });
    })
    document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowRight") {
      changeSlide(1); // Next image
    } else if (event.key === "ArrowLeft") {
      changeSlide(-1); // Previous image
    }
  });
  // Animate sections on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.animation = "fadeInUp 1s ease forwards";
    }
  });
});
function openWhatsApp() {
  const phoneNumber = "+9779862721917";
  const message = encodeURIComponent("Hello, I need assistance with Tax First Pvt. Ltd.");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

function openContactForm() {
  window.open("contact.html", "_blank");
}
function showService(service) {
  if (service === 'audit') {
    document.getElementById('audit-content').style.display = 'block';
    // Scroll to the content if needed
    document.getElementById('audit-content').scrollIntoView({ behavior: 'smooth' });
  }
}

