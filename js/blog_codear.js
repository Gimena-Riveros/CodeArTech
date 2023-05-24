function readMore(post) {
  let dots = document.querySelector(`.card[data-post="${post}"] .dots`);
  let moreText = document.querySelector(`.card[data-post="${post}"] .more`); 
  let btnText = document.querySelector(`.card[data-post="${post}"] .btnMoreLess`);

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Read more";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.textContent = "Read less"; 
      moreText.style.display = "inline";
  }
}