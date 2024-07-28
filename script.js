let clickedCard = null;
let preventClick = false;
let matches = 0;

const clickedSquare = function (e) {
  let target = e.currentTarget;
  if (
    preventClick ||
    target === clickedCard ||
    target.className.includes("done")
  ) {
    return;
  }

  target.className = target.className.replace("hidden", "").trim();
  target.className += " done";

  if (!clickedCard) {
    console.log(target.getAttribute("data-color"));
    console.log(clickedCard);
    clickedCard = target;
    console.log(target);
  } else if (clickedCard) {
    preventClick = true;
    if (
      clickedCard.getAttribute("data-color") ===
      target.getAttribute("data-color")
    ) {
      clickedCard = null;
      preventClick = false;
      matches++;
      console.log(matches);

      console.log("here");
      if (matches === 8) {
        alert("You Win!!!");
      }
    } else {
      console.log("two");
      setTimeout(() => {
        target.className = target.className.replace("done", "hidden");
        clickedCard.className = clickedCard.className.replace("done", "hidden");
        clickedCard = null;
        preventClick = false;
      }, 1000);
    }
  }
};
