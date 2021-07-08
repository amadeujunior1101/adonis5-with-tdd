import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request }: HttpContextContract) {
    const { name, email, password } = request.only(['name', 'email', 'password'])

    const user = await User.create({
      name: name,
      email: email,
      password: password,
    })

    return user
  }
}
