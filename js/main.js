$.ajax({
	method: 'get',
	url: 'https://api.github.com/users/gabriel949/repos',
	success: function (retorno) {

		function createComponent(data) {
			console.log(data);
			return data.map(e =>

				`
		<div class="github">
		<h4 class="nameGit">${e.name}</h4>
		<p class="language">${e.language}</p>
		<hr class="linha"/>
		 <a href="${e.html_url}" target="_blank">Visit</a>  
		</div>
		`
			).join('');


		}
		function renderNames(retorno, element) {
			const markup = createComponent(retorno);
			element.innerHTML = markup;
		}


		const git = document.getElementById('git');

		renderNames(retorno, git);
	}
});



new WOW().init();
var ele = $("#conhec");
var once = false;

window.addEventListener('scroll', () => {
	var distance = $(ele).offset().top - $(window).scrollTop();

	if (!once) {
		if (distance <= 390) {
			$('progress').each(function () {
				var max = $(this).val();
				$(this).val(0).animate({ value: $(this).data("valueto") }, { duration: 2000, easing: 'easeOutCirc' });
			});
			once = true;
		}
	}

});
var logoEl = document.getElementById('logo');

setTimeout(function () {
    
  logoEl.setAttribute('class', 'trace');
    
}, 50);

// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#myNavbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});



