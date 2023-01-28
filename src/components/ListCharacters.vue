<template> 
    <section>
        <div class="characters">
            <div class="characters__item" v-for="character in characters" :key="character.id">
                <!-- {{ character.name }} -->
                <CardCharacters :character="character"/>
            </div>
        </div>
    </section>
</template>

<script>

    import { onMounted, computed } from "vue"
    import { useStore } from "vuex"

    import CardCharacters from "@/components/CardCharacter.vue"

    export default {
        components: {
            CardCharacters
        },
        setup() {

            const store = useStore() // We use 'useStore()' to access to the 'actions'.
            const characters = computed(() => { // Computed property (must return something).
                return store.state.charactersFilter
            })

            onMounted(() => {
                store.dispatch('getCharacters')
            })

            return {
                characters
            }
        }
    }

</script>

<style>
.characters {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    /* grid-template-columns: repeat(5, 1fr);  */
    gap: 3rem;
    margin: 3rem 0;
}
</style>
    