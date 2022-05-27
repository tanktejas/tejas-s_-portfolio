AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHi9ocpnFOxGw/company-logo_200_200/0/1642407272635?e=1661990400&v=beta&t=9zBJl37x3K0t_-DYXcHK1swoH_9Mo5kYeblPifOiTl8",
    place: "Passdn",
    time: "(April, 2022 - present)",
    desp: "<li>Working with real time project and solving real time problems.</li> <li>Working with React and firebase build projects for clients.</li><li>Delveloped salon app for barbers shop management and used react as a front-end and firebase as a database.</li>",
  },
  {
    title: "Open Source Contributor",
    cardImage: "https://avatars.githubusercontent.com/u/39153675?s=280&v=4",
    place: "GSSOC",
    time: "(Mar - May, 2022)",
    desp: "<li>Worked with Open source project..</li><li>Worked on Community Websites, Algorithms project and fixed bugs and added awesome Algorithms..</li><li>Explored React, firebase, nodejs, expressjs and Algorithms.</li><li>Added some amazing project in community.</li>",
  },
  {
    title: "Web Master",
    cardImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XNL9MwLSZ_49bHcCKisP0nWpakzfzlLvyU7yicMgqnlfj4K5-3kVQc-C3mNoq9bel2M&usqp=CAU",
    place: "IEEE BVM SB",
    time: "(Jan - Present, 2022)",
    desp: "<li>Worked with IEEE BVM SB website and manage all its fetures.</li><li>Worked with React, Php, and Mysql.</li><li>On Each IEEE Event Develop Seperate Website in team.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  // {
  //   title: "GirlScript Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/1.jpg",
  //   description:
  //     "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  // },
  // {
  //   title: "StudentCode-in 2020",
  //   cardImage: "assets/images/experience-page/2.jpg",
  //   description:
  //     "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  // },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Smart India Hackathon",
    subtitle: "Participant",
    image: "https://noticedash.com/wp-content/uploads/2022/03/sih.png",
    desp: "<li>Participant of selected team on our college.</li><li>Building Scholarship Website which consist all scholarship of india. Solving real life problem help student to get all information about scholarship at one place. </li><li>Tech-Stack :- Reactjs, Nodejs, MongoDB, Firebase, AWS.</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
