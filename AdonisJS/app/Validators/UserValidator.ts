import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(40),
    ]),
    lastname: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(80),
    ]),
    username: schema.string({ trim: true }, [
      rules.required(),
      rules.unique({ table: 'users', column: 'username' }),
    ]),
    email: schema.string({ trim: true }, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({ trim: true }, [
      rules.required(),
      rules.minLength(8),
    ]),
  })

  public messages = {
    'name.required': 'El nombre es obligatorio.',
    'name.maxLength': 'El nombre no puede tener más de {{ options.maxLength }} caracteres.',
    'lastname.required': 'El apellido es obligatorio.',
    'lastname.maxLength': 'El apellido no puede tener más de {{ options.maxLength }} caracteres.',
    'username.required': 'El nombre de usuario es obligatorio.',
    'username.unique': 'Este nombre de usuario ya está en uso.',
    'email.required': 'El correo electrónico es obligatorio.',
    'email.email': 'Debe ingresar un correo electrónico válido.',
    'email.unique': 'Este correo electrónico ya está registrado.',
    'password.required': 'La contraseña es obligatoria.',
    'password.minLength': 'La contraseña debe tener al menos {{ options.minLength }} caracteres.',
  }
}
