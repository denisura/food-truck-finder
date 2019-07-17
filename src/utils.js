import inquirer from 'inquirer';

export async function promptShowMore() {
  const questions = [];
  questions.push({
    type: 'confirm',
    name: 'more',
    message: 'Show more?',
    default: true,
  });
  return await inquirer.prompt(questions);
}

export async function promptTryAgain() {
  const questions = [];
  questions.push({
    type: 'confirm',
    name: 'try',
    message: 'Try again?',
    default: true,
  });
  return await inquirer.prompt(questions);
}

export async function observeStore(store, select, onChange) {
  let currentState;

  function handleChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState, store.getState());
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
