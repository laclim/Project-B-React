export interface User {
  authenticated: boolean;
  userId: string;
}

interface StoreState {
  user: User;
}

export default StoreState;
