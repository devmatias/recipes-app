export const errorMessage = 'Sorry, we haven\'t found any recipes for these filters.';
export function handleEmptyListAlert(list) {
  if (list) {
    global.alert(errorMessage);
  }
}
