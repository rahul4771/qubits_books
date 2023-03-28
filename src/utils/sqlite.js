/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// waiter
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// init sqlite
var sqlite3 = undefined;
(function initialize_sqlite() {
  sqlite3InitModule({
    print: console.log,
    printErr: console.error,
  }).then(function (result) {
    sqlite3 = result;
  });
})();

export const runSqlCode = (code) => async () => {
  let sqlite_driver = await get_sqlite_driver();
  const oo = sqlite_driver.oo1; /*high-level OO API*/
  const db = new oo.DB("/data.db", "cw");
  const process_query = () => {
    try {
      code.split("\n").forEach((query) => {

        if (query.startsWith("--")) return;
        // get the operation from the query
        let op = query.split(/\s/).slice(0, 1)[0].toLowerCase();
        if (op == "create") {
          db.exec(query);
          document.querySelector(".result-1").style.display = "block";
          document.querySelector(".result-1").innerText =
            "Created Table Successfully";
        } else if (op == "insert") {
          db.exec(query);
          document.querySelector(".result-2").style.display = "block";
          document.querySelector(".result-2").innerText =
            "Inserted Data Successfully";
        } else if (op == "select") {
          // Select handling
          let resultRows = [];
          let columnNames = [];
          db.exec({
            sql: query,
            rowMode: "object",
            resultRows: resultRows,
            columnNames: columnNames,
          });
          let columns_string = columnNames.join(" ");
          let resultData = "";
          resultRows.forEach((row) => {
            resultData =
              resultData + `<span>${row.id} ${row.name} ${row.age}</span> <br>`;
          });
          if (resultRows.length > 1) {
            document.querySelector(".result-3").style.display = "block";
            document.querySelector(".result-3").innerHTML = resultData;
          } else {
            document.querySelector(".result-4").style.display = "block";
            document.querySelector(".result-4").innerHTML = resultData;
          }
        } else if (op == "delete") {
          db.exec(query);
        }
      });
    } catch (e) {
      alert(e.message.split(":"));
      // let message = e.message.split(":");
    }
  };

  // check if the user has provided custom data, if so, use it..
  let query_first_line = code.split("\n")[0];
  if (
    query_first_line.search("DATA") != -1 &&
    query_first_line.startsWith("--")
  ) {
    let data_file_name = query_first_line.split(":")[1].trim();
    // fetch the data file
    fetch_with_timeout(`./${data_file_name}`, {
      headers: { "Content-Type": "text/plain" },
      method: "GET",
    })
      .then((response) => response.text())
      .then((response) => {
        // insert new data
        response.split("\n").forEach((line) => {
          line = line.trim();
          if (line === "") return;
          try {
            db.exec(line);
          } catch (e) {
            console.log(e.message);
          }
        });
      })
      .then(() => {
        process_query();
      })
      .catch(
        (error) => alert("Unable to load data file: " + error.message)
        // (item.example_result = "Unable to load data file: " + error.message)
      );
  } else {
    process_query();
  }
};

// rust specific code start..
export const fetch_with_timeout = (url, options, timeout = 6000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), timeout)
    ),
  ]);
};

export const get_sqlite_driver = async () => {
  if (sqlite3) return sqlite3;

  // wait for 5 seconds to initialize
  await wait(5 * 1000).then(() => {
    if (!sqlite3) {
      throw new Error("Sqlite didnt initialize.. reload your browser and try");
    }
    return sqlite3;
  });
};
