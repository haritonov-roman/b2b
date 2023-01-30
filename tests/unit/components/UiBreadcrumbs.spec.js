import { createLocalVue, shallowMount } from '@vue/test-utils'
import Cds from '@central-design-system/components'
import UiBreadcrumbs from '@/components/UiBreadcrumbs'

const localVue = createLocalVue()

localVue.use(Cds)

describe('UiBreadcrumbs.vue', () => {
  const routes = []

  const wrapper = shallowMount(UiBreadcrumbs, {
    propsData: { routes },
    localVue
  })

  it('Проверка рендеринга', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Проверка атрибута items', () => {
    expect(wrapper.attributes('items')).toMatch('')
  })

  it('Снимок', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
