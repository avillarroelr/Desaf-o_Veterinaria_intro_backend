const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
    console.log('Cita registrada con exito!!!');
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log('Citas registradas en el sistema:', citas);
}

module.exports = {
    registrar,
    leer
};
