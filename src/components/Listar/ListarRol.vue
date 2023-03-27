<template>
    <router-link to="/crearRol" class="btn btn-warning">Crear rol</router-link>
    <div>
        <div class="card">
            <div class="card-header">Roles</div>
            <div class="card_body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>pkRol</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="rol in rol" :key="rol.pkRol"
                            v-on:click="editar(rol.pkRol)">
                            <td>{{ rol.pkRol }}</td>
                            <td>{{ rol.nombre }}</td>
                            <td>
                                <div class="btn-group" role="label" aria-label="">
                                    <router-link to="/editar" class="btn btn-info">Editar</router-link>
                                    <button type="button" v-on:click="borrarDepartamento(rol.pkRol)"
                                        class="btn btn-danger">
                                        Eliminar</button>
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
            rol: [],
        };
    },
    created: function () {
        this.consultarPuestos();
    },
    methods: {
        consultarPuestos() {
            axios.get("https://localhost:7241/Rol").then((result) => {
                console.log(result.data.result);
                this.rol = result.data.result;
            });
        },

        borrarDepartamento(pkRol) {
            console.log(pkRol);

            axios.delete("https://localhost:7241/Rol/" + pkRol);
            window.location.href = "dashboard";
        },
        editar(pkRol) {
            this.$router.push("/editardepartamento/" + pkRol);
        }
    },
};
</script>