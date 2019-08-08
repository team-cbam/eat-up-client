const showEventsTemplate = require('../templates/event-listing.handlebars')

const getEventsSuccess = (data) => {
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
  $('form').trigger('reset')
}

const getEventsFailure = function (error) {
  $('#message').text('Error on getting events')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.error('did not get any events', error)
}

const clearEvents = () => {
  $('.content').empty()
  $('#message').text('Cleared all the events!')
}

const createEventsSuccess = () => {
  $('#message').text('Yay! You created a new event!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const createEventsFailure = function (error) {
  $('#message').text('Error on creating a event')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.error('did not create any events', error)
}

const showEventsSuccess = () => {
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const showEventsFailure = function (error) {
  $('#message').text('Error on creating a event')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.error('did not create any events', error)
}

const updateEventsSuccess = () => {
  $('#message').text('Yay! You changed a event!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const updateEventsFailure = function (error) {
  $('#message').text('Error on creating a event')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.error('did not create any events', error)
}

const deleteEventsFailure = function (error) {
  $('#message').text('Error on deleting a event')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.error('did not delete any events', error)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  clearEvents,
  failure,
  getEventsSuccess,
  getEventsFailure,
  createEventsSuccess,
  createEventsFailure,
  deleteEventsFailure,
  updateEventsSuccess,
  updateEventsFailure,
  showEventsSuccess,
  showEventsFailure
}