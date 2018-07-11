# :white_check_mark: Vue Select Item

> Vue 2.x component for selecting images from list


## Installation

```bash
# Yarn
yarn add vue-select-item

# NPM
npm i vue-select-item --save
```

## How to use

### Import

```javascript
import VueSelectItem from 'vue-select-item'
// add stylesheet
require('vue-select-item/dist/vue-select-image.css')
```

### Register components

```javascript
components: { VueSelectItem }
```

### Register as global component

```javascript
Vue.use(VueSelectItem)
```

### Sample Array Image

```javascript
[{
  id: '1',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 1',
  disabled: true // disable element selection and add [disabled] attribute to element; you can customize styles for this case
}, {
  id: '2',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 2'
}]
```

### Template

#### Single Selection

```html
<vue-select-item :dataImages="dataImages"
                  @onselectimage="onSelectImage">
</vue-select-item>
```

`onselectimage` will return emitted with parameter object image selected

#### Multiple Selection

```html
<vue-select-item :dataImages="dataImages"
                  :is-multiple="true"
                  :selectedImages="initialSelected"
                  @onselectmultipleimage="onSelectMultipleImage">
</vue-select-item>
```

`onselectmultipleimage` will return emitted with parameter list of object images selected

### Available Props

| Attribute       | Type             | Default          | Description                          	|
|-----------------|------------------|------------------|--------------------------------------	|
| :dataImages     | Array            | []               | Array of images that will be shown    |
| :selectedImages | Array            | []               | Array of initial selected images      |
| :isMultiple     | Boolean          | false            | Flag to enable multiple selection     |
| :useCheckMark   | Boolean          | false          | Flag to enable checkmark element       |
| :useLabel       | Boolean          | false            | Flag to enable showing alt as label   |
| :rootClass      | String           | vue-select-item | Class for root element of this component |
| :activeClass    | String           | --selected       | Class for active state, will concat with :rootClass |
| :h              | String           | auto             | Height of images, ex: '50px'     |
| :w              | String           | auto             | Width of images, ex: '50px'      |

### Available Events

| Events Attr            | Return                                            |
|------------------------|---------------------------------------------------|
| @onselectimage         | Object image selected                             |
| @onselectmultipleimage | Array of object image has been selected           |


### Credit

Thanks for inspiration : [https://github.com/rvera/image-picker](https://github.com/rvera/image-picker)

### Contributing

If you'd like to contribute, head to the [contributing guidelines](/CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.

**Hope will usefull for you all.**

created by [Irfan Maulana](https://github.com/mazipan)
modified by [thisninja](https://github.com/thisninja)
