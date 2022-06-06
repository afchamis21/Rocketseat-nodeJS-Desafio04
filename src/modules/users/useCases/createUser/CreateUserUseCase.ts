import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user_exists = this.usersRepository.findByEmail(email)
    if (user_exists) {
      throw new Error('User already exists')
    }
    
    const created_user = this.usersRepository.create({ email, name });
    return created_user;
  }
}

export { CreateUserUseCase };
