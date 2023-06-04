export type SignUpForm = {
  email: string;
  password: string;
  name: string;
  last_name: string;
};

export type SignUpResponse = {
  status: number;
  data: {
    message: string;
    response: { 
      user: {
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: string;
        updatedAt: string;
      };
      token: string;
    }
  }
};