// Navigation toggle functionality
function toggleMenu(button) {
  button.classList.toggle("active")
  document.querySelector(".nav-menu").classList.toggle("active")
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    // Close mobile menu if open
    document.querySelector(".nav-menu").classList.remove("active")
    document.querySelector(".nav-toggle").classList.remove("active")
  })
})

// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section")

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.98)"
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)"
  }
})
