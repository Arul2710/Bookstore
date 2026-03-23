// Independent Bookstore & Community Hub - Fully Responsive Navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#F8F3E8] dark:bg-[#1a1612] border-b border-[#C2A87840]">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20 md:h-24">

      <a href="index.html" class="flex items-center gap-3 group shrink-0 z-[60]">
        <div class="w-1.5 h-10 bg-[#eda726] rounded-full"></div>
        <div class="flex flex-col">
          <span class="text-lg font-serif font-black tracking-widest uppercase text-black dark:text-white">
            THE <span class="text-[#eda726]">BOOKORA</span>
          </span>
          <span class="text-[9px] tracking-[0.3em] uppercase text-[#C2A878] font-bold leading-none">Community Hub</span>
        </div>
      </a>

      <div id="desktopNav" class="nav hidden xl:flex flex-1 justify-center items-center space-x-2 font-serif text-[16px]">
        <div class="relative group/home">
          <button id="homeBtn" class="nav-link flex items-center space-x-1 px-3 py-2 transition-all duration-300 text-gray-800 dark:text-gray-100">
            <span>Home</span>
            <i class="fas fa-chevron-down text-[10px] transition-transform duration-300 group-hover/home:rotate-180" style="color: #eda726;"></i>
          </button>
          <div id="homeMenu" class="hidden absolute left-0 mt-2 w-48 bg-[#F8F3E8] dark:bg-[#1a1612] shadow-xl py-2 z-50 border border-[#C2A87840]">
            <a href="index.html" class="dropdown-link block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-[#eda72620] hover:text-[#eda726]">Home 1</a>
            <a href="home2.html" class="dropdown-link block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-[#eda72620] hover:text-[#eda726]">Home 2</a>
          </div>
        </div>

        <a href="about.html" class="nav-link px-3 py-2 text-gray-800 dark:text-gray-200">About</a>
        <a href="blog.html" class="nav-link px-3 py-2 text-gray-800 dark:text-gray-200">Literary Blog</a>
        <a href="hub.html" class="nav-link px-3 py-2 text-gray-800 dark:text-gray-200">The Hub</a>
        <a href="events.html" class="nav-link px-3 py-2 text-gray-800 dark:text-gray-200">Events</a>
        <a href="club.html" class="nav-link px-3 py-2 text-gray-800 dark:text-gray-200">Book Club</a>
        <a href="workshop.html" class="nav-link px-3 py-2 text-gray-800 dark:text-gray-200">Workshops</a>
        <a href="contact.html" class="nav-link px-3 py-2 text-gray-800 dark:text-gray-200">Contact</a>
      </div>

      <div class="hidden xl:flex items-center gap-4 shrink-0">
        <div class="flex items-center gap-1 bg-[#EBE4D5] dark:bg-[#2a241e] p-1 rounded-sm border border-[#C2A87830]">
          <button id="rtlToggle" class="w-9 h-8 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-400 hover:text-[#eda726]">RTL</button>
          <button id="darkToggle" class="w-9 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#eda726]">
            <i id="darkIcon" class="fas fa-moon"></i>
          </button>
        </div>
        <div class="flex items-center font-serif gap-2">
            <a href="login.html" class="px-5 py-2.5 bg-[#eda726] text-white font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:text-black border-2 border-[#eda726] transition-all">Log In</a>
            <a href="signup.html" class="px-5 py-2.5 bg-[#eda726] text-white font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:text-black border-2 border-[#eda726] transition-all">Sign Up</a>
        </div>
      </div>

      <div class="xl:hidden flex items-center h-full z-[60]">
        <button id="mobileBtn" class="w-10 h-10 flex items-center justify-center text-[#eda726] focus:outline-none">
          <i id="mobileIcon" class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="fixed inset-0 bg-[#F8F3E8] dark:bg-[#1a1612] z-50 flex-col px-6 pt-24 pb-20 xl:hidden hidden overflow-y-auto">
      <div id="mobileNavLinks" class="flex flex-col gap-1 font-serif text-lg">
        <div class="w-full border-b border-[#C2A87820]">
          <button id="mobileHomeBtn" class="flex items-center justify-between w-full py-4 text-gray-900 dark:text-white">
            <span>Home</span>
            <i id="mobileHomeIcon" class="fas fa-chevron-down text-sm transition-transform duration-300"></i>
          </button>
          <div id="mobileHomeMenu" class="hidden flex-col bg-[#eda72605] border-l-2 border-[#eda726] ml-2 mb-2">
            <a href="index.html" class="mobile-sublink px-6 py-3 text-lg text-gray-700 dark:text-gray-300">Home 1</a>
            <a href="home2.html" class="mobile-sublink px-6 py-3 text-lg text-gray-700 dark:text-gray-300">Home 2</a>
          </div>
        </div>
        <a href="about.html" class="mobile-link py-4 border-b border-[#C2A87820] text-gray-900 dark:text-white">About</a>
        <a href="blog.html" class="mobile-link py-4 border-b border-[#C2A87820] text-gray-900 dark:text-white">Literary Blog</a>
        <a href="hub.html" class="mobile-link py-4 border-b border-[#C2A87820] text-gray-900 dark:text-white">The Hub</a>
        <a href="events.html" class="mobile-link py-4 border-b border-[#C2A87820] text-gray-900 dark:text-white">Events</a>
        <a href="workshop.html" class="mobile-link py-4 border-b border-[#C2A87820] text-gray-900 dark:text-white">Workshops</a>
        <a href="contact.html" class="mobile-link py-4 border-b border-[#C2A87820] text-gray-900 dark:text-white">Contact</a>
      </div>

      <div class="btns mt-auto pt-8 flex flex-col gap-6">
        <div class="flex items-center justify-around bg-[#EBE4D5] dark:bg-[#2a241e] p-3 rounded-md border border-[#C2A87830]">
          <button id="mobileRtlToggle" class="flex items-center font-serif gap-2 font-bold text-gray-600 dark:text-gray-400">
            <i class="fas fa-language text-xl"></i> RTL Mode
          </button>
          <div class="w-px h-6 bg-[#C2A87840]"></div>
          <button id="mobileDarkToggle" class="flex items-center font-serif gap-2 font-bold text-gray-600 dark:text-gray-400">
            <i id="mobileDarkIcon" class="fas fa-moon text-xl"></i> Theme
          </button>
        </div>
        <div class="flex flex-col gap-4 font-serif">
          <a href="login.html" class="w-full py-4 text-center border-2 border-[#eda726] text-gray-900 dark:text-white font-bold uppercase text-xs tracking-widest">Log In</a>
          <a href="signup.html" class="w-full py-4 text-center bg-[#eda726] text-white font-bold uppercase text-xs tracking-widest">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;

  /* CSS STYLES */
  const style = document.createElement('style');
  style.textContent = `
    .nav-link { position: relative; transition: color 0.3s ease; }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #eda726;
      transition: width 0.3s ease;
    }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }
    .nav-link.active, .dropdown-link.active { color: #eda726 !important; }

    .mobile-link.active, .mobile-sublink.active, #mobileHomeBtn.active { 
      color: #eda726 !important; 
      font-weight: 800;
    }
    
   
    
    #mobileMenu.hidden { display: none; }
    #mobileMenu:not(.hidden) { display: flex; }
    body.menu-open { overflow: hidden; }

    @media(max-width:1280px){ .nav { font-size:14px; } }
    @media(max-width:1366px){ .btns { margin-bottom: 2rem; } }
    @media(max-width:820px){ .btns{ margin-bottom: 160px !important; } }
    @media(max-width:1180px){ .btns{ margin-bottom: 300px !important; } }
    @media(max-width:1366px){ .btns{ margin-bottom: 500px !important; } }
  `;
  document.head.appendChild(style);

  /* INTERACTION & HIGHLIGHT LOGIC */
  const homeBtn = document.getElementById("homeBtn");
  const homeMenu = document.getElementById("homeMenu");
  const mobileBtn = document.getElementById("mobileBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileIcon = document.getElementById("mobileIcon");
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");

  // --- RECTIFIED HIGHLIGHT LOGIC ---
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  
  // Select every possible navigation element
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');
  
  allNavLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
      
      // Fix for Dropdowns: If the active link is inside a menu, highlight the parent
      if (link.classList.contains('dropdown-link')) {
        homeBtn?.classList.add('active');
      }
      
      if (link.classList.contains('mobile-sublink')) {
        mobileHomeBtn?.classList.add('active');
        // Auto-expand mobile dropdown so the user sees the active sub-link
        mobileHomeMenu.classList.remove('hidden');
        if (mobileHomeIcon) mobileHomeIcon.style.transform = "rotate(180deg)";
      }
    }
  });

  // Desktop Dropdown
  homeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    homeMenu?.classList.toggle("hidden");
  });

  // Mobile Submenu Toggle
  mobileHomeBtn?.addEventListener("click", () => {
    const isHidden = mobileHomeMenu.classList.toggle("hidden");
    mobileHomeIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  });

  // Mobile Menu Overlay Toggle
  mobileBtn.onclick = () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("menu-open");
    mobileIcon.className = isHidden ? "fas fa-bars text-2xl" : "fas fa-times text-2xl";
  };

  // Close menus on click outside
  document.addEventListener("click", () => { homeMenu?.classList.add("hidden"); });

  // Theme & RTL Logic
  const themeToggles = [document.getElementById("darkToggle"), document.getElementById("mobileDarkToggle")];
  const updateIcons = (isDark) => {
    const iconClass = isDark ? "fas fa-sun" : "fas fa-moon";
    if(document.getElementById("darkIcon")) document.getElementById("darkIcon").className = iconClass;
    if(document.getElementById("mobileDarkIcon")) document.getElementById("mobileDarkIcon").className = iconClass;
  };

  themeToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("bookora-dark", isDark);
    updateIcons(isDark);
  }));

  const rtlToggles = [document.getElementById("rtlToggle"), document.getElementById("mobileRtlToggle")];
  rtlToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isRtl = document.documentElement.dir === "rtl";
    document.documentElement.dir = isRtl ? "ltr" : "rtl";
  }));

  if (localStorage.getItem("bookora-dark") === "true") {
    document.documentElement.classList.add("dark");
    updateIcons(true);
  }
});