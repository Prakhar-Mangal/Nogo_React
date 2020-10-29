import { Store } from "pullstate";
export const UIStore = new Store({
  isDarkMode: true,
});
//  const isDarkMode = UIStore.useState(s => s.isDarkMode);
//   onClick={() =>
//          UIStore.update(s => {
//            s.isDarkMode = !isDarkMode;
//          })

