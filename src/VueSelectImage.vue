<template>
  <div :class="rootClass">
    <ul :class="rootClass + '__wrapper'">

      <li :disabled="dataImagesLocal[index].disabled" v-for="(dataImage, index) in dataImagesLocal" :key="index"
        :class="rootClass + '__item'">

        <div
          :class="classThumbnail(singleSelected.id, dataImage.id)"
          @click="onSelectImage(dataImage)"
          v-if="!isMultiple">
          <div :class="rootClass + '__mask'" v-if="useMask && dataImage.useMask">
            <span v-if="useMask && maskContent" :class="rootClass + '__mask-content'" v-html="maskContent"></span>
          </div>
          <img :src="dataImage.src"
               :alt="dataImage.alt"
               :height="h"
               :width="w"
               :class="rootClass + '__img'">

          <label v-if="useLabel"
                :class="rootClass + '__lbl'">
                {{dataImage.alt}}
          </label>
        </div>
        <span v-if="useCheckMark && !isMultiple && (singleSelected.id ===  dataImage.id)" class="checkmark">
          <div class="checkmark_circle"></div>
          <div class="checkmark_stem"></div>
          <div class="checkmark_kick"></div>
        </span>

        <div
          :class="classThumbnailMultiple(dataImage.id)"
          @click="onSelectMultipleImage(dataImage)"
          v-if="isMultiple">

          <img :src="dataImage.src"
               :alt="dataImage.alt"
               :height="h"
               :width="w"
               :class="rootClass + '__img'">

          <label v-if="useLabel"
                :class="rootClass + '__lbl'">
                {{dataImage.alt}}
          </label>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vue-select-image',
  props: {
    dataImages: {
      type: Array,
      default: () => []
    },
    selectedImages: {
      type: Array,
      default: () => []
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    useCheckMark: {
      type: Boolean,
      default: false
    },
    maskContent: {
      type: String,
      default: ''
    },
    useMask: {
      type: Boolean,
      default: false
    },
    useLabel: {
      type: Boolean,
      default: false
    },
    rootClass: {
      type: String,
      default: 'vue-select-image'
    },
    activeClass: {
      type: String,
      default: '--selected'
    },
    h: {
      type: String,
      default: 'auto'
    },
    w: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      singleSelected: {
        id: ''
      },
      multipleSelected: []
    }
  },
  computed: {
    dataImagesLocal: function () {
      return this.dataImages || []
    }
  },
  created () {
    // set initial selectedImage
    this.setInitialSelection()
  },
  methods: {
    classThumbnail(selectedId, imageId) {
      const baseClass = `${this.rootClass}__thumbnail`
      if (selectedId === imageId) {
        return `${baseClass} ${baseClass}${this.activeClass}`
      }
      return `${baseClass}`
    },
    classThumbnailMultiple(id) {
      const baseClass = `${this.rootClass}__thumbnail`
      const baseMultipleClass = `${baseClass} is--multiple`
      if (this.isExistInArray(id)) {
        return `${baseMultipleClass} ${baseClass}${this.activeClass}`
      }
      return `${baseMultipleClass}`
    },
    onSelectImage(objectImage) {
      if (objectImage.disabled) return
      this.singleSelected = Object.assign({}, this.singleSelected, objectImage)
      this.$emit('onselectimage', objectImage)
    },
    isExistInArray (id) {
      return this.multipleSelected.find((item) => {
        return id === item.id
      })
    },
    removeSelected (id) {
      return this.multipleSelected.filter((item) => {
        return id !== item.id
      })
    },
    onSelectMultipleImage(objectImage) {
      if (!this.isExistInArray(objectImage.id)) {
        this.multipleSelected.push(objectImage)
      } else {
        this.multipleSelected = this.removeSelected(objectImage.id)
      }

      this.$emit('onselectmultipleimage', this.multipleSelected)
    },
    setInitialSelection () {
      if (this.selectedImages) {
        if (!this.isMultiple && this.selectedImages.length === 1) {
            this.singleSelected = Object.assign({}, this.selectedImages[0])
        } else {
          this.multipleSelected = [].concat(this.selectedImages)
        }
      }
    }
  }
}
</script>

<style src="./vue-select-image.css"></style>
