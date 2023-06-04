export type SignInForm = {
  email: string;
  password: string;
};

export type SignInResponse = {
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