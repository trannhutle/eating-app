export const LOAD_DATA = "LOAD_DATA";

function loadData(isFinished) {
  return {
    type: LOAD_DATA,
    isFinished
  };
}

export function handleLoadData(isFinished = false) {
  return dispatch => {
    dispatch(loadData(isFinished));
  };
}
