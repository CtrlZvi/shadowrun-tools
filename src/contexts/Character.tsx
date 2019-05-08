import { createContext } from "react";

import { Character } from "../models/Character";

export const CharacterContext = createContext(new Character());

export default CharacterContext;