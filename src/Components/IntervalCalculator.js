export const GetTime = (convertingTime) => {

    const now = Date.now();
    const calculated = (now - convertingTime);
    console.log(calculated);

    return calculated;
}