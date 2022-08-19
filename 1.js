const input = "4276 1234 1313";
// output = "4276 **** **** 1313" //

function maskCard(input) {
  if (!input && input === "") return "";

  const splitedInput = input.split(" ");
  const splitedInputLength = splitedInput.length;
  let output = "";

  switch (splitedInputLength) {
    case 0:
      return "";

    case 1:
      return "****";

    case 2:
      return "**** ****";

    default:
      for (let i = 0; i < splitedInputLength; i++) {
        if (0 < i && i < splitedInputLength - 1) {
          output += "**** ";
        } else {
          output = output + splitedInput[i] + " ";
        }
      }

      return output.trim();
  }
}

console.log(maskCard(input));
