<template>
  <HpBar :hp="monster.hp" :baseHp="monster.baseHp" :unknown="unknown" />
<div>
  <div class="position-absolute hit" :id="'hit'+monster.id"></div>
  <img :id="'monster'+monster.id" v-if="monster.hp > 0" class="img-fluid monster-img" :class="monster.statusEffects.map(e => e.negative ? e.name : '').join(' ') + (disable ? 'wait-cursor' : ' attack-cursor')" @click="disable ? '' : attackMonster(monster)" :src="img" draggable="false" />
  <img v-else class="img-fluid monster-img" :src="deadImg" />
</div>
</template>

<script>
import { reactive } from "@vue/reactivity"
import HpBar from "./HpBar.vue"
import $store from '../store/index.js'
import { battleService } from "@/services/BattleService"
import { characterService } from "@/services/CharacterService"
import { computed, onMounted } from "@vue/runtime-core"
import 'animate.css'
import { animationsService } from "@/services/AnimationsService"

export default {
  components: { HpBar },
  name: 'EnemyMonster',
  props: {
    monster: {type: Object}
  },
  setup(props){
    onMounted(()=> {
      state.monsterPreHp = props.monster.hp
      characterService.autoSelect()
    })
    const state = reactive({
      deadImg: computed(()=>$store.state.assetsImgList.find(img => img.includes('dead'))),
      unknown: computed(()=>!$store.state.player.kills[props.monster.name]),
      img: computed(()=>$store.state.monsterImgList.find(m => m.includes(props.monster.img)) ?? props.monster.img),
      disable: computed(()=>$store.state.disableClick)
    })
    return state
  },
  methods: {
    attackMonster(monster){
      $store.state.disableClick = true
      characterService.autoSelect()
      animationsService.shake('monster'+monster.id)
      battleService.handleAttack(this.$store.state.selected, monster)
      characterService.autoSelect()
    },
  }
}
</script>

<style scoped>
.monster-img{
  height: 20vh;
}
.hit{
  left: 75%
}
.wait-cursor{
  cursor: wait;
}
</style>
