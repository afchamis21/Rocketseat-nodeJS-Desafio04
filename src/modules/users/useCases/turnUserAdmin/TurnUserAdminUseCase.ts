import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const target_user = this.usersRepository.findById(user_id);
    if (!target_user) {
      throw new Error("User not found");
    }

    const user = this.usersRepository.turnAdmin(target_user);
    return user;
  }
}

export { TurnUserAdminUseCase };
