

// A regex to validate a email address input.
export const mailRegex = /^[A-Za-z0-9._-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;

// A regex to validate a german name, just letters, number and whitespaces.
export const nameRegex = /^[a-zA-ZäöüÄÖÜß0-9 ]*$/;

// A regex to validate a german text. Just letters, numbers, whitespaces and normal punctuation marks.
export const messageRegex = /^[a-zA-ZäöüÄÖÜß0-9 .,;:!?'"\-–—_+=\/\\|@#$%^&*~`]*$/;

// A regex validate a international name.
export const interNameRegex = /^[a-zA-ZäöüÄÖÜßÀ-ÖØ-öø-ÿĀ-žḀ-ẙ0-9 `"'´`_-]*$/;

// A regex to ceck if {}[]<> are included.
export const clingsIncluded = /[{}\[\]<>()]/;

// A regex to check if a number is included.
export const numberIncluded = /[0-9]/;

// A regex to check if empty spaces are included.
export const noSpaces = /\s/;

// A reges to check for numbers, spaces, dots and commas.
export const amountNumber = /^[0-9\s.,]*$/;