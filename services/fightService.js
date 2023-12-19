import { fightRepository } from "../repositories/fightRepository.js";

class FightersService {
  // OPTIONAL TODO: Implement methods to work with fights

  getAll() {
    const all = fightRepository.getAll();
    if (all) {
      return all;
    }
    throw Error("Something failed!");
  }

  search(search) {
    const item = fightRepository.getOne(search);
    if (!item) {
      throw Error("Fight not found!");
    }
    return item;
  }

  create(data) {
    const fight = fightRepository.create(data);
    return fight;
  }

  edit(id, data) {
    const fight = fightRepository.getOne({ id });
    if (!fight) {
      throw Error("Fight not found!");
    }
    const updatedData = fightRepository.update(id, data);
    return updatedData;
  }

  remove(id) {
    const fight = fightRepository.getOne({ id });
    if (!fight) {
      throw new Error("Fight not found!");
    }
    const deleted = fightRepository.delete(id);
    return deleted;
  }
}

const fightersService = new FightersService();

export { fightersService };
