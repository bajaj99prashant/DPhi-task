import { v4 as uuid } from "uuid";
import { setOldDate } from "./handleSorting";

export const notes = [
  {
    id: uuid(),
    title: "Anything 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia beatae, officia voluptatibus aliquid nostrum culpa similique sequi quibusdam qui tenetur nisi ullam sapiente minus ut recusandae reprehenderit illo architecto.",
    timestamp: +new Date(),
  },
  {
    id: uuid(),
    title: "Anything 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia beatae, officia voluptatibus aliquid nostrum culpa similique sequi quibusdam qui tenetur nisi ullam sapiente minus ut recusandae reprehenderit illo architecto.",
    timestamp: setOldDate(29),
  },
  {
    id: uuid(),
    title: "Anything 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia beatae, officia voluptatibus aliquid nostrum culpa similique sequi quibusdam qui tenetur nisi ullam sapiente minus ut recusandae reprehenderit illo architecto.",
    timestamp: setOldDate(5),
  },
  {
    id: uuid(),
    title: "Anything 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia beatae, officia voluptatibus aliquid nostrum culpa similique sequi quibusdam qui tenetur nisi ullam sapiente minus ut recusandae reprehenderit illo architecto.",
    timestamp: setOldDate(40),
  },
  {
    id: uuid(),
    title: "Anything 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia beatae, officia voluptatibus aliquid nostrum culpa similique sequi quibusdam qui tenetur nisi ullam sapiente minus ut recusandae reprehenderit illo architecto.",
    timestamp: setOldDate(400),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.note];
    case "UPDATE_NOTE":
      return state.map((note) =>
        note.id === action.note.id ? action.note : note
      );
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
