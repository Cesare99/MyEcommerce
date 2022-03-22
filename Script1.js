// JavaScript source code


// function img(img){
// 	if("images/products" == true) {
// 			// window.open("Products.html");
// 		}
// 	window.open("Products.html");
// }

let products = [

	{
		p1: "url('images/products/p1.jpg')",
		title: "Plain T-Shirt",
		description: "A Plain TShirt perfect for summer!",
		price: "from $9.99"
	},
	{
		p2: "url('images/products/p2.jpg')",
		title: "Plain T-Shirt",
		description: "A Plain TShirt perfect for summer!",
		price: "from $9.99"
	},
	{
		p3: "url('images/products/p3.jpg')",
		title: "Plain T-Shirt",
		description: "A Plain TShirt perfect for summer!",
		price: "from $9.99"
	},
	{
		p4: "url('images/products/p4.jpg')",
		title: "Plain T-Shirt",
		description: "A Plain TShirt perfect for summer!",
		price: "from $9.99"
	},
	{
		p5: "url('images/products/p5.jpg')",
		title: "Plain T-Shirt",
		description: "A Plain TShirt perfect for summer!",
		price: "from $9.99"

	},
	{
		p6: "url('images/products/p6.jpg')",
		title: "Plain T-Shirt",
		description: "A Plain TShirt perfect for summer!",
		price: "from $9.99",
	
	}];


/*products.forEach(element => console.log(JSON.stringify(element)));
*/

let button = document.querySelectorAll(".button");


if (button) {
	button.forEach(function(image) {
		image.onclick = function () {
			alert("It works");
		}
	});
}


/*function myFunction(image) {
	button.forEach(image => {
		window.open('prod.html');
	})
};*/

