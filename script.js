/* ======== রেসপন্সিভ নেভিগেশন মেনু (Hamburger) ======== */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// মেনুর বাইরে ক্লিক করলে মেনু বন্ধ করার জন্য
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

/* ======== ডার্ক মোড টগল (Dark Mode Toggle) ======== */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

// ব্যবহারকারীর আগের সেটিং চেক করা
if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
}

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
}


/* ======== ভিজিটর কাউন্টার (Footer Visitor Counter) ======== */
// নোট: এটি একটি সিম্পল ক্লায়েন্ট-সাইড কাউন্টার।
// এটি শুধু এই ব্রাউজারের ভিজিট গণনা করবে।
// রিয়েল-টাইম সব ইউজারের কাউন্টের জন্য ডেটাবেস (যেমন Firebase) লাগবে।

const visitCountElement = document.getElementById("visit-count");

function updateVisitorCount() {
    let visitCount = localStorage.getItem("roktomitroVisitCount");

    if (visitCount) {
        visitCount = parseInt(visitCount, 10) + 1;
    } else {
        visitCount = 1; // প্রথম ভিজিটর
    }

    localStorage.setItem("roktomitroVisitCount", visitCount);
    
    // একটি সুন্দর সংখ্যা দেখানোর জন্য আমি একটি বেস নাম্বার যোগ করছি
    const displayCount = visitCount + 1000; // ধরুন আপনার আগে ১০০০ ভিজিটর ছিল

    visitCountElement.textContent = displayCount.toLocaleString('bn-BD'); // বাংলায় সংখ্যা দেখাবে (e.g., ১,০০১)
}

// ওয়েবসাইট লোড হলেই কাউন্টার আপডেট হবে
document.addEventListener("DOMContentLoaded", updateVisitorCount);

/* ======== লগইন মডেল (Pop-up) ফাংশনালিটি ======== */

// বাটন এবং মডাল এলিমেন্টগুলো সিলেক্ট করা
// (নোট: আমরা .querySelectorAll ব্যবহার করছি কারণ বাটনটি অনেক পেজে আছে,
// কিন্তু find-blood.html বাটনটি এই ফাইলে নেই, তাই এটি কাজ করবে না।
// আমাদের নিশ্চিত করতে হবে যে script.js সব পেজেই লোড হয়।)

// আমরা ধরে নিচ্ছি যে script.js সব পেজেই লোড হয় এবং হেডার সব পেজেই আছে।
const loginOpenBtn = document.getElementById("login-open-btn");
const loginModal = document.getElementById("login-modal");
const loginCloseBtn = document.getElementById("login-close-btn");
const modalRegisterLink = document.getElementById("modal-register-link");

// "লগইন" বাটনে ক্লিক করলে মডাল ওপেন হবে
if (loginOpenBtn) {
    loginOpenBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        if (loginModal) {
            loginModal.classList.add("active");
        }
    });
}

// "Close" (X) বাটনে ক্লিক করলে মডাল বন্ধ হবে
if (loginCloseBtn) {
    loginCloseBtn.addEventListener("click", () => {
        if (loginModal) {
            loginModal.classList.remove("active");
        }
    });
}

// মডালের বাইরে (কালো overlay) ক্লিক করলে মডাল বন্ধ হবে
if (loginModal) {
    loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove("active");
        }
    });
}

// মডালের ভেতর "নিবন্ধন করুন" লিঙ্কে ক্লিক করলে মডাল বন্ধ হবে
if (modalRegisterLink) {
    modalRegisterLink.addEventListener("click", () => {
        if (loginModal) {
            loginModal.classList.remove("active");
        }
        // লিংকটি কাজ করবে এবং be-a-donor.html পেজে নিয়ে যাবে
    });
}

/* ======== Forgot Password লিংক ক্লিক হ্যান্ডেল ======== */
const modalForgotPass = document.getElementById("modal-forgot-pass");

if (modalForgotPass) {
    modalForgotPass.addEventListener("click", () => {
        // মডালটি বন্ধ করে দাও
        if (loginModal) {
            loginModal.classList.remove("active");
        }
        // তারপর লিংকটি কাজ করে forgot-password.html পেজে নিয়ে যাবে
    });
}