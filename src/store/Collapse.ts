import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCollapseStore = defineStore('collapse',()=>{
    const iscollapse = ref(true)
    function changeCollapse(){
        iscollapse.value = !iscollapse.value
    }

    return {iscollapse, changeCollapse}

})