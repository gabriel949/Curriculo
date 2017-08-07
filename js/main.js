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

