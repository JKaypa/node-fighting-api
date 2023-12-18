import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters

  getAll() {
    const all = fighterRepository.getAll();
    if (all) {
      return all;
    }
    throw Error("Something failed!");
  }

  search(search) {
    const item = fighterRepository.getOne(search);
    if (!item) {
      throw Error("Fighter not found!");
    }
    return item;
  }

  create(data) {
    const { name } = data;
    const isFighter = fighterRepository.getOne({ name });

    if (!isFighter) {
      const fighter = fighterRepository.create(data);
      return fighter;
    }
    throw Error("This fighter already exists!");
  }

  edit(id, data) {
    const fighter = fighterRepository.getOne({ id });
    if (!fighter) {
      throw Error("Fighter not found!");
    }
    const updatedData = fighterRepository.update(id, data);
    return updatedData;
  }

  remove(id) {
    const fighter = fighterRepository.getOne({ id });
    if (!fighter) {
      throw new Error("Fighter not found!");
    }
    const deleted = fighterRepository.delete(id);
    return deleted;
  }
}

const fighterService = new FighterService();

export { fighterService };
