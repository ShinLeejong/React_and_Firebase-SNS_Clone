export const TimeFormatter = (convertingTime) => {

    const date = new Date(convertingTime);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const theDay = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const result = `${year}년 ${month}월 ${theDay}일 ${hours}시 ${minutes}분 ${seconds}초`;

    return result;
};