const menu_btn = document.querySelector(".menu-btn");
const body = document.body;
const header = document.querySelector(".main-header");
menu_btn.addEventListener("click", function () {
  header.classList.toggle("active");
  body.classList.toggle("overflow");
});

Fancybox.bind("[data-fancybox]", {
  //
});

const tab = document.querySelector(".tabs");
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
  console.log(123);
  //Hide All Tabpane
  tabPanels.forEach((panel) => {
    // panel.hidden = "true";
    panel.style.display = "none";
  });

  //Deselect Tab Button
  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });

  //Mark New Tab
  e.currentTarget.setAttribute("aria-selected", "true");

  //Show New Tab
  const { id } = e.currentTarget;

  const currentTab = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );

  // currentTab.hidden = false;
  currentTab.style.display = null;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", tabClickHandler);
  console.log(button);
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let elementsArray = document.querySelectorAll(".clients-cont");
window.addEventListener("scroll", fadeIn);
function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i];
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 0;
    console.log(distInView);
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeIn();

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const openItem = document.querySelector(".accordion-item.active-a");

    // لو فيه عنصر مفتوح غير الحالي → يقفله
    if (openItem && openItem !== item) {
      openItem.classList.remove("active-a");
    }

    // يقلب حالة العنصر الحالي (فتح / غلق)
    item.classList.toggle("active-a");
  });
});

// فتح أول عنصر افتراضياً (لو مش محطوط في HTML)
document.querySelector(".accordion-item:first-child").classList.add("active-a");
