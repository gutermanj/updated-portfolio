// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

	$('.header-name').addClass('animated').delay(500).queue(function(next) {
		$('.header-name').removeClass('name-hidden');
		$('.header-name').addClass('bounceInRight');	
	});

	$('.header-text').addClass('animated').delay(1000).queue(function(next) {
		$('.header-text').removeClass('text-hidden');
		$('.header-text').addClass('bounceInRight');
	});

	$('.header-underline').addClass('animated').delay(1200).queue(function(next) {
		$('.header-underline').removeClass('text-hidden');
		$('.header-underline').addClass('bounceInRight');
	});
	
});

