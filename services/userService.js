import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  getAll() {
    const all = userRepository.getAll();
    if (all) {
      return all;
    }
    throw Error("Something failed!");
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      throw Error("User not found!");
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
    throw Error("Email or phone number already exists!");
  }

  edit(id, data) {
    const user = userRepository.getOne({ id });
    if (!user) {
      throw Error("User not found!");
    }
    const updatedData = userRepository.update(id, data);
    return updatedData;
  }

  remove(id) {
    const user = userRepository.getOne({ id });
    if (!user) {
      throw new Error("User not found!");
    }
    const deleted = userRepository.delete(id);
    return deleted;
  }
}

const userService = new UserService();

export { userService };
