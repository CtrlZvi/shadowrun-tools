import { createContext } from "react";

import { Character } from "../models/Character";
import { PrioritySystem } from "../models/PrioritySystem";

export const PrioritySystemContext = createContext(new PrioritySystem(new Character()));

export default PrioritySystemContext;