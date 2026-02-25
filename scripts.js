// --- DATA STRUCTURE ---
const portfolioData = {
  About: {
    type: "about",
    title: "About John.",
    content: `
      <div class="about-section">
        <img src="./images/moi.webp" alt="Profile image" class="about-image" />
        <div class="about-text">
          <p>
            Hi there! I'm a graphic designer with over a decade of experience in the field, specializing in impactful sports design while mixing in a traditional aesthetic. I create energetic visual identities
            and game-day content that capture the intensity of the arena. 
          </p>
          <p>
            In addition to sports design, I focus on AI implementation, creating designs that are easily digestible for the reader. I enjoy pushing the boundaries of creative conceptualization and efficiency to ensure each project is strategically sound and innovative.
          </p>
          <p>Whether I’m crafting a team’s seasonal narrative or developing modern design systems, my goal is to deliver versatile, future-forward solutions that resonate with audiences and elevate brand presence across all platforms.</p>
        <p>I currently live in Arlington, Virginia, and am open to relocating to continue my passion for creating the best designs and growing as a professional.</p>
        <a class="email-link" href="mailto:jtlovato@gmail.com">Shoot Me An Email</a>
        </div>
      </div>
    `,
  },

  Sports: {
    type: "navigation",
    title: "Select a Sports Category",
  },

  AI: {
    type: "gallery",
    title: "AI & Machine Learning Concepts",
    blurb:
      "Hired for an independent blog discussing the impacts of AI in the modern world, the client had a specific color palette they wanted to remain consistent with. Coming in as an outsider was a challenge I happily accepted. I studied their design process and previous graphics, noting a recurring theme: simple, colorful, and descriptive. As such, I maintained that style to draw in readers effectively.",
    images: [
      {
        src: "./images/ai/edgelord.webp",
        caption:
          'With this article, I wanted to represent Elon Musk while working within a unique color palette. I created a style that was recognizably Musk while providing a clear visual description of the "Edgelord" concept.',
      },
      {
        src: "./images/ai/chip_and_subscribe.webp",
        caption:
          "Two graphics side by side: one inviting readers to subscribe, the other for an article regarding computer chip technology.",
      },
      {
        src: "./images/ai/map.webp",
        caption:
          "A gradient descent visualization reimagined as a mountain range with peaks and valleys.",
      },
      {
        src: "./images/ai/cork_board_yarn_neural.webp",
        caption:
          "A conspiracy-style cork board with a pattern reflecting a neural network architecture.",
      },
      {
        src: "./images/ai/cost_of_ai_in_the_city.webp",
        caption:
          "A rising graph that doubles as a silhouette of city skyscrapers.",
      },
      {
        src: "./images/ai/safety_net_with_ai.webp",
        caption:
          "Several figures in disarray falling into a gradient descent that doubles as a trapeze safety net.",
      },
      {
        src: "./images/ai/unsteady.webp",
        caption:
          "A graph illustrating the volatile ranges of success and failure.",
      },
      {
        src: "./images/ai/face_tracker.webp",
        caption:
          "An image of several people with a face tracker highlighting the wrong threat. The woman on the right is holding a knife.",
      },
    ],
  },

  Logos: {
    type: "gallery",
    title: "Branding & Logo Design",
    blurb:
      "A collection of identity projects focusing on modern and scalable logo design for various clients. Every logo is designed to be functional across various sizes, colors, and monochrome formats.",
    images: [
      {
        src: "./images/logo/body_high.webp",
        caption:
          "Body High: A Pilates studio that also offers a cannabis lounge, focusing on both mental and physical health.",
      },
      {
        src: "./images/logo/afro.webp",
        caption:
          "Lil Boriqua Afro: A Puerto Rican-owned jewelry business. The client requested a design featuring a Black woman with the colors of the PR flag and highlighted jewelry.",
      },
      {
        src: "./images/logo/sixth_and_sin.webp",
        caption:
          "Sixth & Sin: An adult club located on 6th Street. The identity uses a palette of red, black, and white.",
      },
      {
        src: "./images/logo/garmende_clothing_co.webp",
        caption:
          "Garmende Clothing Co: A luxury high-end clothing brand focusing on formal attire, based in Minnesota.",
      },
      {
        src: "./images/logo/ecdc_african_community_center.webp",
        caption:
          "ECDC African Community Center: A resource for African immigrants transitioning to life in America. This logo was developed for their official podcast.",
      },
      {
        src: "./images/logo/LVL.webp",
        caption:
          "Leah Van Lieu Legal Support Services: A unique identity for a legal assistant based in Colorado, featuring colors inspired by the Rocky Mountains.",
      },
      {
        src: "./images/logo/SoSi.webp",
        caption:
          "SoSi: A startup makeup brand focusing on self-confidence while maintaining a classy, classic aesthetic.",
      },
      {
        src: "./images/logo/steel_line.webp",
        caption:
          "Steel Line: A Pittsburgh-based sports apparel store specializing in Penguins, Steelers, and Pirates merchandise.",
      },
      {
        src: "./images/logo/freereign.webp",
        caption:
          "Free Reign: A self-help group focusing on healing from childhood trauma, symbolized by a carousel horse breaking free.",
      },
      {
        src: "./images/logo/rainbow_cake_co.webp",
        caption:
          "Rainbow Cake Co: A creative bakery started by an LGBTQ+ couple, focusing on bespoke, imaginative cakes.",
      },
      {
        format: "pp",
        url: "https://1drv.ms/p/c/42d41b454745dd3b/IQTRdbZOVwmURqX8vfup0pT-Aayqmk3AZcXgzTIEgPjp0fM?em=2&wdAr=1.7777777777777777&wdEaaCheck=1",
        caption:
          "Strategic Pitch: Iowa Wild Ticket Increase Plan Deck (Please Be Patient As Powerpoints Can Take Time To Load)",
      },
      {
        format: "pp",
        url: "https://1drv.ms/p/c/42d41b454745dd3b/IQSlMElyGYiTTpIPkdnaE63jAcLt2wQvkIXSe1Zd0rxu4-A?em=2&wdAr=1.7777777777777777",
        caption:
          "State Of Utah Ethical AI Usage: Policy Branding and Guidelines (Please Be Patient As Powerpoints Can Take Time To Load)",
      },
    ],
  },

  Avalanche: {
    type: "gallery",
    title: "Colorado Avalanche Season Campaign",
    blurb: "",
    // "Season campaign mockup for the NHL's Colorado Avalanche. The primary challenge was to translate the high-velocity intensity of Avalanche hockey into a static identity that felt both prestigious and accessible to the faithful fanbase. I utilized unique perspectives, such as overhead ice views, to put fans in the middle of the action. High-contrast graphics maintain engagement while ensuring key information is easily digestible.",
    images: [
      {
        src: "./images/sports/explainer_avs.webp",
        caption: "\u00A0\u00A0\u00A0",
      },
      {
        src: "./images/sports/avs_gameday.webp",
        caption: "Gameday Graphic\u00A0\u00A0\u00A0[1 / 14]",
      },
      {
        src: "./images/sports/starting_lineup.webp",
        caption: "Roster Reveal\u00A0\u00A0\u00A0[2 / 14]",
      },
      {
        src: "./images/sports/avs_used_screen.webp",
        caption: "Jumbotron Player Introductions.\u00A0\u00A0\u00A0[3 / 14]",
      },
      {
        src: "./images/sports/starting_in_net.webp",
        caption: "Starting In Net.\u00A0\u00A0\u00A0[4 / 14]",
      },
      {
        src: "./images/sports/afterperiod.webp",
        caption:
          "Intermission Updates (Periods 1, 2, 3).\u00A0\u00A0\u00A0[5 / 14]",
      },
      {
        src: "./images/sports/avs_win.webp",
        caption: "Final Score: Avalanche Win.\u00A0\u00A0\u00A0[6 / 14]",
      },
      {
        src: "./images/sports/blackwood_shutout.webp",
        caption: "Goaltender Shutout Graphic.\u00A0\u00A0\u00A0[7 / 14]",
      },
      {
        src: "./images/sports/clinched.webp",
        caption: "Playoff Clinch Graphic.\u00A0\u00A0\u00A0[8 / 14]",
      },
      {
        src: "./images/sports/gabes_back.webp",
        caption:
          "Captain Gabriel Landeskog Return Graphic.\u00A0\u00A0\u00A0[9 / 14]",
      },
      {
        src: "./images/sports/avs_used.webp",
        caption: "Social Media Examples.\u00A0\u00A0\u00A0[10 / 14]",
      },
      {
        src: "./images/sports/schedule.webp",
        caption: "Monthly Schedule Template.\u00A0\u00A0\u00A0[11 / 14]",
      },
      {
        src: "./images/sports/trade_graphic.webp",
        caption: "Trade Announcement Example.\u00A0\u00A0\u00A0[12 / 14]",
      },
      {
        src: "./images/sports/thank_you.webp",
        caption: "Player Appreciation Graphic.\u00A0\u00A0\u00A0[13 / 14]",
      },
      {
        src: "./images/sports/1st_star.webp",
        caption: "NHL Star of the Month Graphic.\u00A0\u00A0\u00A0[14 / 14]",
      },
    ],
  },

  Islanders: {
    type: "gallery",
    title: "Sports: New York Islanders Graphics",
    blurb:
      "Season branding guide for the NHL's New York Islanders. The design incorporates the hidden details of the Islanders logo—where the stick points to Long Island and features notches for each championship. I carried this 'Breaking Stick' motif through the information architecture. The slogan 'uNYIelding' was developed using the team's NYI acronym.",
    images: [
      {
        src: "./images/sports/season.webp",
        caption: "Slogan Launch: uNYIelding\u00A0\u00A0\u00A0[1 / 9]",
      },
      {
        src: "./images/sports/milestone.webp",
        caption:
          "Jordan Eberle: 300 Career Goals Celebration\u00A0\u00A0\u00A0[2 / 9]",
      },
      {
        src: "./images/sports/gamedays.webp",
        caption:
          "Gameday Graphics for Home/Away Jersey Variations\u00A0\u00A0\u00A0[3 / 9]",
      },
      {
        src: "./images/sports/isles_schedule.webp",
        caption:
          "Full Season Schedule with Jersey Kit Details\u00A0\u00A0\u00A0[4 / 9]",
      },
      {
        src: "./images/sports/player_profile.webp",
        caption: "Ilya Sorokin Player Profile\u00A0\u00A0\u00A0[5 / 9]",
      },
      {
        src: "./images/sports/retro.webp",
        caption:
          "Retro 'Fisherman' Third Jersey Reveal\u00A0\u00A0\u00A0[6 / 9]",
      },
      {
        src: "./images/sports/trade.webp",
        caption: "Trade Announcement Graphic\u00A0\u00A0\u00A0[7 / 9]",
      },
      {
        src: "./images/sports/thank_you_graphic.webp",
        caption: "Player Farewell/Retirement Graphic\u00A0\u00A0\u00A0[8 / 9]",
      },
      {
        src: "./images/sports/isles_starting_lineup.webp",
        caption: "Dynamic Starting Lineup Template\u00A0\u00A0\u00A0[9 / 9]",
      },
    ],
  },

  General: {
    type: "gallery",
    title: "Sports: General Graphics & Templates",
    blurb:
      "A collection of one-off sports designs and versatile templates used to quickly convey breaking news or engage social media audiences.",
    images: [
      {
        src: "./images/sports/caitlin_clark_design.webp",
        caption:
          "Caitlin Clark: Rookie of the Year Accomplishments\u00A0\u00A0\u00A0[1 / 13]",
      },
      {
        src: "./images/sports/montreal_gameday_graphic.webp",
        caption: "Montreal Canadiens Gameday Graphic\u00A0\u00A0\u00A0[2 / 13]",
      },
      {
        src: "./images/sports/quick.webp",
        caption: "Jonathan Quick Celebration Graphic\u00A0\u00A0\u00A0[3 / 13]",
      },
      {
        src: "./images/sports/playoffs.jpg",
        caption:
          "Playoff Graphic for The Offensive Zone Podcast\u00A0\u00A0\u00A0[4 / 13]",
      },
      {
        src: "./images/sports/edm_background.webp",
        caption: "Edmonton Oilers Wallpaper\u00A0\u00A0\u00A0[5 / 13]",
      },
      {
        src: "./images/sports/cards.webp",
        caption:
          "PWHL Autographed Trading Card Series\u00A0\u00A0\u00A0[6 / 13]",
      },
      {
        src: "./images/sports/garcia.webp",
        caption:
          "Adolis Garcia: Bat Flip Celebration\u00A0\u00A0\u00A0[7 / 13]",
      },
      {
        src: "./images/sports/breaking.webp",
        caption:
          "Breaking News Template for The Offensive Zone Podcast\u00A0\u00A0\u00A0[8 / 13]",
      },
      {
        src: "./images/sports/laine_milestone.webp",
        caption:
          "Patrik Laine: 100 Goals Celebration\u00A0\u00A0\u00A0[9 / 13]",
      },
      {
        src: "./images/sports/pwhl_gameday.webp",
        caption:
          "PWHL Gameday: NY Sirens at Ottawa Charge\u00A0\u00A0\u00A0[10 / 13]",
      },
      {
        src: "./images/sports/rafael_devers_graphic.webp",
        caption:
          "Rafael Devers Social Media Feature\u00A0\u00A0\u00A0[11 / 13]",
      },
      {
        src: "./images/sports/SaltLakeSwarm.jpg",
        caption:
          "Salt Lake Swarm: Branding Exploration for Utah NHL\u00A0\u00A0\u00A0[12 / 13]",
      },
      {
        src: "./images/sports/wallpapers.webp",
        caption:
          "NHL Heritage Series: Current players vs. younger selves.\u00A0\u00A0\u00A0[13 / 13000]",
      },
    ],
  },
};

