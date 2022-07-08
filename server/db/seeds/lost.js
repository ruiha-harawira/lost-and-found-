/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('lost').del()
  await knex('lost').insert([
    {
      id: 1,
      species: 'cat',
      photo:
        'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg',
      user_id: 1,
    },
    {
      id: 2,
      species: 'dog',
      photo:
        'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      user_id: 1,
    },
  ])
}
