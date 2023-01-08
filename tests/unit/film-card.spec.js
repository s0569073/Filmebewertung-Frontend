import { mount } from '@vue/test-utils'
import FilmCard from '@/components/FilmCard'

describe('Testing FilmCard.vue', () => {
  it('should render filmname', () => {
    // when
    const wrapper = mount(FilmCard, {
      propsData: {
        film: {
          filmName: "Testfilm",
          bewertung: 95,
          kommentar: "Ein guter Testfilm",
          bewerter: "Mustermann"
        }
      }
    })

    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Testfilm')
  })
})
