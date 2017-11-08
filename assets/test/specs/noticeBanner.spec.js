/* eslint-env jasmine, jquery */
/* global loadFixtures */

require('jquery')

var govuk = require('../../javascripts/modules/GOVUK_helpers.js')

describe('Given I have a notice banner on the page', function () {
  var noticeBanner
  var cookieName = 'mdtpurr'
  var $cookieData
  var $noticeBanner
  var hidden = 'js-hidden'
  var fixtureFile = 'notice-banner-fixture.html'
  var $closeBannerLink

  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = 'base/test/specs/fixtures/'
    loadFixtures(fixtureFile)

    noticeBanner = require('../../javascripts/modules/noticeBanner.js')
  })

  describe('loading the page without cookie set', function () {
    beforeEach(function () {
      loadFixtures(fixtureFile)
      noticeBanner()
      $cookieData = govuk.getCookie(cookieName)
      $closeBannerLink = $('.notice-banner__close').click()
      $noticeBanner = $('#notice-banner')
    })

    it('notice banner should be visible', function () {
      expect($noticeBanner).not.toHaveClass(hidden)
    })

    it('notice banner should close when link is clicked', function () {
      expect($closeBannerLink)
      expect($noticeBanner).toHaveClass(hidden)
    })
  })

  describe('loading the page with cookie set', function () {
    beforeEach(function () {
      loadFixtures(fixtureFile)
      $cookieData = govuk.setCookie(cookieName, 'suppress_for_all_services', 1)
      noticeBanner()
      $noticeBanner = $('#notice-banner')
    })

    it('notice banner should not be visible when a cookie is set', function () {
      expect($cookieData).not.toBeNull()
      expect($noticeBanner).toHaveClass(hidden)
    })
  })
})
