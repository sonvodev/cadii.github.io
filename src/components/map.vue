<template>
    <div id="map-container">
        fdsfdsa
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { IMapCoreService, MapCoreService } from '../services'

@Component
export default class VgmMap extends Vue {
    service: IMapCoreService;
    created() {
        this.service = new MapCoreService;
        this.initMap(document.getElementById('map-container'));
    }

    initMap(element: HTMLElement) {
        this.service.initMap();
    }
}
</script>

<style>

</style>
