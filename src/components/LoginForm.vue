<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="name" data-testid="name-input" />
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        }
    },
    methods: {
        onSubmit() {
            this.$emit('formSubmitted', {name: this.name})
        }
    }
}
</script>