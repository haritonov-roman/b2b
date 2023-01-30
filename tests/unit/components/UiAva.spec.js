import { shallowMount } from '@vue/test-utils'
import UiAva from '@/components/UiAva'

describe('UiAva.vue', () => {
  const src = 'https://avatars.githubusercontent.com/u/46739861?u=b461863a46253deb150f48f0ae61823f763c0475&v=4'

  const wrapper = shallowMount(UiAva, {
    propsData: { src }
  })

  it('Проверка рендеринга', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Проверка входящих данных', () => {
    expect(wrapper.attributes('src')).toMatch(/(^https?:\/\/)?/i)
  })

  it('Снимок', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
