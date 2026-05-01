import { useDispatch, useSelector } from "react-redux";
import { setPrecision, toggleTheme } from "./settingsSlice";

function useSettings() {
  const dispatch = useDispatch();

  //data
  const precision = useSelector((state) => state.settings.general.precision);
  const appThemeMode = useSelector(
    (state) => state.settings.theme.appThemeMode,
  );

  const toggleThemeAction = (data) => dispatch(toggleTheme(data));
  const setPrecisionAction = (data) => dispatch(setPrecision(data));

  return {
    precision,
    appThemeMode,

    toggleThemeAction,
    setPrecisionAction,
  };
}

export default useSettings;
