window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 8%";
    document.getElementById("navbar").style.backgroundColor = "#fff";
  } else {
    document.getElementById("navbar").style.padding = "10px 8%";
    document.getElementById("navbar").style.backgroundColor = "#f8f9fa";
  }
}