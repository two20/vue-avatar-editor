import Vue from 'vue'
import VueAvatar from './components/VueAvatar.vue'
import VueAvatarScale from './components/VueAvatarScale.vue'

let vm = new Vue({
  el: '#app',
  components: {
  	VueAvatar,
  	VueAvatarScale
  },
  methods:{
  	onChangeScale (scale) {
      	this.$refs.vueavatar.changeScale(scale)
    },
    saveClicked(){
    	var img = this.$refs.vueavatar.getImageScaled()
    	document.getElementById('img-1').src = img.toDataURL()
    },
    onImageReady(scale){
    	this.$refs.vueavatarscale.setScale(scale)
    }
  }
})