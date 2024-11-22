const app = new Vue({
    el: "#app",
    data: {
        nombre: "",
        apellidos: "",
        telefono: "",
        correo: "",
    },
});

const cabecera = new Vue({
    el: "#cabecera",
    data: {
        nombre: "Jordan",
        apellidos: "Carvajal",
        rol: "Ingeniero en informatica",
        foto:"https://st.depositphotos.com/1158045/3239/i/450/depositphotos_32391649-stock-photo-businessman-outdoor-in-the-city.jpg",
    },
});

const contenidoCV = new Vue({
    el: "#contenidoCV",
    data: {
        carta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum mollitia eligendi dolore minima adipisci magni repellendus veniam. Mollitia distinctio ab ea praesentium quaerat error modi explicabo autem tempore accusamus.",
        habilidades: "Habilidad 1, Habilidad 2, Habilidad 3",
        correo: "jcarvajal@gmail.com",
        telefono: " +569 30458517",
        linkedin: "Perfil en Linkedin",
        direccion: "Puente Alto",
        trabajos: [
            {empresa: 'JCP LTDA', anio: '2013', descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum mollitia eligendi dolore minima adipisci magni repellendus veniam. Mollitia distinctio ab ea praesentium quaerat error modi explicabo autem tempore accusamus."},
            {empresa: 'Conytec consultores SPA.', anio: '2018', descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum mollitia eligendi dolore minima adipisci magni repellendus veniam. Mollitia distinctio ab ea praesentium quaerat error modi explicabo autem tempore accusamus."},
            {empresa: 'Entel Empresas de Contact Center', anio: '2021', descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum mollitia eligendi dolore minima adipisci magni repellendus veniam. Mollitia distinctio ab ea praesentium quaerat error modi explicabo autem tempore accusamus."}
        ],
        educacion: [
            {titulo: 'Ingenieria en informatica', institucion: 'Universidad Tecnológica de chile (INACAP)', anios: '2013 - 2018'},
        ]
    }
});