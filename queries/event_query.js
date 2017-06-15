const knex = require('../knex');
const recipeQuery = require('./recipe_query');
const menuQuery = require('./menu_query');

function getEvent(id) {
  let query = knex('events')
    .select()
    .where('events.id', id);

  return query;
}

function getGuestList(id) {
  let query = knex('event_guests')
    .select('users.id', 'users.full_name')
    .innerJoin('users', 'event_guests.guest_id', 'users.id')
    .where('event_guests.event_id', id);

  return query;
}

function get(id) {
  return getEvent(id)
    .then(function(event) {
      event[0].guestList = [];
      return getGuestList(event[0].id)
        .then(function(guests) {
          event[0].guestList = guests;
        })
        .then(function(result) {
          return event[0];
        });
    });
}

module.exports = {
  get
};
