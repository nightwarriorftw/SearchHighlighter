const Test = [
  "Lorem ipsum hello dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
];

export function getSearchResults(searchTerm) {
  let resultsList = [];
  for (let i = 0; i < 9; i++) {
    let indexOfSentence = Test[i].substring(searchTerm) ? i : -1;
    console.log(indexOfSentence);
    let sentence = Test[indexOfSentence];
    if (sentence) {
      let indexOfNextSpace = sentence.indexOf(" ");
      let newSentence =
        sentence.slice(0, indexOfNextSpace) +
        " " +
        searchTerm +
        sentence.slice(indexOfNextSpace);lorem2
      resultsList.push({
        id: indexOfSentence,
        content: newSentence
      });
    }
  }
  return resultsList;
}
