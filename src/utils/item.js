import { v4 as uuidv4 } from "uuid";
import * as faker from "faker";
export function generateFakeData() {
  return {
    id: uuidv4(),
    quantity: Math.random(),
    name: faker.lorem.word(),
    description: faker.lorem.words(),
    createdAt: new Date(),
  };
}
