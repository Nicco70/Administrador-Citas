import { datosCita, nuevaCita } from "../funciones.js";

import { mascotaInput, sintomasInput, propietarioInput, fechaInput, horaInput, telefonoInput, formulario } from '../selectores.js';



class App {
    constructor() {
        this.initApp();
    }

    initApp() {
         // Registrar eventos
         mascotaInput.addEventListener('input', datosCita);
         propietarioInput.addEventListener('input', datosCita);
         telefonoInput.addEventListener('input', datosCita);
         fechaInput.addEventListener('input', datosCita);
         horaInput.addEventListener('input', datosCita);
         sintomasInput.addEventListener('input', datosCita);
 
         // Formulario para nuevas citas
         formulario.addEventListener('submit', nuevaCita);
    }
}

export default App;