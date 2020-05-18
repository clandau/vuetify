import './VAvatar.sass'

// Mixins
import Colorable from '../../mixins/colorable'
import Measurable from '../../mixins/measurable'
import Roundable from '../../mixins/roundable'

// Helpers
import { convertToUnit } from '../../util/helpers'

// Types
import { VNode } from 'vue'
import mixins from '../../util/mixins'

export default mixins(
  Colorable,
  Measurable,
  Roundable,
  /* @vue/component */
).extend({
  name: 'v-avatar',

  props: {
    left: Boolean,
    right: Boolean,
    size: {
      type: [Number, String],
      default: 48,
    },
  },

  computed: {
    classes (): object {
      return {
        'v-avatar--left': this.left,
        'v-avatar--right': this.right,
        'v-avatar--tile': this.tile,
      }
    },
    styles (): object {
      return {
        height: convertToUnit(this.size),
        minWidth: convertToUnit(this.size),
        width: convertToUnit(this.size),
        ...this.measurableStyles,
        ...this.roundedClasses,
      }
    },
  },

  render (h): VNode {
    const data = {
      staticClass: 'v-avatar',
      class: this.classes,
      style: this.styles,
      on: this.$listeners,
    }

    return h('div', this.setBackgroundColor(this.color, data), this.$slots.default)
  },
})
