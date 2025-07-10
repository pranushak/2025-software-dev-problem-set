function validParenthesis(s) {

    while(s.includes("()" || s.include("{}" || s.includes("[]")))) {
        s = s.replace("()", "");
        s = s.replace("{}", "");
        s = s.replace("[]", "");
    }
  return s === "";
}