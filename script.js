function simulateDFA() {
    let states = document.getElementById("states").value.split(",");
    let alphabet = document.getElementById("alphabet").value.split(",");
    let transitionsInput = document.getElementById("transitions").value.split("\n");
    let startState = document.getElementById("startState").value.trim();
    let acceptStates = document.getElementById("acceptStates").value.split(",");
    let input = document.getElementById("inputString").value;
  
    let transitionTable = {};
    transitionsInput.forEach(line => {
      let [left, right] = line.split("=");
      let [state, symbol] = left.split(",");
      if (!transitionTable[state]) transitionTable[state] = {};
      transitionTable[state][symbol] = right.trim();
    });
  
    let currentState = startState;
    for (let i = 0; i < input.length; i++) {
      let symbol = input[i];
      if (!transitionTable[currentState] || !transitionTable[currentState][symbol]) {
        document.getElementById("result").innerText = "Rejected (No transition)";
        return;
      }
      currentState = transitionTable[currentState][symbol];
    }
  
    if (acceptStates.includes(currentState)) {
      document.getElementById("result").innerText = "Accepted ✅";
    } else {
      document.getElementById("result").innerText = "Rejected ❌";
    }
  }
  