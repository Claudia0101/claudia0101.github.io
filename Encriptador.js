const codigoEncriptacion= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
let textoIngresadoUsuario= document.querySelector(".textoIngresadoUsuario");
let resultadoTexto=document.querySelector(".resultadoTexto")



function encriptar(tIngresado){
    tIngresado=tIngresado.toLowerCase();
    for(let i=0;i<codigoEncriptacion.length;i++){
        if(tIngresado.includes(codigoEncriptacion[i][0])){
            tIngresado=tIngresado.replaceAll(codigoEncriptacion[i][0],codigoEncriptacion[i][1])
        }
    }
    return tIngresado;
}
function encriptarTexto(){
    const texto =encriptar(textoIngresadoUsuario.value);
    resultadoTexto.value=texto;
    document.getElementById("imgMunecoYTexto").style.display = "none";
    document.getElementById("resultadoYCopiar").style.display="block";
    textoIngresadoUsuario.value="";
}

function desencriptar(tIngresado){
    tIngresado=tIngresado.toLowerCase();
    for(let i=0;i<codigoEncriptacion.length;i++){
        if(tIngresado.includes(codigoEncriptacion[i][1])){
            tIngresado=tIngresado.replaceAll(codigoEncriptacion[i][1],codigoEncriptacion[i][0])
        }
    }
    return tIngresado;

}
function desencriptarTexto(){
    const texto =desencriptar(textoIngresadoUsuario.value);
    resultadoTexto.value=texto;
    document.getElementById("imgMunecoYTexto").style.display = "none";
    document.getElementById("resultadoYCopiar").style.display="block";
    textoIngresadoUsuario.value="";
}
function copiar(){
    resultadoTexto.select()
    navigator.clipboard.writeText(resultadoTexto.value);
}