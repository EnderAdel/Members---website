var about = document.getElementById("about"), creations = document.getElementById("creations"), history_ = document.getElementById("history"), contact = document.getElementById("contact");
window.addEventListener("hashchange", function(){
  var hash = window.location.hash;
  if(hash == "about"){
    about.scrollIntoView();
  }else if(hash == "creations"){
    creations.scrollIntoView();
  }else if(hash == "history"){
    history_.scrollIntoView();
  }else if(hash == "contact"){
    contact.scrollIntoView();
  }
  document.getElementsByClassName("menu")[0].removeAttribute("show");
  document.getElementById("hideMenuButton").style.display = "none";
  document.getElementById("showMenuButton").removeAttribute("style");
});
window.onscroll = function(){
  var a = {
    "about": about.getBoundingClientRect().top,
    "creations": creations.getBoundingClientRect().top,
    "history": history_.getBoundingClientRect().top,
    "contact": contact.getBoundingClientRect().top
  };
  var f = false;
  for(var i in a){
    if(a[i] <= 50){
      var p_ = document.querySelectorAll(".option.selected");
      if(p_.length != 0){
        p_[0].classList.remove("selected");
        p_[1].classList.remove("selected");
      }
      b = document.getElementsByName(i);
      b[0].classList.add("selected");
      b[1].classList.add("selected");
    }else if(window.scrollY <= window.innerHeight - 100){
      var p_ = document.querySelectorAll(".option.selected");
      if(p_.length != 0){
        p_[0].classList.remove("selected");
        p_[1].classList.remove("selected");
      }
    }
  }

  var v = (window.scrollY/window.screen.height)*1.6;
  button.style.opacity = 1 - ((v < 1) ? v : 1);
  //document.querySelector("div.m h1.m").offsetTop
  //if(window.scrollY >= window.screen.height*0.38)
  if(window.scrollY >= topV)
    bar.setAttribute("show", "");
  else
    bar.removeAttribute("show");
};
document.getElementById("down").addEventListener("click", function(){
  var p_ = document.querySelectorAll(".option.selected");
  if(p_.length != 0){
    p_[0].classList.remove("selected");
    p_[1].classList.remove("selected");
  }
  b = document.getElementsByName("about");
  b[0].classList.add("selected");
  b[1].classList.add("selected");
});