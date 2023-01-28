<template> 
    <section>
        <div class="character">
            <img :src="character.image" :alt="character.name">

            <div class="character__info">
                <h3>{{ character.name }}</h3>

                <div class="status">
                    <span
                        :class="
                            character.status == 'Alive' ? 'alive' :
                            character.status == 'Dead' ? 'dead' :
                            'default'
                        "
                    ></span>
                    <span>{{ character.status }} - {{ character.species }}</span>
            
                    <!-- <ul>
                        <li>Status: {{ character.status }}</li>
                        <li>Species: {{ character.species }}</li>
                        <li>Gender: {{ character.gender }}</li>
                        <li>Location: {{ character.location.name }}</li>
                    </ul> -->

                </div>

                <div class="origin">
                    <span>
                        Origin:
                        {{ character.origin.name }}
                    </span>   
                </div>

                <div class="location">
                    <span>
                        Location:
                        {{ character.location.name }}
                    </span>   
                </div>



                
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        props: ["character"]
    }

</script>

<style lang="scss">
.character {
    background-color: var(--background-card);
    border-radius: 20px;
    box-shadow: 0 0 10px 1px var(--background-body);
    overflow: hidden;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    height: 100%;
    &:hover {
        transform: scale(1.05);
        h3 {
            color: var(--text-orange);
        }
    }
    span {
        color: var(--text-gray);
    }
    h3 {
        margin-bottom: 0.5rem;
    }
    &__info {
        padding: 1.5rem;
        .status {
            display:flex;
            align-items: center;
            margin-bottom: 0.5rem;
            span {
                color: var(--text-gray);
                &:first-child { // This is a circle, to show the character state in colors.
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }
            }
            .alive {
                background-color: green;
            }
            .dead {
                background-color: red;
            }
            .default {
                background-color: white;
            }
        }
    }
}
</style>
    