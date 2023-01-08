import { mount } from '@vue/test-utils'
import FilmCreateForm from '@/components/FilmCreateForm'

describe('Testing FilmCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(FilmCreateForm)

    // then
    expect(wrapper.find('#film-create-offcanvas').classes()).not.toContain('show')
  })
})
