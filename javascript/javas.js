// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
	a.addEventListener("click", function () {
		navCollapse.classList.remove("show");
	})
})





// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
	if (document.documentElement.scrollTop > 20) {
		nav.classList.add("scroll-on");
	}
	else {
		nav.classList.remove("scroll-on");
	}
}



// counter-Design
document.addEventListener("DOMContentLoaded", () => {
	function counter(id, start, end, duration) {
		let obj = document.getElementById(id),
			current = start,
			range = end - start,
			increment = end > start ? 1 : -1,
			stop = Math.abs(Math.floor(duration / range)),
			timer = setInterval(() => {
				current += increment;
				obj.textContent = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stop);
	}
	counter("count1", 0, 1878, 3000);
	counter("count2", 65, 2138, 2500);
	counter("count3", 0, 2278, 3000);
	counter("count4", 36, 1765, 2500);
});