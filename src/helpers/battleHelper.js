export const doBattle = (playerSelection, computerSelection) => {
  console.log(
    "playerSelection: " +
      playerSelection +
      ", computerSelection: " +
      computerSelection
  );

  let result = "";

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    result = "wisely";
  } else if (playerSelection === computerSelection) {
    result = "equally";
  } else {
    result = "poorly";
  }
  
  return result;
};
