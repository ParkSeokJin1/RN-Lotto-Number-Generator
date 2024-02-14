import { getRandomSixNumber } from "../utils/Utils";

export const CREATE_NEW_NUMBERS = "CREATE_NEW_NUMBERS";

export const createNewNumbers = () => {
  const numbers = getRandomSixNumber();

  return {
    type: CREATE_NEW_NUMBERS,
    numbers, // 랜덤 번호 1 ~45 까지 만들어주는 함수 
  };
};
