import "./App.css";
import Calender from "./components/calender/calender";
import { timeSlot, days } from "./components/form/form";


function App() {

  let map = [];

  createMap();


  function createMap() {
    console.log("calling");
    for (let x = 0; x < 6; x++) {
      map[x] = [];
      for (let y = 0; y <= 10; y++) {
        addCell(x, y);
      }
    }
    addDays();
    addTimeSlots();
  }

  function addCell(x, y) {
    map[x][y] = [];
  }

  function cell(x, y) {
    return [];
  }

  function addDays() {
    map[0][0] = "";
    map[1][0] = days[0];
    map[2][0] = days[1];
    map[3][0] = days[2];
    map[4][0] = days[3];
    map[5][0] = days[4];
  }

  function addTimeSlots() {
    map[0][1] = timeSlot[0];
    map[0][2] = timeSlot[1]
    map[0][3] = timeSlot[2]
    map[0][4] = timeSlot[3]
    map[0][5] = timeSlot[4]
    map[0][6] = timeSlot[5]
    map[0][7] = timeSlot[6]
    map[0][8] = timeSlot[7]
    map[0][9] = timeSlot[8]
    map[0][10] = timeSlot[9]
  }

  return (
    <div className="App">
      <Calender maps={map} />
    </div>
  );
}

export default App;
