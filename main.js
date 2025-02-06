const slidesData = {
    personalInfo: [
        { src: "suit1.jpg", caption: "Personal Info ", description: "I am Chelz Kyzlee D. Agnote" },
        { src: "suit2.jpg", caption:  "Personal Info ", description: "I am 18 yrs old, and born on October 27,2006" },
        { src: "suit3.jpg", caption: "Personal Info ", description: "I was born in Cavite City" },
        { src: "1x1.jpg", caption: "Personal Info ", description: "Thank you for getting to know me!" }
    ],
    education: [
        { src: "grad.jpg", caption: "My SHS graduation pic", description: "I graduated SHS at St.Joseph College of Cavite Inc." },
        { src: "intra.jpg", caption: "Educational Trip", description: "We had outside the school trips during my shs year!" },
        { src: "honor.jpg", caption: "With highest honors", description: "During my time at SJCCI, I accumulated different awards and certificates!" },
        { src: "report.jpg", caption: "Baste Cavite", description: "I am currently taking BSIT at SSCRdC" }
    ],
    skills: [
        { src: "code.jpg", caption: "Coding is fun!", description: "I am currently studying to be a Full-Stack Web Developer" },
        { src: "html.jpg", caption: "HTML skills", description: "I have expertise on using different HTML elements" },
        { src: "css.png", caption: "CSS skills", description: "I can style using CSS" },
        { src: "js.png", caption: "JS skills", description: "I can create interactive webpages!" }
    ],
    hobbies: [
        { src: "noy.jpg", caption: "I am a Cat lover!", description: "This is nonoy! Our family cat" },
        { src: "ribs.jpg", caption: "I also love to eat", description: "Ribs is one of my many favorite foods" },
        { src: "nabita.jpg", caption: "Nabi", description: "Meet Nabi!" },
        { src: "badminton.jpg", caption: "Playing Badminton", description: "I play Badminton in my free time" }
    ]
};

function updateSlide(category) {
    const slide = slidesData[category][currentSlides[category]];
    document.getElementById(`${category}-image`).src = slide.src;
    document.getElementById(`${category}-caption`).innerText = slide.caption;
    document.getElementById(`${category}-description`).innerText = slide.description;
}

const currentSlides = { personalInfo: 0, education: 0, skills: 0, hobbies: 0 };

function prevSlide(category) {
    currentSlides[category] = (currentSlides[category] - 1 + slidesData[category].length) % slidesData[category].length;
    updateSlide(category);
}

function nextSlide(category) {
    currentSlides[category] = (currentSlides[category] + 1) % slidesData[category].length;
    updateSlide(category);
}