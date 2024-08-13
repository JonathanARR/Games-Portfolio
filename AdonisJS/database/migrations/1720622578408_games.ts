import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'games'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('player_one').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE')
      table.integer('player_two').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE')
      table.integer('winner').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE')
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
