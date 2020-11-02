import Vue from 'vue';
import Vuei18n from 'vue-i18n'
import en from './en.json'
import ru from './ru.json'
import uz from './uz.json'
Vue.use(Vuei18n)
const i18n = new Vuei18n({
    locale: 'en',
    fallbackLocale: ['ru', 'uz'],
    messages: {
        en,
        ru,
        uz
    }
})

export default i18n