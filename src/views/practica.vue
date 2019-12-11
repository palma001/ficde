
<!--
  ASI ES ES LA ESTRUCTURA DE UN ARCHIVO VUE
  EL CODIGO QUE VAYA ADENTRO DE ESTOS SIGNOS SON
  ETIQUETAS HTML COMO POR EJEMPLO:
  <h1></h1>
  <h2></h2>
  <h3></h3>
  <p></p>
  <div></div>
  <strong></strong>

  ASI ES ES LA ESTRUCTURA DE UN ARCHIVO VUE
  EL CODIGO QUE VAYA ADENTRO DE ESTOS SIGNOS SON
  ETIQUETAS HTML COMO POR EJEMPLO

  ASI ES ES LA ESTRUCTURA DE UN ARCHIVO VUE
  EL CODIGO QUE VAYA ADENTRO DE ESTOS SIGNOS SON
  ETIQUETAS HTML COMO POR EJEMPLO
-->

<template>
  <div class="contenedor">
    <h1 class="title">Bienvenidos a mi pagina {{storage.getItems(email)}}</h1>
    <p class="parTop">ASI ES LA ESTRUCTURA DE UN ARCHIVO VUE
    EL CODIGO QUE VAYA ADENTRO DE ESTOS SIGNOS SON
    ETIQUETAS HTML COMO POR EJEMPLO</p>

    <p class="parBottom">ASI ES LA ESTRUCTURA DE UN ARCHIVO VUE
    EL CODIGO QUE VAYA ADENTRO DE ESTOS SIGNOS SON
    ETIQUETAS HTML COMO POR EJEMPLO</p>

    <div class="footer1">
      <div class="logoFooter">
        <a href="#">
          <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/67086497_1105623839622371_7827821696483590144_n.jpg?_nc_cat=100&_nc_oc=AQnFNUj7LjpcwutGveGIvupYLORvYr1mLcyz_rma8nc_RVJVn16r7wLUVpZJYBsLfTE&_nc_ht=scontent-mia3-1.xx&oh=a6cf2cb238e26f480e6cdb2711548de8&oe=5DEDFE65" alt="" />
        </a>
      </div>
      <ul>
        <a href="https://facebook.com/palma001">
          <li>Facebook <strong>Ana</strong></li>
        </a>
        <a href="https://twitter.com/palma001">
          <li>Twitter <strong>Ana</strong></li>
        </a>
        <a href="https://gmail.com/palma001">
          <li>Email <strong>Ana@gmail.com</strong></li>
        </a>
      </ul>
    </div>
  </div>
</template>

<!--
  LUEGO DENTRO DE ESTAS ETIQUETAS VIENE CODIGO
  JAVASCRIPT QUE ES DONDE VIENE LA MAGIA
-->
<script>
import { db, auth } from '../config/conectionDb'
export default {
  /**
   * ADENTRO DE DATA ES DONDE SE DECLARAN TODAS LAS
   * VARIABLES DE FORMA GLOBAL
   * CUANDO DIGO GLOBAL ES QUE LAS PUEDES USAR EN TODO EL
   * ARCHIVO VUE
   */
  data () {
    /**
     * HAY DIFERENTES TIPOS DE VARIABLES SON LAS SIGUENTES
     */
    return {
      /**
       * AQUI TENEMOS UNA VARIABLE DE TIPO STRING
       */
      name: 'hola'
    }
  },
  created () {
    this.conectionFirebase()
    this.listUser()
  },
  methods: {
    conectionFirebase () {
      db.collection('users').add({
        name: 'Paris'
      })
        .then(res => {
          // console.log(res)
        })
    },
    listUser () {
      let listaUsers = []
      db.collection('users').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          listaUsers.push(doc.data())
        })
        console.log(listaUsers)
      })
    }
  }
}
</script>
<style>
  .contenedor {
    background: rgba(0,0,0,0.2);
    padding: 20px;
    color: teal;
    border-radius: 10px;
    border-left: solid purple 3px;
    border-top: solid purple 1px;
    border-right: solid purple 3px;
    border-bottom: solid purple 1px;
  }
  /* Parrafo de arriba */
  .parTop {
    font-size: 15px;
    font-weight: bold;
  }
  /* Efectos hover del parrafo de arriba */
  .parTop:hover {
    color: blueviolet;
    font-size: 20px;
    cursor: pointer;
  }
  /* Parrafo de abajo */
  .parBottom {
    font-weight: bold;
  }
  /* Efectos hover del parrafo de abajo */
  .parBottom:hover {
    color: blueviolet;
    font-size: 20px;
    cursor: pointer;
  }
  /* footer */
  .footer1 {
    background: teal;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .footer1 ul {
    margin-top: 10px;
  }
  .footer1 ul li {
    display: inline;
    margin-left: 15px;
  }
  .footer1 ul a {
    text-decoration: none;
    color: white;
  }
  .footer1 ul li strong {
    margin-left: 5px;
  }
  .logoFooter {
    float: left;
    margin-left: 20px;
  }
  .logoFooter img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
</style>
