import Response from './repository/response';

export function post(text: string, user: object): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          email: "teste@front.com",
          password: "teste123"
        },
        token:
        '91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f'
        },
      )
    }, 2000);
  })
}

export const defaults = {
  headers: {
    Authorization: ''
  }
}
