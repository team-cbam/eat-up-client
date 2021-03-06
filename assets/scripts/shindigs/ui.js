const showEventsTemplate = require('../templates/handlebars/event-listing.handlebars')
const openedEvent = require('../templates/handlebars/event-page.handlebars')
const ownerButtons = require('../templates/owner-buttons.handlebars')
const store = require('../store')

const uploadImageSuccess = res => {
  $('.status-message').text('Image uploaded')
  $('#upload-image-modal').modal('hide')
  $('.modal-backdrop').hide()
  $('form').trigger('reset')
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
}

const getEventsSuccess = (data) => {
  const showEventsHtml = showEventsTemplate({
    events: data.events
  })
  $('.content').html(showEventsHtml)
  $('form').trigger('reset')
}

const getEventsFailure = function (data) {
  $('.status-message').text('Error on getting events')
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  // console.data('did not get any events', data)
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
}

const openEventSuccess = data => {
  store.current_event = data.event
  const openEventHTML = openedEvent({
    event: data.event,
    user: store.user
  })
  $('.content').html(openEventHTML)
  if (store.user && data.event.owner === store.user._id) {
    const ownerButtonsHTML = ownerButtons({
      event: data.event,
      editable: true
    })
    $('.content').append(ownerButtonsHTML)
  }
  // $('.status-message').text('Attending this Event?').show()
  // setTimeout(function () {
  //   $('.status-message').fadeOut()
  // }, 3000)
}

const clearEvents = () => {
  $('.content').empty()
  $('.status-message').text('Cleared all the events!').show()
  // setTimeout(function () {
  //   $('.status-message').fadeOut()
  // }, 3000)
}

const createEventSuccess = (data) => {
  $('#create-event-modal').modal('hide')
  $('.modal-backdrop').hide()
  $('.status-message').text('You created an event').show()
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
}

const createEventFailure = function (data) {
  $('.status-message').text('Error on creating an event').show()
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  $('#create-event-modal').modal('hide')
  $('.modal-backdrop').hide()
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
}

const showEventsSuccess = () => {
  $('form').trigger('reset')
}

const showEventsFailure = function (data) {
  $('.status-message').text('Error on creating an event').show()
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
}

const updateEventsSuccess = () => {
  $('.status-message').text('Yay! You changed an event!').show()
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
  $('.status-message').addClass('success')
  $('form').trigger('reset')
  $('#update-event-modal').modal('hide')
  $('.modal-backdrop').hide()
}

const updateEventsFailure = function (data) {
  $('.status-message').text('Error on creating an event').show()
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
  $('#update-event-modal').modal('hide')
  $('.modal-backdrop').hide()
}

const deleteEventsFailure = function (data) {
  $('.status-message').text('Error on deleting an event').show()
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
}

const deleteEventSuccess = () => {
  $('.status-message').text('You deleted an event!').show()
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
  $('form').trigger('reset')
}

const failure = (data) => {
  $('modal').modal('hide')
  $('.modal-backdrop').hide()
  $('.status-message').text('An Error Occurred').css('color', 'red').show()
  // console.data('Error!', data)
}

const onRSVPSuccess = () => {
  $('.status-message').text("You're attending this event.").show()
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
}

const onRSVPFail = () => {
  $('.status-message').text("Sorry, we couldn't process your RSVP. Try again.").show()
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
}

module.exports = {
  clearEvents,
  failure,
  getEventsSuccess,
  getEventsFailure,
  createEventSuccess,
  createEventFailure,
  deleteEventsFailure,
  updateEventsSuccess,
  updateEventsFailure,
  showEventsSuccess,
  showEventsFailure,
  openEventSuccess,
  uploadImageSuccess,
  onRSVPSuccess,
  deleteEventSuccess,
  onRSVPFail
}
