export default interface Response {
  data: {
    email: string;
    password: string;
  };
  token: string;
}