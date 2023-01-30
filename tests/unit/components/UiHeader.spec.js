import { createLocalVue, shallowMount } from '@vue/test-utils'
import Cds from '@central-design-system/components'
import UiHeader from '@/components/UiHeader'

const localVue = createLocalVue()

localVue.use(Cds)

const $route = {
  params: {
    rep: 'vue'
  }
}

describe('UiHeader.vue', () => {
  const wrapper = shallowMount(UiHeader, {
    mocks: {
      $route
    },
    localVue
  })

  it('Проверка рендеринга', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Проверка содержимого', () => {
    expect(wrapper.text()).toMatch('GitHub issue viewer: vue')
  })

  it('Снимок', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
