var idade= 70
if(idade < 18){
    console.log('Nao vota')
} else{
    if( idade < 18 || idade > 65){
        console.log('voto opcional')
    }
    else if(idade >= 18){
        console.log('Voto obrigatorio')
    }
}