import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("scores.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL, total TEXT NOT NULL, win TEXT NOT NULL) "
      ),
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        };
    });
  });
  return promise;
};

export const insertScore = (name, image, total, win) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO scores (name, image, total, win) VALUES(?,?, ?,?);",
        [name, image, total, win],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const loadScores = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM scores",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
