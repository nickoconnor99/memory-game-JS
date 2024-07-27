let clickedCard = null;

const clickedSquare = function (e) {
  let target = e.currentTarget;
  if (target === clickedCard || target.className.includes("done")) {
    return;
  }

  target.className = target.className.replace("hidden", "").trim();
  target.className += " done";

  if (!clickedCard) {
    console.log(target.getAttribute("data-color"));
    console.log(clickedCard);
    clickedCard = target;
  } else if (clickedCard) {
    if (
      clickedCard.getAttribute("data-color") ===
      target.getAttribute("data-color")
    ) {
      console.log("same");
      clickedCard = null;
    } else {
      setTimeout(() => {
        target.className = target.className.replace("done", "hidden");
        clickedCard.className = clickedCard.className.replace("done", "hidden");
        clickedCard = null;
      }, 500);
    }
  }
};
