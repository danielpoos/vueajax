<template>
    <div>
        <h1>Statue {{ $route.params.id }}</h1>
        <table>
        <tr>
            <td>person</td>
            <td>{{ statue.person }}</td>
        </tr>
        <tr>
            <td>height</td>
            <td>{{ statue.height }}</td>
        </tr>
        <tr>
            <td>price</td>
            <td>{{ statue.price }}</td>
        </tr>
    </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
        statue: {
            id: null,
            person: '',
            height: '',
            price: ''
            },
        }
    },
  
    methods:{
        async loadStatue() {
        const id =this.$route.params.id;
        let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`)
        console.log(Response)
        let data = await Response.json()
        this.statue = {...data};
        console.log(data)
        console.log(id)
        console.log(this.statue)
        },
    },
    mounted(){
        this.loadStatue();
    }
}
</script>

