// const propiedad1 = "edad";

// const valor =20;

// const propiedad2="trabajador";
// const persona ={ nombre: "pepe",[propiedad1]: valor,[propiedad2]: true};

// console.log(persona);

// const propiedades = [ "nombre","edad","trabajador"];
// const valores =["luis",43,true];

// const cliente={ nombre: "pepe",saldo:100, credito:true};
// for(const key in cliente)
//     console.log(`propiedad ${key} valor ${cliente[key]}`);

// console.log("nombre" in cliente);

// const copia1={};
// Object.assign(copia1,cliente);
// console.log(copia1);
// console.log(cliente);
// copia1.edad=20;
// console.log(copia1);
// console.log(cliente);



// const copia2={apellido: "Garcia", ...cliente};
// console.log("Antes de hacer cambios");
// console.log(copia2);
// console.log(cliente);
// console.log("despues de hacer cambios");
// copia2.edad=20;
// console.log(copia2);
// console.log(cliente);
// let copia3 = Object.assign(cliente);
// console.log(copia3);


// let copia4={};

// Object.assign(copia4,cliente);
// console.log(copia4);

//con object.assign se hace una copia que apunta a otro lugar

// const person ={ name: "paco", age :30};
// const student = { course: "A"};
// const teacher = { name: "alfredo"};

// console.log(Object.getPrototypeOf(person)=== Object.getPrototypeOf(student));

// console.log(student.name);

// Object.setPrototypeOf(student,person);
// Object.setPrototypeOf(teacher,student);
// console.log(student.name);

// student.name="pepe";
// console.log(student.name);
// console.log(person.name);
// console.log(teacher.name);
// console.log(teacher.age);

// const person={name: "pepe" ,age: 23};
// const student =Object.create(person);//creando objeto delegado
// student.course="A";
// const customer= Object.create(person);
// customer.sales=1230;
// console.log(person);//pepe 23
// console.log(student);//A
// console.log(customer);// 1230
// console.log(customer.name);//pepe

// for(const key in student){
//     console.log(`${key}: ${student[key]}`)
// }
// // const person={ name:"pepe",age:23};


// const person={name: "pepe" ,age: 23};

// const data={height:160};
// const student =Object.assign({},person,data);//se crea un objeto nuevo indepndiente
// console.log(person);
// console.log(student);
// student.nota=7;
// console.log(person);
// console.log(student);
// console.log(data);

const persona={

    visualizar: function(){
        console.log(this);
    }
}
const estudiante =Object.create(persona);
estudiante.nombre="pedro";
estudiante.visualizar();

function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}

const persona= new Persona("pepe",23);
