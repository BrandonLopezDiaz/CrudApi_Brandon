<template>
    <router-link to="/crearPuesto" class="btn btn-warning">Crear puesto</router-link>
    <div>
        <div class="card">
            <div class="card-header">Puestos</div>
            <div class="card_body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>pkpuesto</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="puesto in puesto" :key="puesto.pkpuesto"
                            v-on:click="editar(puesto.pkpuesto)">
                            <td>{{ puesto.pkpuesto }}</td>
                            <td>{{ puesto.nombre }}</td>
                            <td>
                                <div class="btn-group" role="label" aria-label="">
                                    <router-link to="/editar" class="btn btn-info">Editar</router-link>
                                    <button type="button" v-on:click="borrarDepartamento(puesto.pkpuesto)"
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
            puesto: [],
        };
    },
    created: function () {
        this.consultarPuestos();
    },
    methods: {
        consultarPuestos() {
            axios.get("https://localhost:7241/Puesto").then((result) => {
                console.log(result.data.result);
                this.puesto = result.data.result;
            });
        },

        borrarDepartamento(pkpuesto) {
            console.log(pkpuesto);

            axios.delete("https://localhost:7241/Puesto/" + pkpuesto);
            window.location.href = "dashboard";
        },
        editar(pkpuesto) {
            this.$router.push("/editardepartamento/" + pkpuesto);
        }
    },
};
</script>