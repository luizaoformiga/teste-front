export default interface Response {
    data: {
      user: {
        email: string;
        password: string;
      };
      token: string;
    };
}