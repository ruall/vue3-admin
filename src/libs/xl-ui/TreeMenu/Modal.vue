<template>
  <div v-show="state.modalShow" class="modal-mask">
    <div
      ref="uiModal"
      class="ui-modal"
      :style="{
        width: props.width + 'px',
        borderRadius: props.borderRadius + 'px',
        marginLeft: -props.width / 2 + 'px',
        top: props.position === 'center' ? '50%' : '50px',
        marginTop: props.position === 'center' ? -state.uiModalHeight / 2 + 'px' : ''
      }"
    >
      <header
        class="header"
        :style="{
          color: props.headerTextColor,
          backgroundColor: props.headerColor
        }"
      >
        <h1>{{ props.headerText }}</h1>
        <a href="javascript:;" @click="cancel">&times;</a>
      </header>
      <article class="content">
        <p
          :style="{
            color: props.contentTextColor
          }"
        >
          {{ props.contentText }}
        </p>
      </article>
      <div v-if="props.btnGroupShow" class="btn-group">
        <button class="btn btn-confirm" :style="{ backgroundColor: props.headerColor }" @click="confirm">
          {{ props.confirmText }}
        </button>
        <button class="btn btn-cancel" @click="cancel">{{ props.cancelText }}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref } from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal'
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    show: boolean
    width: number
    borderRadius: number
    headerColor: string
    headerText: string
    headerTextColor: string
    contentText: string
    contentTextColor: string
    position: string
    btnGroupShow: boolean
    confirmText: string
    cancelText: string
  }>(),
  {
    show: false,
    width: 300,
    borderRadius: 0,
    headerColor: '#000',
    headerText: '',
    headerTextColor: '#fff',
    contentText: '',
    contentTextColor: '#000',
    position: 'top',
    btnGroupShow: false,
    confirmText: 'confirm',
    cancelText: 'cancel'
  }
)

const emits = defineEmits<{ (e: 'confirm', v: object): void; (e: 'cancel'): void }>()

const uiModal = ref<HTMLElement | null>(null)
const state = reactive({
  uiModalHeight: 0,
  modalShow: props.show
})

onMounted(() => {
  state.uiModalHeight = (uiModal.value as HTMLElement).clientHeight
})

const confirm = () => {
  state.modalShow = false
  emits('confirm', {
    id: 0,
    name: '参数'
  })
}
const cancel = () => {
  state.modalShow = false
  emits('cancel')
}
</script>
<style lang="less" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  a {
    text-decoration: none;
    outline: none;
    color: #333;
  }
  h1,
  p {
    font-weight: normal;
    margin: 0;
  }
  button {
    outline: none;
    border: none;
  }
  .ui-modal {
    position: fixed;
    left: 50%;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    .header {
      height: 44px;
      padding: 0 15px;
      box-sizing: border-box;
      h1 {
        display: inline-block;
        line-height: 44px;
        font-size: 18px;
        color: v-bind('props.headerTextColor');
      }
      a {
        position: absolute;
        font-size: 20px;
        top: 6px;
        right: 15px;
        color: v-bind('props.headerTextColor');
      }
    }
    .content {
      padding: 15px;
      box-sizing: border-box;
    }

    .btn-group {
      height: 30px;
      padding: 10px 15px;
      border-top: 1px solid #ddd;
      box-sizing: unset;
      .btn {
        float: right;
        min-width: 80px;
        height: 30px;
        font-size: 14px;
        border-radius: 3px;
        cursor: pointer;
        &.btn-confirm {
          background-color: v-bind('props.headerColor');
          color: v-bind('props.headerTextColor');
          margin-left: 15px;
        }
        &.btn-cancel {
          background-color: #ddd;
          color: #666;
        }
      }
    }
  }
}
</style>
