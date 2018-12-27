<template>
  <div class="moka">
      <draggable v-model="tags" :move="getdata" @update="datadragEnd">
        <transition-group>
            <div class="box" v-for="element in tags" :key="element.id">
                {{element.name}}
            </div>
        </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
        tags:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'},{id:4,name:'4'},{id:5,name:'5'},{id:6,name:'6'},{id:7,name:'7'},{id:8,name:'8'},{id:'',name:'s'}]
    }
  },
  mounted () {
    
  },
  methods: {
    getdata (evt) {
        console.log(evt.draggedContext.element.id)
      },
    datadragEnd (evt) {
        // console.log('拖动前的索引 :' + evt.oldIndex)
        // console.log('拖动后的索引 :' + evt.newIndex)
        console.log(this.tags)
    }
  }
}
</script>
<style scoped>
.box{
  display: inline-block;
  width: 32%;
  height: 123px;
  line-height: 123px;
  border: .1px solid #e6e6e6;
}
</style>
