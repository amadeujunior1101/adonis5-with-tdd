import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WebHooksController {
  public async iuguStatusChangeTrigger({ request, response }: HttpContextContract) {
    try {
      console.log(request.headers())
      if (request.headers().authorization !== 'Basic IVFTNG1RJiokMk5pYUJIbiVNKnc6')
        return response.status(401)

      console.log('gatilho Iugu teste')
      const result = request.all()
      console.log('Iugu data', result)
      return response.ok(result)
    } catch (error) {
      console.log('iugu webhook error', error)
    }
  }
}
