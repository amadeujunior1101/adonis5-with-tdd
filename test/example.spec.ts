import test from 'japa'
import supertest from 'supertest'
import User from 'App/Models/User'

// const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Welcome', () => {
  test.only('ensure user password gets hashed during save', async (assert) => {
    const user = new User()
    user.name = 'Amadeu Junior'
    user.email = 'virk@adonisjs.com'
    user.password = 'secret'
    await user.save()

    assert.notEqual(user.email, 'virk2@adonisjs.com')
  })
})
