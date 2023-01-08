import { mount } from '@vue/test-utils'
import FilmCardList from '@/components/FilmCardList'
import FilmCard from '@/components/FilmCard'


describe('Testing FilmCardList.vue', () => {
  it('should render a film card for each film', () => {
    // when
    const wrapper = mount(FilmCardList, {
      propsData: {
        filme: [
          {
            filmName: "Testfilm",
            bewertung: 95,
            kommentar: "Ein guter Testfilm",
            bewerter: "Mustermann"
          },
          {
            filmName: "Testfilm 2",
            bewertung: 90,
            kommentar: "Ein gute Fortsetzung",
            bewerter: "Mustermann"
          }
        ]
      }
    })

    // then
    const filmCards = wrapper.findAllComponents(FilmCard)
    expect(filmCards.length).toBe(2)
  })
})
