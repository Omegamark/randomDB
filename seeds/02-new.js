
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('new').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('new').insert({id: 1, name: 'Strider', desc: 'Cool sword Bro', release_date: '10-01-1985' }),
        knex('new').insert({id: 2, name: 'ClashAtDemonHead', desc: 'Cool gun Bro', release_date: '10-01-1986'}),
        knex('new').insert({id: 3, name: 'Karnov', desc: 'He breaths fire Bro', release_date: '10-01-1987'})
      ]);
    });
};
