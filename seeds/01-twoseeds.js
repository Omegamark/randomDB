
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('game').insert({id: 1, name: 'Strider', desc: 'Cool sword Bro', release_date: '10-01-1985' }),
        knex('game').insert({id: 2, name: 'ClashAtDemonHead', desc: 'Cool gun Bro', release_date: '10-01-1986'}),
        knex('game').insert({id: 3, name: 'Karnov', desc: 'He breaths fire Bro', release_date: '10-01-1987'})
      ]);
    });
};
