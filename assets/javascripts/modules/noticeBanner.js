/* eslint-env jquery */

require('jquery')

var GOVUK = require('stageprompt')

module.exports = function () {
// =====================================================
// Handle the UR panel dismiss link functionality
// =====================================================
  var cookieName = 'mdtpurr'
  var cookieData = GOVUK.getCookie(cookieName)
  var URbanner = $('#notice-banner')
  var URbannerShow = 'banner-panel--show'
  var expiryDate = new Date()

  if (cookieData == null) {
    URbanner.addClass(URbannerShow).removeClass('js-hidden')
  }

  $('.banner-panel__close').on('click', function (e) {
    e.preventDefault()
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    GOVUK.setCookie(cookieName, 'suppress_for_all_services', 999999999)
    URbanner.removeClass(URbannerShow).addClass('hidden')
  })
}
