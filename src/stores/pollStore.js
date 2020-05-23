import { writable } from 'svelte/store';

const PollStore = writable([
  {
    question: 'React or Angular ?',
    answerA: 'React',
    answerB: 'Angular',
    votesA: 9,
    votesB: 9,
    id: 1,
  },
]);

export default PollStore;
