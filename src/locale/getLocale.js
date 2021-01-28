export default function getLocale(lang, word) {
    const table = {
        'en-us': {
            'nav.product': 'Products',
            'nav.branch': 'Branches'
        }
    }
    return table[lang][word]
}
