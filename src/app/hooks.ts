import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { store } from "./store";

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

 