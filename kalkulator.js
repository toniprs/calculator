
function tambah(form) {
 a=eval(form.a.value)
 b=eval(form.b.value)
 c=eval(form.c.value)
 d=a+b+c
 form.hasil.value = d;
  
  
if (!a.checked == true) {}
  	alert("tolong diceklis");
  }
  
function kurang(form) {
 a=eval(form.a.value)
 b=eval(form.b.value)
 c=eval(form.c.value)
 d=a-b-c
 form.hasil.value=d
}


function kali(form) {
 a=eval(form.a.value)
 b=eval(form.b.value)
 c=eval(form.c.value)
 d=a*b*c
 form.hasil.value=d
}


function bagi(form) {
 a=eval(form.a.value)
 b=eval(form.b.value)
 c=eval(form.c.value)
 d=a/b/c
 form.hasil.value = d
}

var total=0;
function Update(form) {
	
 
    if (form.checked == true) { 
		total = Number(form.value); 
	}else{

		total =Number(form.value);
	}
 
	document.getElementById('total').value = total.toFixed(0);
}