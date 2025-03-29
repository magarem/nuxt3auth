export default defineEventHandler((event) => {
    deleteCookie(event, 'auth_token')
    deleteCookie(event, 'user_logged')

    return { message: 'Logout realizado com sucesso' }
  })
  