import * as FileSystem from "expo-file-system";
export const CONFIRM_WORD = "CONFIRM_WORD";
export const SELECT_LETTER = "SELECT_LETTER";
export const DELETE_LETTER = "DELETE_LETTER";
export const GET_RANDOM_WORD = "GET_RANDOM_WORD";
export const ADD_SCORE = "ADD_SCORE";
export const LOAD_SCORE = "LOAD_SCORE";
export const RELOAD_APP = "RELOAD_APP";
export const NEW_ROUND = "NEW_ROUND";

import { insertScore, loadScores } from "../../db";

export const confirmWord = (randomWord) => ({
  type: CONFIRM_WORD,
  randomWord,
});

export const selectLetter = (letter) => ({
  type: SELECT_LETTER,
  letter,
});

export const deleteLetter = () => ({
  type: DELETE_LETTER,
});

export const getRandomWord = () => ({
  type: GET_RANDOM_WORD,
});

export const reloadApp = () => ({
  type: RELOAD_APP,
});

export const newRound = () => ({
  type: NEW_ROUND,
});

export const addScore = (name, image, total, win) => {
  return async (dispatch) => {
    const filename = image.split("/").pop();
    const Path = FileSystem.documentDirectory + filename;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      const result = await insertScore(name, Path, total, win);
      dispatch({
        type: ADD_SCORE,
        payload: {
          id: result.insertID,
          name,
          image: Path,
          total,
          win,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadScore = () => {
  return async (dispatch) => {
    try {
      const result = await loadScores();
      dispatch({
        type: LOAD_SCORE,
        scores: result.rows._array,
      });
    } catch (error) {
      throw error;
    }
  };
};
