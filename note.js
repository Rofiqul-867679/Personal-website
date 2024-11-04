function openSlideMenu() {
  document.getElementById('slideMenu').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeSlideMenu() {
  document.getElementById('slideMenu').classList.remove('show');
  document.body.style.overflow = 'auto';
}
  // Modal Show Function
  function showModal() {
    document.getElementById('modal').style.display = 'flex';
  }

  // Image Rotation Function
  let currentIndex = 0;
  const images = document.querySelectorAll('.profile-image img');
  const totalImages = images.length;

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
  }

  // Text Rotation Function
  const profileTexts = [
    "W", "We", "Wel", "Welc", "Welco", "Welcom", "Welcome", "Welcome !",
    "to", "to my", "to my website", "to my website.", "to my website..",
    "to my website..."
  ];
  const profileTextElement = document.getElementById('profile-text');
  let textIndex = 0;

  function showNextText() {
    profileTextElement.textContent = profileTexts[textIndex];
    textIndex = (textIndex + 1) % profileTexts.length;
  }

  setInterval(showNextImage, 2000); // ইমেজ পরিবর্তন হবে প্রতি ২ সেকেন্ড পর
  setInterval(showNextText, 300); // টেক্সট পরিবর্তন হবে প্রতি ০.৩ সেকেন্ড পর

  // Close Modal on Outside Click
  document.addEventListener('click', function(e) {
    if (e.target.closest('.modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });

  // Close Slide Menu on Outside Click
  document.addEventListener('click', function(e) {
    const slideMenu = document.getElementById('slideMenu');
    if (!e.target.closest('.slide-menu') && slideMenu.classList.contains('show') && !e.target.closest('.button')) {
      closeSlideMenu();
    }
  });
// স্ক্রীনের প্রস্থ পরীক্ষা করা
function checkScreenSize() {
  if (window.innerWidth >= 768) { // 768 পিক্সেল বা তার বেশি হলে
    document.body.innerHTML = `<h1>Sorry, The website is not abailable for this device! please disable desktop mode</h1>`;
    document.body.style.textAlign = 'center'; // বার্তাটি কেন্দ্রিত হবে
    document.body.style.padding = '50px'; // কিছু প্যাডিং যোগ করা
    document.body.style.fontFamily = 'Arial, sans-serif'; // ফন্ট স্টাইল
  }
}

// পেজ লোড হলে এবং স্ক্রীন সাইজ পরিবর্তিত হলে চেক করা হবে
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
    function toggleHeight() {
      const post = document.getElementById("post");
      const button = document.getElementById("toggleButton");

      // লেখার উপরে ক্লিক করলে লেখাটি বৃদ্ধি এবং সংকুচিত হবে
      post.classList.toggle("expanded");

      // যদি লেখাটি বড় হয় তবে "See Less" এবং অন্যথায় "See More" দেখান
      if (post.classList.contains("expanded")) {
        button.innerText = "See Less";
      } else {
        button.innerText = "See More";
      }
    }