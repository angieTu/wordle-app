import data from "../../constants/data";
import User from "../../model/user";
import { alphabet1, alphabet2, alphabet3 } from "../../constants/alphabet";
import { Alert } from "react-native";
import {
  CONFIRM_WORD,
  DELETE_LETTER,
  SELECT_LETTER,
  GET_RANDOM_WORD,
  ADD_SCORE,
  LOAD_SCORE,
  RELOAD_APP,
  NEW_ROUND,
} from "../actions/game.actions";

const initialState = {
  letter: "",
  data: data,
  alphabet: alphabet1.concat(alphabet2, alphabet3),
  randomWord: "",
  userValueArray: [],
  userStateArray: [],
  board: [],
  rounds: 1,
  finishedGame: false,
  userWord: [],
  total: 0,
  win: 0,
  scores: [],
};

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_WORD:
      const min = state.data[0].id;
      const max = state.data.length;
      const randomId = Math.floor(Math.random() * (max - min)) + min;

      return {
        ...state,
        randomWord: state.data
          .find((e) => randomId === e.id)
          .word.toUpperCase(),
      };

    case SELECT_LETTER:
      if (state.userWord.length <= 4) {
        const addLetter = [...state.userWord];
        addLetter.push({ value: action.letter, state: "" });
        return {
          ...state,
          userWord: addLetter,
        };
      } else if (state.userWord.length > 4) {
        return {
          ...state,
        };
      }

    case DELETE_LETTER:
      const deleteLetter = [...state.userWord];
      deleteLetter.pop();
      return {
        ...state,
        userWord: deleteLetter,
      };
    case NEW_ROUND:
      for (let i = 0; i < state.alphabet.length; i++) {
        state.alphabet[i].state = "";
      }
      return {
        ...state,
        letter: "",
        userValueArray: [],
        userStateArray: [],
        finishedGame: false,
        userWord: [],
        board: [],
        rounds: 1,
        total: state.total + 1,
      };
    case ADD_SCORE:
      for (let i = 0; i < state.alphabet.length; i++) {
        state.alphabet[i].state = "";
      }
      const user = new User(
        Date.now(),
        action.payload.name,
        action.payload.image,
        action.payload.total,
        action.payload.win
      );
      return {
        ...state,
        scores: [...state.scores, user],
        letter: "",
        userValueArray: [],
        userStateArray: [],
        board: [],
        rounds: 1,
        finishedGame: false,
        userWord: [],
        total: 0,
        win: 0,
      };
    case LOAD_SCORE:
      return {
        ...state,
        scores: action.scores,
      };

    case RELOAD_APP:
      return {
        ...state,
        letter: "",
        userValueArray: [],
        userStateArray: [],
        board: [],
        rounds: 1,
        finishedGame: false,
        userWord: [],
        total: 0,
        win: 0,
      };
    case CONFIRM_WORD:
      const wordGuess = [];
      const newStateArray = [];
      if (state.userWord.length === 5) {
        let wordArray = state.randomWord.split("");
        for (let i = 0; i < state.userWord.length; i++) {
          wordGuess.push(state.userWord[i].value);

          if (wordArray.includes(state.userWord[i].value)) {
            state.userWord[i].state = "almost";
            state.alphabet.find(
              (e) => e.value === state.userWord[i].value
            ).state = "almost";

            if (wordArray[i] === state.userWord[i].value) {
              state.userWord[i].state = "success";
              state.alphabet.find(
                (e) => e.value === state.userWord[i].value
              ).state = "success";
            }
          }

          if (
            state.userWord[i].state !== "almost" &&
            state.userWord[i].state !== "success"
          ) {
            state.userWord[i].state = "none";
            state.alphabet.find(
              (e) => e.value === state.userWord[i].value
            ).state = "none";
          }
          newStateArray.push(state.userWord[i].state);
        }

        if (wordGuess.join("") === action.randomWord) {
          Alert.alert("Ganó");
          return {
            ...state,
            finishedGame: true,
            board: [...state.board, wordGuess],
            userStateArray: [...state.userStateArray, newStateArray],
            total: state.total + 1,
            win: state.win + 1,
          };
        }

        if (state.rounds === 6 && wordGuess.join("") !== action.randomWord) {
          Alert.alert("Perdió");
          return {
            ...state,
            finishedGame: true,
            total: state.total + 1,
            board: [...state.board, wordGuess],
            userStateArray: [...state.userStateArray, newStateArray],
          };
        }

        return {
          ...state,
          board: [...state.board, wordGuess],
          userStateArray: [...state.userStateArray, newStateArray],
          userWord: [],
          rounds: state.rounds + 1,
        };
      }

      if (state.userWord.length < 5) {
        Alert.alert("No hay suficientes letras para una palabra");
      }

    default:
      return state;
  }
};

export default GameReducer;
