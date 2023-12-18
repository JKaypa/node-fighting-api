import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  getAll() {
    const all = userRepository.getAll();
    if (all) {
      return all;
    }
    return null;
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  create(data) {
    const { email, phoneNumber } = data;
    const isUser = userRepository.getOne({ email, phoneNumber });

    if (!isUser) {
      const user = userRepository.create(data);
      return user;
    }
    return null;
  }

  edit(id, data) {
    const updatedData = userRepository.update(id, data);
    return updatedData;
  }

  remove(id) {
    const deleted = userRepository.delete(id);
    return deleted;
  }
}

const userService = new UserService();

export { userService };
