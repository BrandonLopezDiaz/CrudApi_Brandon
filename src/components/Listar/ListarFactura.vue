<template>
    <router-link to="/crearFactura" class="btn btn-warning">Crear factura</router-link>
    <div>
        <div class="card">
            <div class="card-header">Facturas</div>
            <div class="card_body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>PkFactura</th>
                            <th>RazonSocial</th>
                            <th>Fecha</th>
                            <th>RFC</th>
                            <th>FkCliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="factura in factura" :key="factura.pkFactura" v-on:click="editar(factura.pkFactura)">
                            <td>{{ factura.pkFactura }}</td>
                            <td>{{ factura.razonSocial }}</td>
                            <td>{{ factura.fecha }}</td>
                            <td>{{ factura.rfc }}</td>
                            <td>{{ factura.fkCliente }}</td>
                            <td>
                                <div class="btn-group" role="label" aria-label="">
                                    <router-link to="/editar" class="btn btn-info">Editar</router-link>
                                    <button type="button" v-on:click="borrarCliente(factura.pkFactura)"
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
import { RouterView } from 'vue-router';
export default {
    data() {
        return {
            factura: [],
        };
    },
    created: function () {
        this.consultarFacturas();
    },
    methods: {
        consultarFacturas() {
            axios.get("https://localhost:7241/Factura").then((result) => {
                console.log(result.data.result);
                this.factura = result.data.result;
            });
        },

        borrarCliente(pkFactura) {
            console.log(pkFactura);

            axios.delete("https://localhost:7241/Factura/" + pkFactura);
            // console.log(result.data.result);
            window.location.href = "dashboard";
        },
        editar(pkFactura) {
            this.$router.push("/editar/" + pkFactura);
        }
    },
};
</script>