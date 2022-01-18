<template>
  <div>
      <ul>
          <StatueItem
          v-for="statue in statues"
          v-bind:key="statue.person"
          :statue="statue"
          @statue-item-changed="Changed"
          />
      </ul>
  </div>
</template>

<script>
import StatueItem from './StatueItem.vue'
export default {
    props: ['statues'],
    components: {StatueItem},
    methods: {
        Changed(e) {
            this.$emit('statue-item-changed', e)
        }
    }

}
</script>

