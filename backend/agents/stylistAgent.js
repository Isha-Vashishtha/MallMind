exports.suggestStyle = (input) => {
  input = input.toLowerCase();

  if (input.includes("wedding")) {
    return "Formal Slim Fit Suit";
  }

  if (input.includes("casual")) {
    return "Smart Casual Blazer";
  }

  return "Standard Fit";
};