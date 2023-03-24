<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar usuario</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="">user:</label>
            <input type="text" class="form-control" name="user" v-model="form.user" aria-describedby="helpId" id="user"
              placeholder="User" />
            <small id="helpId" class="form-text" text-muted>Ingresa el user del usuario</small>
          </div>
          <div class="form-group">
            <label for="">password:</label>
            <input type="text" class="form-control" name="password" id="password" v-model="form.password"
              aria-describedby="helpId" placeholder="Password" />
            <small id="helpId" class="form-text" text-muted>Ingresa el password del usuario</small>
          </div>
          <div class="form-group">
            <label for="">fechaRegistro:</label>
            <input type="text" class="form-control" name="fechaRegistro" id="fechaRegistro" v-model="form.fechaRegistro"
              aria-describedby="helpId" placeholder="FechaRegistro" />
            <small id="helpId" class="form-text" text-muted>Ingresa la fecha de registro</small>
          </div>
          <div class="form-group">
            <label for="">fkEmpleado:</label>
            <input type="text" class="form-control" name="fkEmpleado" id="fkEmpleado" v-model="form.fkEmpleado"
              aria-describedby="helpId" placeholder="FkEmpleado" />
            <small id="helpId" class="form-text" text-muted>Ingresa el empleado de usuario</small>
          </div>
          <div class="form-group">
            <label for="">fkRol:</label>
            <input type="text" class="form-control" name="fkRol" id="fkRol" v-model="form.fkRol" aria-describedby="helpId"
              placeholder="fkRol" />
            <small id="helpId" class="form-text" text-muted>Ingresa el rol</small>
          </div>

          <br />

          <div class="btn-group" role="group">
            <button type="submit" class="btn btn-success" v-on:click="editar()"><router-link
                to="/dashboard">Editar</router-link></button>
            <router-link to="/dashboard" class="btn btn-danger">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RouterView } from 'vue-router';
export default {
  data() {
    return {
      usuario: null,
      form: {
        "user": "",
        "password": "",
        "fechaRegistro": "",
        "fkEmpleado": "",
        "fkRol": ""
      }
    };
  },
  methods: {
    editar() {
      axios.put("https://localhost:7241/Usuarios/" + this.usuario, this.form)
        .then(data => {
          console.log(data);
        })
    }
  },
  mounted: function () {
    this.usuario = this.$route.params.pkUsuario;
    console.log(this.usuario);
    axios.get("https://localhost:7241/Usuarios/" + this.usuario)
      .then(datos => {
        console.log(datos);
        this.form.user = datos.data.value.result.user;
        this.form.password = datos.data.value.result.password;
        this.form.fechaRegistro = datos.data.value.result.fechaRegistro;
        this.form.fkEmpleado = datos.data.value.result.fkEmpleado;
        this.form.fkRol = datos.data.value.result.fkRol;
        console.log(this.form);
      })
  }
};
</script>