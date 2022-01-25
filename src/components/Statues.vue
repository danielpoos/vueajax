<template>
  <div>
    <h1>Statues</h1>
    <table>
      <thead>
        <tr>
          <th>Azonsító</th>
          <th>Cím</th>
          <th>Év</th>
          <th>Kiállítva(piros lap)</th>
          <th>Műveletek</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="statue in statues" v-bind:key="statue.id">
          <td>{{ statue.id }}</td>
          <td><router-link :to="'/statues/'+statue.id">{{ statue.person }}</router-link></td>
          <td>{{ statue.height }}</td>
          <td>{{ statue.price }}</td>
          <td>
            <button @click="deleteStatue(statue.id)">Törlés</button>
            <button @click="editStatue(statue.id)">Szerkesztés</button>
          </td>
        </tr>
        <tr>
          <td>
            <input type="hidden" v-model="statue.id">
          </td>
          <td>
            <input type="text" v-model="statue.person">
          </td>
          <td>
            <input type="number" v-model="statue.height">
          </td>
          <td>
            <input type="number" v-model="statue.price">
          </td>
          <td>
            <button v-if="mod_new" @click="newStatue" :disabled="saving">Létrehoz</button>
            <button v-if="!mod_new" @click="saveStatue" :disabled="saving">Mentés</button>
            <button v-if="!mod_new" @click="cancelEdit" :disabled="saving">Mégse</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="loadData">Adatok betöltése</button>
  </div>
</template>

<script>
export default {
  name: 'Statues',
  components: {
  },
  data() {
    return {
      mod_new: true, 
      saving: false,
      statue: {
        id: null,
        person: '',
        height: '',
        price: ''
      },
      statues: []
    }
  },
  methods: {
    async loadData () {
     let Response = await fetch('http://127.0.0.1:8000/api/statues')
     let data = await Response.json()
     this.statues = data
    },
    async deleteStatue(id) {
      let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`, {
        method: 'DELETE'
      })
      console.log(Response)
      await this.loadData()
    },
    async newStatue() {
      this.saving='disabled'
     await fetch('http://127.0.0.1:8000/api/statues', {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(this.statue) 
     })
     await this.loadData()
     this.saving=false
     this.resetForm()
    },
    async saveStatue() {
      this.saving='disabled'
     await fetch(`http://127.0.0.1:8000/api/statues/${this.statue.id}`, {
       method: 'PATCH',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(this.statue) 
     })
     await this.loadData()
     this.saving=false
     this.resetForm()
    },
    async editStatue(id) {
      let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`)
      let data = await Response.json()
      this.statue = {...data};
      this.mod_new = false
    },
    cancelEdit () {
      this.resetForm()
    },
    resetForm() {
      this.statue = {
        id: null,
        person: '',
        height: '',
        price: ''
      }
      this.mod_new = true
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>