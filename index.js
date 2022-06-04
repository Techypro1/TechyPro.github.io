let scrollDownEl = document.getElementById("scrollDown");
let scrollUpEl = document.getElementById("scrollUp");
let mainEl = document.getElementById("me");

let discordEl = document.getElementById("discord");
VANTA.WAVES({
  el: "#vanta-header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  shininess: 70.00,
  color: 0x0e001e,
  waveHeight: 30.00,
  waveSpeed: 0.45,
  zoom: 0.7
});
let blocking = false;
document.addEventListener("wheel", e => {
  lastWheel = performance.now()
  if (blocking) e.preventDefault();
  if (window.scrollY === 0 && Math.sign(e.deltaY) === 1) {
    e.preventDefault();
    window.scroll({ top: mainEl.offsetTop, left: 0, behavior: 'smooth' });
    blocking = true;
    setTimeout(() => { blocking = false; }, 300);
  }
  if (window.scrollY + e.deltaY < mainEl.offsetTop && Math.sign(e.deltaY) === -1) {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    blocking = true;
    setTimeout(() => { blocking = false; }, 300);
  }
}, { passive: false });
scrollDownEl.addEventListener("click", e => {
  window.scroll({ top: mainEl.offsetTop, left: 0, behavior: 'smooth' });
});
scrollUpEl.addEventListener("click", e => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
document.addEventListener("scroll", e => {
  if (window.scrollY > 40 && scrollDownEl.style.display !== "none") {
    scrollDownEl.style.display = "none";
  }
  else if (window.scrollY <= 40 && scrollDownEl.style.display === "none") {
    scrollDownEl.style.display = "block";
  }
  if (window.scrollY < 40 && scrollUpEl.style.display !== "none") {
    scrollUpEl.style.display = "none";
  }
  else if (window.scrollY >= 40 && scrollUpEl.style.display === "none") {
    scrollUpEl.style.display = "block";
  }
});
let discordMain = `<img src="discord.png" alt="Discord" class="social-icon">Discord`;
let discordInfo = `My discord is: Techy Pro#9620`;
let discordTimer;
let discordLastDown = 0;
function changeDiscord() {
  if (Date.now() - discordLastDown > 1500) return;
  clearTimeout(discordTimer);
  if (discordEl.innerHTML === discordMain) {
    discordEl.innerHTML = "My discord is: Techy Pro#9620";
    discordTimer = setTimeout(() => {
      discordEl.innerHTML = discordMain;
    }, 10000);
  }
  else {
    discordEl.innerHTML = `<img src="discord.png" alt="Discord" class="social-icon">Discord`;
  }
}
discordEl.addEventListener("mousedown", e => { discordLastDown = Date.now(); });
discordEl.addEventListener("mouseup", changeDiscord);
discordEl.addEventListener("touchstart", e => { discordLastDown = Date.now(); })
discordEl.addEventListener("touchend", changeDiscord)

var suprise = ('Techy Pro: If you find this your great also you should subscribe me becuase you found this if you subscribed already thanks if your not then here is the link https://www.youtube.com/channel/UCOSW8LcDQw85RyhmdGN4UVw, Also if you find this dm me in discord id-Techy Pro#9620 , and also you can dm me in twitter- https://twitter.com/TechyProoffical');
console.warn(suprise);

var Warning = ("This is the offical website don't get scammed by fake websites so be careful");
console.warn(Warning);

//copy to clipboard
function copycb(){

var copyText = ('Techy Pro#9620');


navigator.clipboard.writeText(copyText);

//alert box

setTimeout(function() {prompt('Successfully copied to clipboard. Try pasting it here ↓.') }, 1000);
}
