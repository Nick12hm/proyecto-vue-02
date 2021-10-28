<template>
    <div class="mt-5">
        <h1>Formulario</h1>
        <form>
            <b-row>
                <b-col md="3">
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small>mínimo 3 carácteres</small>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                    <p>Selección: {{selected}}</p> 
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="selectedRadio"  :options="optionsRadio"></b-form-radio-group>
                    
                    Selected: <strong>{{ selectedRadio }}</strong>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="selectedCheck"  :options="optionscheck"></b-form-checkbox-group>
                    
                    Selected: <strong>{{ selectedCheck }}</strong>
                </b-col>
            </b-row>
            
        </form>
        <p>texto: {{texto}}</p>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            texto: '',
            selected: null,
            selectedRadio: null,
            selectedCheck: [],
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ],
            optionsRadio: [
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ],
            optionscheck: [
            { text: 'Orange', value: 'orange' },
            { text: 'Apple', value: 'apple' },
            { text: 'Pineapple', value: 'pineapple' },
            { text: 'Grape', value: 'grape' }
            ]
        }
    },
    computed: {
        comprobar(){
            return this.texto.length < 2 ? false : true
        }
    }
}
</script>