function humanize(s) {
  return s
    .replace("-iii", "-3")
    .replace("-ii", "-2")
    .replace("-iv", "-4")
    .replace("-vii", "-7")
    .replace("-vi", "-6")
    .replace("-v", "-5")
    .replace("-ix", "-9")
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .split(" ")
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(" ");
}

export default humanize;
