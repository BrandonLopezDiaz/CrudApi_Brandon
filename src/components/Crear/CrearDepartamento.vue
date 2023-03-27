<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">user:</label>
              <input
                type="text"
                class="form-control"
                name="user"
                v-model="usuario.user"
                aria-describedby="helpId"
                id="user"
                placeholder="User"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el user del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">password:</label>
              <input
                type="text"
                class="form-control"
                name="password"
                id="password"
                v-model="usuario.password"
                aria-describedby="helpId"
                placeholder="Password"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el password del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">fechaRegistro:</label>
              <input
                type="text"
                class="form-control"
                name="fechaRegistro"
                id="fechaRegistro"
                v-model="usuario.fechaRegistro"
                aria-describedby="helpId"
                placeholder="FechaRegistro"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de registro</small
              >
            </div>
            <div class="form-group">
              <label for="">fkEmpleado:</label>
              <input
                type="text"
                class="form-control"
                name="fkEmpleado"
                id="fkEmpleado"
                v-model="usuario.fkEmpleado"
                aria-describedby="helpId"
                placeholder="FkEmpleado"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el empleado de usuario</small
              >
            </div><div class="form-group">
              <label for="">fkRol:</label>
              <input
                type="text"
                class="form-control"
                name="fkRol"
                id="fkRol"
                v-model="usuario.fkRol"
                aria-describedby="helpId"
                placeholder="FkRol"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el rol</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success">Agregar</button>
              <router-link to="/dashboard" class="btn btn-danger"
                >Cancelar</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import {RouterView} from 'vue-router';
  export default {
    data() {
      return {
        usuario: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.usuario);
  
        var datosEnviar = {
          user: this.usuario.user,
          password: this.usuario.password,
          fechaRegistro: this.usuario.fechaRegistro,
          fkEmpleado: this.usuario.fkEmpleado,
          fkRol: this.usuario.fkRol,
        };
  
        axios
          .post("https://localhost:7241/Usuarios", datosEnviar)
          .then((result) => {
            console.log(result.data.result);
            window.location.href = "dashboard";
          });
      },
    },
  };
  </script>