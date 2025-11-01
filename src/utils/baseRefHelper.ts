
export function baseRefHelper (imgPath:string) {

const baseRef = "/simplifyNEWTEST";

    if (process.env.NODE_ENV === "production") {
        return baseRef + imgPath;
    } else {
        return imgPath;
}
}