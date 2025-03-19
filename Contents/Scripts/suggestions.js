// LaunchBar Action Script

// Returns JSON.
const SUGGEST_URL = "https://kagi.com/api/autosuggest?q=";

function runWithString(string) {
  // Get suggestions.
  string = encodeURIComponent(string);
  const suggestionsJSON = HTTP.getJSON(
    SUGGEST_URL + string.replaceAll("%20", "+")
  ).data[1];

  try {
    let suggestions = [];

    suggestionsJSON.forEach((element) => {
      suggestions.push({
        title: element,
        icon: "kagi-logo.png",
      });
    });
    return suggestions;
  } catch (exception) {
    LaunchBar.log("Exception while parsing result: " + exception);
    return [];
  }
}
