<template>
  <router-link to="/crear" class="btn btn-warning">Crear Usuario</router-link>
    <div>
      <div class="card">
        <div class="card-header">Usuario</div>
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>pkUsuario</th>
                <th>user</th>
                <th>password</th>
                <th>fechaRegistro</th>
				        <th>fkEmpleado</th>
				        <th>fkRol</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.pkUsuario" v-on:click="editar(usuario.pkUsuario)">
                <td>{{ usuario.pkUsuario }}</td>
                <td>{{ usuario.user }}</td>
                <td>{{ usuario.password }}</td>
                <td>{{ usuario.fechaRegistro }}</td>
				        <td>{{ usuario.fkEmpleado }}</td>
                <td>{{ usuario.fkRol }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link to="/editar" class="btn btn-info">Editar</router-link>
                    <button
                      type="button"
                      v-on:click="borrarUsuario(usuario.pkUsuario)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >
                    </div>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        usuarios: [],
      };
    },
    created: function () {
      this.consultarUsuarios();
    },
    methods: {
      consultarUsuarios() {
        axios.get("https://localhost:7241/Usuarios").then((result) => {
          console.log(result.data.result);
          this.usuarios = result.data.result;
        });
      },
  
      borrarUsuario(pkUsuario) {
        console.log(pkUsuario);
        axios.delete("https://localhost:7241/Usuarios/" + pkUsuario);
        window.location.href = "dashboard";
      },
      editar(pkUsuario){
          this.$router.push("/editar/" + pkUsuario);
        }
    },
  };
  </script>