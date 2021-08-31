import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";
import { connect } from "react-redux";

enableES5();

//초기값
let BeerCart = [{ id: 0, name: "시원한 맥주", quan: 2, image: null }];

function rootReducer(state = BeerCart, action) {
  if (action.type === "항목추가") {
    let found = state.findIndex((a) => {
      return a.name === action.data.name;
    });

    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(action.data);
      return copy;
    }
  } else if (action.type === "ADD_BEER") {
    let copy = [...state];
    copy[action.idx].quan++;
    return copy;
  } else if (action.type === "MINUS_BEER") {
    let copy2 = [...state];
    copy2[action.idx].quan > 0
      ? copy2[action.idx].quan--
      : (copy2[action.idx].quan = 0);
    return copy2;
  } else if (action.type === "DELETE_BEER") {
    let copy3 = [...state];
    let delBeer = copy3.filter((a) => {
      return a.id !== action.id;
    });
    return delBeer;
  } else {
    return state;
  }
}

// const indexProps = (state) => {
//   return {
//     state: state.reducer,
//   };
// };

// const rootReducer = combineReducers({});

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([]);
}
