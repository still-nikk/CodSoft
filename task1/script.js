const divContainer = document.querySelector("#menuBox");
let isClicked = true;

let showOrHide = function () {
  if (isClicked) {
    divContainer.style.height = "20rem";
    divContainer.style.opacity = "1";
    divContainer.style.cursor = "pointer";
    divContainer.style.pointerEvents = "auto"; // Enable pointer events
    isClicked = false;
  } else {
    divContainer.style.height = "0";
    divContainer.style.opacity = "0";
    divContainer.style.cursor = "default";
    divContainer.style.pointerEvents = "none"; // Disable pointer events
    isClicked = true;
  }
};


const projectImages = document.querySelectorAll(".projectImage");

projectImages.forEach((projectImage) => {
  const coverInfo = projectImage.nextElementSibling;

  projectImage.addEventListener('mouseenter', () => {
    coverInfo.classList.add('active');
  });

  projectImage.addEventListener('mouseleave', () => {
    coverInfo.classList.remove('active');
  });
});



const resume = document.querySelector('.downloadResume');

resume.addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "./resume.pdf"; // Replace with the actual path to your resume file
  link.download = "resume.pdf"; // The name of the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});