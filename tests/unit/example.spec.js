import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import PartialCollapseBlock from "@/components/PartialCollapseBlock";
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import Vue from 'vue'

describe('PartialCollapseBlock.vue', () => {
  let localVue
  let vuetify
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue()
    vuetify = new Vuetify()

    let fakeDiv = '<div>'
    for (let i = 0; i < 1000; i++){
      fakeDiv += `<div>${i}</div>`
    }
    fakeDiv += '</div>'

    const elem = document.createElement('div')
    if (document.body) {
      document.body.appendChild(elem)
    }

    wrapper = mount(PartialCollapseBlock, {
      localVue,
      vuetify,
      slots: { default: [fakeDiv] },
      attachTo: elem,
    });
  })

  it('block hide', () => {

    expect(wrapper.text()).toContain('123')
    const button = wrapper.find('.toggle-button')


    expect(button).toBeDefined()
    expect(button.text()).toMatch(/Show more/)

    const collapsedDiv = wrapper.find('.collapsed-container')
    expect(collapsedDiv).toBeDefined()
  });
})