# vue-avatar-editor

<a href="https://badge.fury.io/js/vue-avatar-editor"><img src="https://badge.fury.io/js/vue-avatar-editor.svg" alt="npm version" height="18"></a>
<a href="https://www.npmjs.com/package/vue-avatar-editor"><img alt="Downloads" src="https://img.shields.io/npm/dm/vue-avatar-editor.svg"></a>

Facebook like, avatar / profile picture component. This is Vue.js clone of <a href="https://github.com/mosch/react-avatar-editor">mosch/react-avatar-editor</a>

Resize and crop your uploaded image using a clear user interface.

Demo at <a href="https://two20.github.io/vue-avatar-editor/">https://two20.github.io/vue-avatar-editor/</a>

# Usage

```html
<div id="app">
      <vue-avatar
        :width=400
        :height=400
        ref="vueavatar"
        @vue-avatar-editor:image-ready="onImageReady"
        image="https://vuejs.org/images/logo.png"
      >
      </vue-avatar>
      <br>
      <vue-avatar-scale
        ref="vueavatarscale"
        @vue-avatar-editor-scale:change-scale="onChangeScale"
        :width=250
        :min=1
        :max=3
        :step=0.02
      >
      </vue-avatar-scale>
      <br>
      <img src="" id="img-1">
      <button v-on:click="saveClicked">Click</button>
    </div>
```

```javascript
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
      // use img
    },
    onImageReady(scale){
      this.$refs.vueavatarscale.setScale(scale)
    }
  }
})
```

## Props
| Prop                   | Type     | Description
| ---------------------- | -------- | ---------------
| width                  | Number   | The total width of the editor
| height                 | Number   | The total width of the editor
| border                 | Number   | The cropping border. Image will be visible through the border, but cut off in the resulting image.
| color                  | Number[] | The color of the cropping border, in the form: [red (0-255), green (0-255), blue (0-255), alpha (0.0-1.0)]
| style                  | Object   | Styles for the canvas element
| scale                  | Number   | The scale of the image. You can use this to add your own resizing slider.

## Accessing the resulting image

```javascript
this.$refs.vueavatar.getImage()
```


The resulting image will have the same resolution as the original image, regardless of the editor's size.
If you want the image sized in the dimensions of the canvas you can use `getImageScaled`.


```javascript
this.$refs.vueavatar.getImageScaled()
```


# Contributing

For development you can use following build tools:

* `npm run build`: Builds the *minified* dist file: `dist/index.js`
* `npm run watch`: Watches for file changes and builds *unminified* into: `dist/index.js`
* `npm run demo:build`: Builds the demo based on the dist file `dist/index.js`
* `npm run demo:watch`: Run webpack-dev-server. Check demo website [localhost:8080](http://localhost:8080)