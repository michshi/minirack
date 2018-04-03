exports.up = function(knex, Promise) {
  return knex.schema.createTable('minidiscs', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('title', 255).notNullable().defaultTo('')
    table.string('artist', 255).notNullable().defaultTo('')
    table.string('genre', 255).notNullable().defaultTo('')
    table.text('description', 255).notNullable().defaultTo('')
    table.text('cover_url', 255).notNullable().defaultTo('')
    table.timestamps(true, true)
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('minidiscs')
}
