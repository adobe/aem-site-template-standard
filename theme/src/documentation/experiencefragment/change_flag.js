document.addEventListener('DOMContentLoaded', function (event) {
  var x = document.getElementsByClassName('cmp-languagenavigation__item--active')[0]
  if (typeof x === 'undefined') return

  var classnameWithLanguage = x.className.split(' ')[1]
  if (typeof classnameWithLanguage === 'undefined') return

  var span = document.createElement('span')
  span.setAttribute('class', classnameWithLanguage)

  var language_code = classnameWithLanguage.split('-')
  language_code = language_code[language_code.length - 1]

  var language_text = 'language'
  if (language_code === 'en') language_text = 'English'
  else if (language_code === 'fr') language_text = 'French'
  else if (language_code === 'de') language_text = 'Germany'
  else if (language_code === 'it') language_text = 'Italian'
  else if (language_code === 'ru') language_text = 'Russian'
  else if (language_code === 'es') language_text = 'Spanish'
  else if (language_code === 'da') language_text = 'Danish'
  else if (language_code === 'ga') language_text = 'Irish'
  else if (language_code === 'pt') language_text = 'Portuguese'
  else if (language_code === 'ro') language_text = 'Romanian'
  else if (language_code === 'sv') language_text = 'Swedish'
  else if (language_code === 'tr') language_text = 'Turkish'

  var text = document.createTextNode(language_text)
  span.appendChild(text)

  var targetElement = document.getElementsByClassName('cmp-languagenavigation')[0]
  if (typeof targetElement === 'undefined') return
  targetElement.insertBefore(span, targetElement.firstChild)
})
