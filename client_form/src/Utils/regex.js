export const nameRegex = /^[A-Za-z][A-Za-z0-9/*+-, ]*$/;
export const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
export const passwordRegexMay_AZ = /(?=.*[A-Z])/;
export const passwordRegexMin_az = /(?=.*[a-z])/;
export const passwordRegexDigits = /(?=.*\d)/;
export const passwordRegexSpecialCaracter = /(?=.*[@#$%^&+=!_])/;
export const passwordRegexLength = /^.{8,}$/;
export const passwordRegex = /.*\d+.*/;