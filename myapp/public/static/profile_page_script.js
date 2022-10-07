document.querySelector('.add_card_1').onclick = function() {
	document.querySelector('.add_card_menu').classList.toggle('hidden');
	document.querySelector('.add_card_1').classList.toggle('hidden');
}

document.querySelector('.add_card').onclick = function() {
	document.querySelector('.add_card_menu').classList.toggle('hidden');
	document.querySelector('.add_card_1').classList.toggle('hidden');
}

document.querySelector('#open_close_advanced_1').onclick = function() {
	document.querySelector('#arrow_1').classList.toggle('rotate_right');
	document.querySelector('#arrow_1').classList.toggle('rotate_down');
	document.querySelector('#advanced_1').classList.toggle('opacity_0');
}

document.querySelector('#open_close_advanced_2').onclick = function() {
	document.querySelector('#arrow_2').classList.toggle('rotate_right');
		document.querySelector('#arrow_2').classList.toggle('rotate_down');
		document.querySelector('#advanced_2').classList.toggle('opacity_0');
}

document.querySelector('#open_close_advanced_3').onclick = function() {
	document.querySelector('#arrow_3').classList.toggle('rotate_right');
	document.querySelector('#arrow_3').classList.toggle('rotate_down');
	document.querySelector('#advanced_3').classList.toggle('opacity_0');
}

let all_order_things = document.querySelectorAll('.profile_order_thing');
let open_order_things = document.querySelectorAll('#open');
let closed_order_things = document.querySelectorAll('#closed');

document.querySelector('.all').onclick = function() {
	for(let i = 0; i < all_order_things.length; i++) {
		all_order_things[i].classList.remove('opacity_0');
	}	
	document.querySelector('.all').style = "background-color: rgba(196, 196, 196, 0.5)";
	document.querySelector('.open').style = "background-color: rgba(255, 255, 255, 1)";
	document.querySelector('.closed').style = "background-color: rgba(255, 255, 255, 1)";
}

document.querySelector('.open').onclick = function() {
	for(let i = 0; i < open_order_things.length; i++) {
		open_order_things[i].classList.remove('opacity_0');
	}	
	for(i = 0; i < closed_order_things.length; i++) {
		closed_order_things[i].classList.add('opacity_0');
	}
	document.querySelector('.open').style = "background-color: rgba(196, 196, 196, 0.5)";
	document.querySelector('.all').style = "background-color: rgba(255, 255, 255, 1)";
	document.querySelector('.closed').style = "background-color: rgba(255, 255, 255, 1)";
}

document.querySelector('.closed').onclick = function() {
	for(let i = 0; i < closed_order_things.length; i++) {
		closed_order_things[i].classList.remove('opacity_0');
	}	
	for(i = 0; i < open_order_things.length; i++) {
		open_order_things[i].classList.add('opacity_0');
	}
	document.querySelector('.closed').style = "background-color: rgba(196, 196, 196, 0.5)";
	document.querySelector('.open').style = "background-color: rgba(255, 255, 255, 1)";
	document.querySelector('.all').style = "background-color: rgba(255, 255, 255, 1)";
}
