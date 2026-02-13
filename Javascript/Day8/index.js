// Event Delegation in Javscript

<div id="container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  ...
  <button>100</button>
</div>;



// Normal way
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Clicked");
  });
});


// one listener on container
document.getElementById("container")
  .addEventListener("click", (event) => {
    console.log("Something clicked");
  });
