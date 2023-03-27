<template>
    <router-link to="/crearEmpleados" class="btn btn-warning">Crear un empleado</router-link>
    <div>
        <div class="card">
            <div class="card-header">Empleados</div>
            <div class="card_body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>PkEmpleado</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Direccion</th>
                            <th>Ciudad</th>
                            <th>FkPuesto</th>
                            <th>FkDepartamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.pkEmpleado"
                            v-on:click="editar(empleado.pkEmpleado)">
                            <td>{{ empleado.pkEmpleado }}</td>
                            <td>{{ empleado.nombre }}</td>
                            <td>{{ empleado.apellidos }}</td>
                            <td>{{ empleado.direccion }}</td>
                            <td>{{ empleado.ciudad }}</td>
                            <td>{{ empleado.fkPuesto }}</td>
                            <td>{{ empleado.fkDepartamento }}</td>

                            <td>
                                <div class="btn-group" role="label" aria-label="">
                                    <router-link to="/editar" class="btn btn-info">Editar</router-link>
                                    <button type="button" v-on:click="borrarEmpleado(empleado.pkEmpleado)"
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
            empleados: [],
        };
    },
    created: function () {
        this.consultarEmpleados();
    },
    methods: {
        consultarEmpleados() {
            axios.get("https://localhost:7241/Empleado").then((result) => {
                console.log(result.data.result);
                this.empleados = result.data.result;
            });
        },

        borrarEmpleado(pkEmpleado) {
            console.log(pkEmpleado);

            axios.delete("https://localhost:7241/Empleado/" + pkEmpleado);
            window.location.href = "dashboard";
        },
        editar(pkEmpleado) {
            this.$router.push("/editar/" + pkEmpleado);
        }
    },
};
</script>