// --- LOGIC ---
let currentProjectImages = [];
let currentImageIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const subcategoryImgs = document.querySelectorAll(".subcategory-img");

  function updateSubcategoryImagesForViewport() {
    const isMobile = window.innerWidth <= 768;
    subcategoryImgs.forEach((img) => {
      const desktopSrc = img.getAttribute("data-desktop-src");
      const mobileSrc = img.getAttribute("data-mobile-src");
      img.src = isMobile && mobileSrc ? mobileSrc : desktopSrc;
    });
  }

  updateSubcategoryImagesForViewport();
  window.addEventListener("resize", updateSubcategoryImagesForViewport);

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBlurb = document.getElementById("modal-blurb");
  const navigationView = document.getElementById("navigation-view");
  const galleryView = document.getElementById("gallery-view");
  const aboutView = document.getElementById("about-view");
  const slideshowContainer = document.querySelector(".slideshow-container");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const backToSportsBtn = document.getElementById("back-to-sports");
  const closeWithBackBtn = document.getElementById("close-with-back");

  function updateSlideshow(index) {
    if (currentProjectImages.length === 0) return;
    if (index >= currentProjectImages.length) index = 0;
    else if (index < 0) index = currentProjectImages.length - 1;
    currentImageIndex = index;

    const currentItem = currentProjectImages[currentImageIndex];
    const modalImage = document.getElementById("modal-image");
    const slideshowContainer = document.querySelector(".slideshow-container");

    // Remove any existing iframes first
    const existingIframe = slideshowContainer.querySelector("iframe");
    if (existingIframe) existingIframe.remove();

    if (currentItem.format === "pp") {
      // Hide the image, create and show the iframe
      modalImage.style.display = "none";
      const iframe = document.createElement("iframe");
      iframe.src = currentItem.url;
      iframe.style.width = "100%";
      iframe.style.height = "450px";
      iframe.style.border = "none";
      // Insert iframe before the buttons
      slideshowContainer.insertBefore(iframe, modalImage);
    } else {
      // Show the image, hide the iframe (already removed above)
      modalImage.style.display = "block";
      modalImage.src = currentItem.src;
      modalImage.alt = currentItem.caption;
    }

    modalCaption.textContent = currentItem.caption;
  }

  function renderAllImagesForMobile() {
    if (!slideshowContainer) return;
    slideshowContainer.innerHTML = "";
    currentProjectImages.forEach((item) => {
      if (item.format === "pp") {
        const iframe = document.createElement("iframe");
        iframe.src = item.url;
        iframe.className = "modal-image"; // Use same class for styling
        iframe.style.height = "300px";
        iframe.style.width = "100%";
        slideshowContainer.appendChild(iframe);
      } else {
        const img = document.createElement("img");
        img.src = item.src;
        img.className = "modal-image";
        slideshowContainer.appendChild(img);
      }
      const caption = document.createElement("div");
      caption.className = "modal-caption";
      caption.textContent = item.caption;
      slideshowContainer.appendChild(caption);
    });
  }

  function openModal(categoryKey) {
    const data = portfolioData[categoryKey];
    if (!data) return;

    navigationView.classList.add("hidden");
    galleryView.classList.add("hidden");
    aboutView.classList.add("hidden");
    modalTitle.textContent = data.title;
    modalBlurb.textContent = data.blurb || "";

    const isMobile = window.innerWidth <= 768;

    if (data.type === "navigation") {
      navigationView.classList.remove("hidden");
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      backToSportsBtn?.classList.add("hidden");
      closeWithBackBtn?.classList.add("hidden");
    } else if (data.type === "gallery") {
      currentProjectImages = data.images;
      galleryView.classList.remove("hidden");
      const isSportsSub = ["Avalanche", "Islanders", "General"].includes(
        categoryKey,
      );
      if (backToSportsBtn)
        isSportsSub
          ? backToSportsBtn.classList.remove("hidden")
          : backToSportsBtn.classList.add("hidden");

      // Explicitly show the Close button for galleries
      if (closeWithBackBtn) closeWithBackBtn.classList.remove("hidden");

      if (isMobile) {
        renderAllImagesForMobile();
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        updateSlideshow(0);
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
    } else if (data.type === "about") {
      aboutView.innerHTML = data.content;
      aboutView.classList.remove("hidden");

      if (backToSportsBtn) backToSportsBtn.classList.add("hidden");
      if (closeWithBackBtn) closeWithBackBtn.classList.remove("hidden");

      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
    modal.style.display = "block";
  }

  document.querySelectorAll("[data-category]").forEach((btn) => {
    btn.addEventListener("click", (e) =>
      openModal(e.currentTarget.getAttribute("data-category")),
    );
  });

  backToSportsBtn?.addEventListener("click", () => openModal("Sports"));
  closeWithBackBtn?.addEventListener(
    "click",
    () => (modal.style.display = "none"),
  );
  prevBtn.addEventListener("click", () =>
    updateSlideshow(currentImageIndex - 1),
  );
  nextBtn.addEventListener("click", () =>
    updateSlideshow(currentImageIndex + 1),
  );
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
