// Independent Bookstore & Community Hub Footer
// Theme: Primary: #eda726 | Secondary: #C2A878 | Background: #F8F3E8

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full duration-300 
  bg-[#F8F3E8] dark:bg-[#1a1612] 
  border-t-[4px]" 
>
  
  <div class="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 grid-cols-1 md:grid-cols-12">

    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
      <a href="index.html" class="flex items-center space-x-3 rtl:space-x-reverse group mb-6">
        <div class="w-1.5 h-10 bg-[#eda726] rounded-full transition-transform duration-300 group-hover:scale-y-110"></div>
        <div class="flex flex-col">
          <span class="text-lg font-serif font-black tracking-widest uppercase text-black dark:text-white">
            THE <span style="color: #eda726;">BOOKORA</span>
          </span>
          <span class="text-[10px] tracking-[0.3em] uppercase text-[#C2A878] font-bold">Community Hub</span>
        </div>
      </a>
      <p class="text-sm font-serif italic text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
        "A sanctuary for the curious mind. We curate stories that inspire, foster community through dialogue, and celebrate the timeless magic of the printed word."
      </p>
      
      <div class="mt-8 flex gap-3">
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#C2A878] text-[#C2A878] transition-all duration-300 hover:bg-[#eda726] hover:border-[#eda726] hover:text-white">
          <i class="fab fa-instagram text-lg"></i>
        </a>
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#C2A878] text-[#C2A878] transition-all duration-300 hover:bg-[#eda726] hover:border-[#eda726] hover:text-white">
          <i class="fab fa-facebook-f text-lg"></i>
        </a>
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#C2A878] text-[#C2A878] transition-all duration-300 hover:bg-[#eda726] hover:border-[#eda726] hover:text-white">
          <i class="fab fa-youtube text-lg"></i>
        </a>
      </div>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="text-base font-bold mb-6 uppercase tracking-widest text-black dark:text-white border-b-2 inline-block pb-1" style="border-color: #C2A878;">Navigation</h3>
      <ul class="space-y-3 text-sm font-serif">
        <li><a href="about.html" class="footer-link block text-gray-700 dark:text-gray-400 transition-all duration-300">About Us</a></li>
        <li><a href="blog.html" class="footer-link block text-gray-700 dark:text-gray-400 transition-all duration-300">Literary Blog</a></li>
        <li><a href="events.html" class="footer-link block text-gray-700 dark:text-gray-400 transition-all duration-300">Events</a></li>
        <li><a href="contact.html" class="footer-link block text-gray-700 dark:text-gray-400 transition-all duration-300">Contact</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="text-base font-bold mb-6 uppercase tracking-widest text-black dark:text-white border-b-2 inline-block pb-1" style="border-color: #C2A878;">The Hub</h3>
      <ul class="space-y-3 text-sm font-serif">
        <li><a href="club.html" class="footer-link block text-gray-700 dark:text-gray-400 transition-all duration-300">Book Clubs</a></li>
        <li><a href="workshops.html" class="footer-link block text-gray-700 dark:text-gray-400 transition-all duration-300"> Workshops</a></li>
        <li><a href="hub.html" class="footer-link block text-gray-700 dark:text-gray-400 transition-all duration-300">Hubs</a></li>
        <li><a href="membership.html" class="footer-link block text-gray-700 dark:text-gray-400 transition-all duration-300">Membership</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-4">
      <h3 class="text-base font-bold mb-6 uppercase tracking-widest text-black dark:text-white border-b-2 inline-block pb-1" style="border-color: #C2A878;">The Bookora Dispatch</h3>
      <p class="text-sm font-serif text-gray-700 dark:text-gray-400 mb-5 leading-relaxed">
        Subscribe for staff recommendations, rare book alerts, and local community gathering updates.
      </p>

      <form class="flex flex-col gap-2" id="newsletterForm">
        <div class="relative">
          <input type="email" placeholder="Your email address..." class="w-full px-4 py-3 bg-white dark:bg-[#222] text-black dark:text-white border border-[#C2A87840] focus:outline-none focus:border-[#eda726] transition-all font-serif italic shadow-inner">
        </div>
        <button type="submit" class="w-full py-3 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-lg active:scale-95" style="background-color: #eda726;">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div class="border-t border-[#C2A87830] bg-[#EBE4D5] dark:bg-[#12100d]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 dark:text-gray-500">
      
      <p>© 2026 The Bookora. Curating stories, building community.</p>

      <div class="flex gap-6">
        <a href="#" class="hover:text-[#eda726] transition-colors duration-300">Privacy</a>
        <a href="#" class="hover:text-[#eda726] transition-colors duration-300">Terms</a>
        <a href="#" class="hover:text-[#eda726] transition-colors duration-300">Shipping</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT LITERARY STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Montserrat:wght@400;700&display=swap');

    .footer-link:hover {
      color: #eda726 !important;
      padding-left: 8px;
    }

    [dir="rtl"] .footer-link:hover {
      padding-left: 0;
      padding-right: 8px;
    }

    #newsletterForm input::placeholder {
      opacity: 0.6;
    }

   
  `;
  document.head.appendChild(footerStyles);

  // Form Logic
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Welcome to the inner circle of The Bookora! Your first dispatch is on the way.');
      form.reset();
    });
  }
});