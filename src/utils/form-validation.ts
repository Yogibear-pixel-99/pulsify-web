import {
  mailRegex,
  interNameRegex,
  clingsIncluded,
  numberIncluded,
  noSpaces,
} from "@/utils/regexes";

export function checkIfToShort(minLength: number, value: string): boolean {
  return value.length < minLength;
}

export function checkIfToLong(maxLength: number, value: string): boolean {
  return value.length > maxLength;
}

export function nameValid(value: string) {
  let valid = true;
  let errorName = "default";
  if (!interNameRegex.test(value)) {
    (errorName = "noSpecial"), (valid = false);
  }
  if (checkIfToShort(2, value)) {
    (errorName = "minTwoLetters"), (valid = false);
  }
  return { valid, errorName };
}

export function emailValid(value: string) {
  let valid = true;
  let errorName = "default";
  if (!mailRegex.test(value)) {
    (errorName = "mailNotValid"), (valid = false);
  }
  return { valid, errorName };
}

export function passwordValid(value: string) {
  let valid = true;
  let errorName = "default";
  if (!numberIncluded.test(value)) {
    errorName = "minNumberOne";
    valid = false;
  }
  if (checkIfToShort(8, value)) {
    errorName = "minEightLetters";
    valid = false;
  }
  if (checkIfToLong(20, value)) {
    errorName = "maxTwentyLetters";
    valid = false;
  }
  if (clingsIncluded.test(value)) {
    errorName = "noClinges";
    valid = false;
  }
  if (noSpaces.test(value)) {
    errorName = "noSpace";
    valid = false;
  }
  return { valid, errorName };
}

export function confirmPwValid(pw: string, confirmPw: string) {
  let valid = true;
  let errorName = "default";
  if (pw != confirmPw) {
    errorName = "noPwMatch"; valid = false;
  }
  return { valid, errorName };
}

export function privacyValid(value: boolean) {
  let valid = true;
  let errorName = "default";
  if (value === false) {
    errorName = "notChecked"; valid = false;
  }
  return { valid, errorName };
}
