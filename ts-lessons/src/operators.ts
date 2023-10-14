
type User = {
  __id: string;
  name: string;
  age: number;
  email: string;
  createdAt: string;
};

type UserKeysNoMeta1 = Exclude<keyof User, `__id` | `createdAt`> // name, email
type UserKeysNoMeta2 = Pick<User, `name` | `email`> // name, email