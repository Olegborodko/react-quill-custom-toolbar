
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tokens').del()
    .then(function () {
      // Inserts seed entries
      return knex('tokens').insert([
        {id: 1, title: 'Company Name', tag: 'company.companyInfo.companyName'},
        {id: 2, title: 'Company Phone', tag: 'company.companyInfo.companyPhone'},
        {id: 3, title: 'Company Email', tag: 'company.companyInfo.companyEmail'},
      ]);
    });
};
