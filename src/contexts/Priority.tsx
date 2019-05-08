import { createContext } from "react";

import { Character } from "../models/Character";
import { PrioritySystemMetadata } from "../models/PrioritySystem";

export const PriorityContext = createContext(new PrioritySystemMetadata(new Character()));

export default PriorityContext;