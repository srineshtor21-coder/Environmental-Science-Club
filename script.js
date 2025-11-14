```javascript

// ===================================

// Mobile Menu Toggle

// ===================================

const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {

mobileMenuBtn.addEventListener("click", () => {

const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";

mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);

navLinks.classList.toggle("active");

});

// Close menu when clicking on a link

const links = navLinks.querySelectorAll(".nav-link");

links.forEach(link => {

link.addEventListener("click", () => {

mobileMenuBtn.setAttribute("aria-expanded", "false");

navLinks.classList.remove("active");

});

});

// Close menu when clicking outside

document.addEventListener("click", (e) => {

if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {

mobileMenuBtn.setAttribute("aria-expanded", "false");

navLinks.classList.remove("active");

}

});

}

// ===================================

// Smooth Scroll with Offset for Fixed Nav

// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

const targetId = this.getAttribute("href");

if (targetId === "#") return;

const targetElement = document.querySelector(targetId);

if (targetElement) {

const navHeight = document.querySelector(".nav").offsetHeight;

const targetPosition = targetElement.offsetTop - navHeight - 20;

window.scrollTo({

top: targetPosition,

behavior: "smooth"

});

}

});

});

// ===================================

// Navbar Scroll Effect

// ===================================

const navbar = document.getElementById("navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {

const currentScroll = window.pageYOffset;

if (currentScroll > 50) {

navbar.classList.add("scrolled");

} else {

navbar.classList.remove("scrolled");

}

lastScroll = currentScroll;

});

// ===================================

// Intersection Observer for Animations

// ===================================

const observerOptions = {

threshold: 0.1,

rootMargin: "0px 0px -50px 0px"

};

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

}, observerOptions);

// Observe all cards and sections

const animateElements = document.querySelectorAll(

".card, .activity-card, .benefit-card, .info-box"

);

animateElements.forEach(el => {

el.style.opacity = "0";

el.style.transform = "translateY(20px)";

el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

observer.observe(el);

});

// ===================================

// Keyboard Navigation Enhancement

// ===================================

document.addEventListener("keydown", (e) => {

// Allow Escape key to close mobile menu

if (e.key === "Escape") {

if (mobileMenuBtn && navLinks) {

mobileMenuBtn.setAttribute("aria-expanded", "false");

navLinks.classList.remove("active");

}

}

});

// ===================================

// Performance: Reduce animations on scroll

// ===================================

let ticking = false;

function updateNavbar() {

const currentScroll = window.pageYOffset;

if (currentScroll > 50) {

navbar.classList.add("scrolled");

} else {

navbar.classList.remove("scrolled");

}

ticking = false;

}

window.addEventListener("scroll", () => {

if (!ticking) {

window.requestAnimationFrame(() => {

updateNavbar();

});

ticking = true;

}

});

// ===================================

// Accessibility: Focus Management

// ===================================

document.addEventListener("mousedown", () => {

document.body.classList.add("using-mouse");

});

document.addEventListener("keydown", (e) => {

if (e.key === "Tab") {

document.body.classList.remove("using-mouse");

}

});

// ===================================

// External Links: Add security attributes

// ===================================

document.querySelectorAll('a[target="_blank"]').forEach(link => {

const currentRel = link.getAttribute("rel") || "";

if (!currentRel.includes("noopener")) {

link.setAttribute("rel", currentRel + " noopener");

}

if (!currentRel.includes("noreferrer")) {

link.setAttribute("rel", link.getAttribute("rel") + " noreferrer");

}

});

// ===================================

// Page Load Complete

// ===================================

window.addEventListener("load", () => {

document.body.classList.add("page-loaded");

});

// ===================================

// Copy to Clipboard Notification

// ===================================

function copyToClipboard(text) {

if (navigator.clipboard && navigator.clipboard.writeText) {

navigator.clipboard.writeText(text).then(() => {

showNotification("Copied to clipboard!");

});

}

}

function showNotification(message) {

const notification = document.createElement("div");

notification.textContent = message;

notification.style.cssText = `

position: fixed;

bottom: 24px;

right: 24px;

background: #10b981;

color: white;

padding: 16px 24px;

border-radius: 12px;

box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

z-index: 10000;

animation: slideIn 0.3s ease;

`;

document.body.appendChild(notification);

setTimeout(() => {

notification.style.animation = "slideOut 0.3s ease";

setTimeout(() => notification.remove(), 300);

}, 3000);

}

// Add CSS for notifications

const style = document.createElement("style");

style.textContent = `

@keyframes slideIn {

from {

transform: translateX(400px);

opacity: 0;

}

to {

transform: translateX(0);

opacity: 1;

}

}

@keyframes slideOut {

from {

transform: translateX(0);

opacity: 1;

}

to {

transform: translateX(400px);

opacity: 0;

}

}

`;

document.head.appendChild(style);
