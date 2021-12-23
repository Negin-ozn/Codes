export const SET_LIST = "SET_LIST";

export const fetchList = () => {

  return async (dispatch) => {

    //--------- Fetch The API And Store It In A variable ---------//

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      dispatch({ type: SET_LIST, payload: resData });

    } catch (err) {
      throw err;
    }
  };
};
