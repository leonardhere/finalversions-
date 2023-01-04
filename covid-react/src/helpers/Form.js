export default function covertNumToDisplay(number) {
  if (!number) return;
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//this is storage
