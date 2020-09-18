const fs = require('fs');


let listarTabla = (base, limite) =>{
    return new Promise((resolve, reject)=>{
        if(!Number(base) || !Number(limite)){
            reject('NO se digitaron números');
            return;
        }
        let texto = ''; 
        for(let i=1; i<=limite;i++){
            texto += `${base}*${i}=${base*i} \n`;
        }
        resolve(texto); 
    })
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject)=>{
        if(!Number(base) || !Number(limite)){
            reject(`El valor introducido NO es un número`);
            return; 
        }
        let contenido = '';
        for(let i = 1; i<=limite; i++){
            let res = i * base; 
            contenido += `${base}*${i} = ${res}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) =>{
            if (err) reject (err); 
            else resolve(`La tabla ${base} con límite ${limite} ha sido creada!`);
        });
    });
}

module.exports ={
    crearArchivo,
    listarTabla
}


