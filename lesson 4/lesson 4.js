//1 task------------------------------

//let a = prompt('Enter number');
//(a %2 == 0) ? 'Число парне' : 'Число не парне';

//2 task--------------------------------

//let a = prompt('Enter number №1');
//let b = prompt('Enter number №2');
//let x;
//let y;
//if (a>10){
//	x = a-10;
//}else if (a-10 ==0){
//	x = 0;
//}else{
//	x = 10-a;
//}
//if (b>10){
//	y = b-10;
//}else if (b - 10 == 0){
//	y = 0;
//}else{
//	y = 10-b;
//}
//
//	if(x>y){
//		console.log('Число '+b+ ' є ближче до 10, ніж число '+a);
//	}else if (x == y){
//		console.log ('Числа '+a+ ' і ' +b+ ' є однаково рівні до 10');
//	}else {
//		console.log('Число '+a+ ' є ближче до 10, ніж число '+b);
//	}

//3 task-----------------------------

//for(i=1000;i<10000;i+=3){
//	console.log(i);
//}


//4 task---------------------------

//let a = 1;
//let b = 0;
//for(a; b < 55; a += 2){
//	b++;
//	console.log(a);
//}

//6 task-----------------------------------

//for(i=90; i>=0; i -=5){
//	console.log(i);
//}


//7 task-------------------------------------

//let a= 2;
//let b =0;
//for(a; b < 20; a*=2){
//	b++;
//	console.log(a);
//}

//5 task----------------------------------------

let a = prompt('Введіть число a');
a !==0;
let b = prompt('Введіть число b');
let c = prompt('Введіть число c');

if (a !=0){
let D = b*b - 4*a*c; //знаходимо дискримінант
console.log(D);
	
if(D>0){
	let x1 = ((-b + (Math.sqrt(D))) / (2 * a)); 
	let x2 = ((-b - (Math.sqrt(D))) / (2 * a));
	console.log('У квадратного рівняння є два  корені '+x1+' і '+x2+'.');
} else if (D=0){
	let x = (-b / (2 * a));
	console.log('Корінь квадратний = '+x);
}else {
	console.log('Дійсних коренів нема');
}

}else{
	console.log('Число a не може дорівнювати '+a);
}
















