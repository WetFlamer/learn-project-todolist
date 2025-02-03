import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleTheme } from "../../store/themeSlice";

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const switchTheme = () => dispatch(toggleTheme());

  return { theme, switchTheme };
};
