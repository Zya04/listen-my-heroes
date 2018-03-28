 window.onload = function (){
 		 var all_img = document.querySelectorAll('.all_frame');
 		 var all_men = document.querySelectorAll('.men');
 		 var all_women = document.querySelectorAll('.women');
 		 var blockDescription = document.querySelector('#description');

 		 blockDescription.style.display='none',

		document.querySelector('#ippo').onclick = function(){
			blockDescription.innerHTML = 'Ippo, le seul homme a m\'avoir motivé a faire du sport juste pour ça c\'est un exploit. ';
			blockDescription.style.display ='inherit';
		};
		document.querySelector('#vegeta').onclick =function (){
			blockDescription.innerHTML='Vegeta le prince du peuple des sayajins, je retiens surtout son sacrifice contre majin buu.'; 
			blockDescription.style.display ='inherit';

		};
		document.querySelector('#mom').onclick = function(){
			blockDescription.innerHTML='Ma mere m\'a mis au monde il n\'y a rien de plus a dire.';
			blockDescription.style.display ='inherit';
		};
		document.querySelector('#erza').onclick = function(){
			blockDescription.innerHTML='Me juge pas Fairy tail était grave bien à ses débuts.';
			blockDescription.style.display ='inherit';
		};
		document.querySelector('#btn_1').onclick = function (){
			blockDescription.style.display ='none'; 
		};
		document.querySelector('#btn_2').onclick = function(){
			for (i=0; i<all_men.length;i++){
				all_men[i].style.display ='none';
				all_women[i].style.display = 'inherit';
			}	
		};
		document.querySelector('#btn_3').onclick = function(){
			for (i=0; i<all_women.length; i++){
				all_women[i].style.display = 'none';
				 all_men[i].style.display = 'inherit';
			}
		};
		document.querySelector('#btn_4').onclick = function(){
			for(i=0;i<all_img.length+1;i++){
				all_men[i].style.display='inherit';
				all_women[i].style.display='inherit';
			}
		};
 };   