function ver() 
{
       
    let noms = document.getElementById('nom').value;
    let aps1 = document.getElementById('aps').value;
    let pasw =document.getElementById('psw').value;
    let num=document.getElementById('num').value;
    let email=document.getElementById('email').value;
    let dep  = document.querySelector( 'input[name="t"]:checked').value;  
    document.write('Tu nombre es: ' + noms);
    document.write('<br> Tu Apellido es: ' + aps1);
    document.write('<br> La contraseña de su Pedido es :  ' + pasw );
    document.write('<br> El Numero de Pedido es: ' + num);
    document.write('<br> El email es: ' + email);
    document.write('<br> Su Pedido es: ' + dep);

}

function limpiar(control) 
{
    control.value = " ";
}