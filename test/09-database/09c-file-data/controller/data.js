'use strict'

module.exports = {
    list: (data, database) => {
        const persons = database.loadJson('persons.json') || []

        return {
            status: 200,
            page: 'index',
            frontmatter: {
                persons
            }
        }
    },
    add: (data, database) => {
        const persons = database.loadJson('persons') || []
        const person = {
            firstname: "Marie",
            lastname: "Schmidt"
        }

        persons.push(person)
        database.saveJson('persons', persons)

        return {
            status: 200,
            page: 'index',
            frontmatter: {
                persons
            }
        }
    }
}