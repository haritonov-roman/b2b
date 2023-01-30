import { createLocalVue, shallowMount } from '@vue/test-utils'
import Cds from '@central-design-system/components'
import UiRepositoryCard from '@/components/UiRepositoryCard'

const localVue = createLocalVue()

localVue.use(Cds)

describe('UiRepositoryCard.vue', () => {
  const value = {
    name: 'Vue',
    route: 'vuejs/vue/issues'
  }

  const wrapper = shallowMount(UiRepositoryCard, {
    propsData: { value },
    localVue
  })

  it('Проверка рендеринга', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Проверка атрибута href', () => {
    expect(wrapper.attributes('href')).toMatch('vuejs/vue/issues')
  })

  it('Проверка заголовка карточки', () => {
    expect(wrapper.find('.repository__title').text()).toMatch('Vue')
  })

  it('Снимок', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
