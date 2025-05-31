const feeds = [
  {
    name: "@takashipom",
    photo: "../img/TakashiMurakami.jpg",
    date: "28 February 2025",
    forumTitle: "Balancing Colors Like a Pro",
    tweet: "In the world of art, color is not just a visual element, it's a language. Mastering the balance between vibrant hues and subtle tones is essential to creating dynamic, impactful works. 'Balancing Colors Like a Pro' isn't just about technique, but understanding how colors communicate emotion and meaning in the most striking way.",
    likes: 1556,
    comments: 184
  },
  {
    name: "@sanchimilikiti",
    photo: "../img/Sanchia.jpeg",
    date: "12 January 2025",
    forumTitle: "Obsessive Patterns in Art",
    tweet: "Patterns are more than just repeated shapes or colors; they reflect the intricate connections that bind our thoughts, emotions, and actions. In 'Obsessive Patterns in Art,' we explore how artists use repetitive motifs to convey both personal narratives and broader cultural themes, pushing the boundaries of visual storytelling.",
    likes: 878,
    comments: 44
  },
  {
    name: "@jeromepolin",
    photo: "../img/jerome.jpg",
    date: "6 March 2025",
    forumTitle: "Learning with Passion",
    tweet: "Art is not just an expression, it’s an exploration. Each brushstroke, each frame, is a lesson in patience and discovery. Let's learn and create together.",
    likes: 767,
    comments: 77
  },
  {
    name: "@kendalljenner",
    photo: "../img/kendall.jpg",
    date: "6 March 2025",
    forumTitle: "The Power of Confidence",
    tweet: "Confidence in art means embracing the unconventional. Creativity is a form of courage—don’t be afraid to take risks and show the world your unique vision.",
    likes: 1120,
    comments: 108
  },
  {
    name: "@nyomanmasriadi",
    photo: "../img/NyomanMasriadi.jpg",
    date: "6 March 2025",
    forumTitle: "Art as a Language",
    tweet: "Art speaks louder than words. It’s the mirror of society, reflecting its truths, challenges, and beauty. Each brushstroke tells a unique story.",
    likes: 698,
    comments: 57
  },
  {
    name: "@cindy_sherman",
    photo: "../img/CindySherman.jpg",
    date: "6 March 2025",
    forumTitle: "The Many Faces of Identity",
    tweet: "In every image I create, I blur the line between reality and art. Each portrait challenges the idea of identity, showcasing how we wear masks to shape our own narrative.",
    likes: 1320,
    comments: 121
  }
];


const activeUsers = [
    {
      name: "@kendalljenner",
      image: "../img/kendall.jpg",
      caption: "Grace in motion, confidence in stillness."
    },
    {
      name: "@sound_of_coups",
      image: "../img/scoups.jpg",
      caption: "Lead with strength, stay grounded with heart."
    },
    {
      name: "@stephencurry30",
      image: "../img/stephCurry.jpg",
      caption: "Let your work speak—then shoot from deep."
    },
    {
      name: "@nyomanmasriadi",
      image: "../img/NyomanMasriadi.jpg",
      caption: "Melukis realita dengan kekuatan simbol dan warna."
    },
    {
      name: "@yayoikusama_",
      image: "../img/YayoiKusama.jpg",
      caption: "Infinity is my playground; dots are my voice."
    },
    {
      name: "@cindy_sherman",
      image: "../img/CindySherman.jpg",
      caption: "Every face is a mirror, every image a disguise."
    },
    {
      name: "@takashipom",
      image: "../img/TakashiMurakami.jpg",
      caption: "Coloring the world with playful chaos."
    },
    {
      name: "@sanchimilikiti",
      image: "../img/Sanchia.jpeg",
      caption: "Berkarya dengan kepedulian, menginspirasi lewat seni."
    },
    {
      name: "@maudyayunda",
      image: "../img/Maudy2.jpg",
      caption: "Kecerdasan adalah kekuatan, suara hati adalah arah."
    },
    {
      name: "@jeromepolin",
      image: "../img/jerome.jpg",
      caption: "Belajar dengan semangat, berbagi dengan tulus."
    }
  ];

  const recentActivities = [
    {
      image: "../img/kendall.jpg",
      activity: "@kendalljenner just followed @stephencurry30"
    },
    {
      image: "../img/TakashiMurakami.jpg",
      activity: "@takashipom created the forum “Balancing Colors Like a Pro“"
    },
    {
      image: "../img/YayoiKusama.jpg",
      activity: "@yayoikusama_ commented on the forum “Obsessive Patterns in Art”: “Dots can be liberation.”"
    },
    {
      image: "../img/scoups.jpg",
      activity: "@sound_of_coups liked a post celebrating diverse voices in Southeast Asian art from @maudyayunda."
    }
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const feedsContainer = document.getElementById("feeds-container");
  
    feeds.forEach(feed => {
      const div = document.createElement("div");
      div.classList.add("feed");
  
      div.innerHTML = `
        <div class="user">
          <div class="profile-photo">
            <img src="${feed.photo}" alt="">
          </div>
          <div class="username">
            <h3>${feed.name}</h3>
            <small>${feed.date}</small>
          </div>
        </div>
        <div class="tweets">
          <h2>${feed.forumTitle}</h2>
          <h3>${feed.tweet}</h3>
        </div>
        <div class="action-button">
          <div class="interaction-btn">
            <span class="like">
              <i class="fa-regular fa-heart"></i>
              <h4>${feed.likes}</h4>
            </span>
            <span class="comment">
              <i class="fa-regular fa-comment-dots"></i>
              <h4>${feed.comments}</h4>
            </span>
          </div>
        </div>
      `;
      
      feedsContainer.appendChild(div);
    });
  });
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("active-users-container");
  
    activeUsers.forEach(user => {
      const div = document.createElement("div");
      div.classList.add("active-users");
      div.innerHTML = `
        <div class="profile-photo">
          <img src="${user.image}" alt="">
        </div>
        <div class="username">
          <h5>${user.name}</h5>
          <p class="captions">${user.caption}</p>
        </div>
      `;
      container.appendChild(div);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("recent-activity-container");
  
    recentActivities.forEach(user => {
      const div = document.createElement("div");
      div.classList.add("recent-activity");
      div.innerHTML = `
        <div class="profile-photo">
          <img src="${user.image}" alt="">
        </div>
        <div class="paragraph">
          <p class="captions2">${user.activity}</p>
        </div>
      `;
      container.appendChild(div);
    });
  });

  function setupToggleButton() {
  const toggleBtn = document.querySelector('.toggle_btn');
  const dropdownMenu = document.querySelector('.dropdown_menu');

  if (!toggleBtn || !dropdownMenu) return;

  toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
  });
}

// Jalankan saat dokumen siap
document.addEventListener('DOMContentLoaded', setupToggleButton);
