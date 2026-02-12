
// Event Propagation in Javascript 

<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>




document.getElementById("grandparent")
  .addEventListener("click", () => {
    console.log("Grandparent clicked");
  });

document.getElementById("parent")
  .addEventListener("click", () => {
    console.log("Parent clicked");
  });

document.getElementById("child")
  .addEventListener("click", () => {
    console.log("Child clicked");
  });
