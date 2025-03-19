// LaunchBar Action Script

// Globals
const SEARCH_URL = "https://kagi.com/search?q=";

function run(argument) {
    if (argument === undefined) {
        // Inform the user that there was no argument
        LaunchBar.alert('No argument was passed to the action');
    } else {
        // Return a single item that describes the argument
        return [{ title: '1 argument passed'}, { title : argument }];
    }
}

/**
 * This function is called by LaunchBar when the user passes text to the action, either by using text input or by using Send To. If your action supports suggestions or live feedback, this function will be called during text input.
 * @param {string} string - The string argument.
 * @returns {Object[]} - JSON.
 */
function runWithString(string) {
    string = encodeURIComponent(string)
    LaunchBar.openURL(SEARCH_URL + string.replaceAll("%20", "+"));
}