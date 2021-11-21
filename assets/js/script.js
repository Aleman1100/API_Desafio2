/*Cardinalidad (Lectura 4, P6) para crear consultorio y pacientes +
 Encapsulamiento para proteger datos(Lectura 3, P6).
*/

function Consultorio(nombre, pacientes){
    var _nombre = nombre;
    var _pacientes = pacientes || [];

    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getPacientes", {
        get: function(){
            return _pacientes;
        }
    });

    Object.defineProperty(this,"_setPacientes", {
        set: function(pacientes){
            _pacientes = pacientes;
        }
    });
};

function Paciente(nombre,edad,rut,diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this,"_getNombre",{
        get:function(){
            return _nombre;
        }
    });

    Object.defineProperty(this,"_setNombre",{
        set:function(nombre){
            _nombre = nombre;
        }
    });

    Object.defineProperty(this,"_getEdad",{
        get:function(){
            return _edad;
        }
    });

    Object.defineProperty(this,"_setEdad",{
        set:function(edad){
            _edad = edad;
        }
    });

    Object.defineProperty(this,"_getRut",{
        get:function(){
            return _rut;
        }
    });

    Object.defineProperty(this,"_setRut",{
        set:function(rut){
            _rut = rut;
        }
    });

    Object.defineProperty(this,"_getDiagnostico",{
        get:function(){
            return _diagnostico;
        }
    });

    Object.defineProperty(this,"_setDiagnostico",{
        set:function(diagnostico){
            _diagnostico = diagnostico;
        }
    });
};

/*Getters y setters para trabajar con los objetos protegidos
(Lectura 3, P10)*/

Consultorio.prototype.getNombre = function(){
    return this._getNombre;
};

Consultorio.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
};

Consultorio.prototype.getPacientes = function(){
    return this._getPacientes;
};

Consultorio.prototype.setPacientes = function(pacientes){
    this._setPacientes = pacientes;
};

Paciente.prototype.getNombre = function(){
    return this._getNombre;
};

Paciente.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
};

Paciente.prototype.getEdad = function(){
    return this._getEdad;
};

Paciente.prototype.setEdad = function(edad){
    this._setEdad = edad;
};

Paciente.prototype.getRut = function(){
    return this._getRut;
};

Paciente.prototype.setRut = function(rut){
    this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico;
};

Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico;
};

//Instanciar segun los constructores en base a la Cardinalidad (Lectura 4, P7 y P8)

let p1 = new Paciente('Alejandro', 34, '16453051-5', 'Miopia');
let p2 = new Paciente('Catalina', 29, '18338892-4', 'Astigmatismo');
let p3 = new Paciente('Samus', 6, '24789456-k', 'Gripe');

let c1 = new Consultorio('Pandamonium', [p1,p2,p3]);

//Modificacion de lo visto en clases, para busqueda de paciente. No logré hacer que despliegue la informacion sin hacer click en (...).
Consultorio.prototype.buscarPaciente = function(nombre) {
    console.table(this._getPacientes.filter((paciente) => paciente._getNombre == nombre))
};

c1.buscarPaciente("Samus");

//Busqueda de paciente con map.

Consultorio.prototype.buscarPaciente2 = function (nombre) {
	this._getPacientes
		.filter((paciente) => paciente._getNombre == nombre)
		.map((paciente) => {
            console.log(`Paciente encontrado:\nNombre: ${paciente._getNombre}, Edad: ${paciente._getEdad}, RUT: ${paciente._getRut}, Diagnostico: ${paciente._getDiagnostico}`)
		});
};

c1.buscarPaciente2("Samus");

//Mostrar todos los pacientes del consultorio.
Consultorio.prototype.globalPacientes = function (){
    this._getPacientes.map((paciente)=>{
        console.log(`\nNombre: ${paciente._getNombre}, Edad: ${paciente._getEdad}, RUT: ${paciente._getRut}, Diagnostico: ${paciente._getDiagnostico}\n`)
    });
};

c1.globalPacientes();