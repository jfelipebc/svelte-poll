<script>
  import { createEventDispatcher } from "svelte";
  import PollStore from "../stores/pollStore";
  import Button from "../shared/Button.svelte";

  let dispatch = createEventDispatcher();
  let isValid = false;
  let fields = {
    question: "",
    answerA: "",
    answerB: ""
  };

  let errors = {
    question: "",
    answerA: "",
    answerB: ""
  };

  const handleSubmit = () => {
    isValid = true;
    if (fields.question.trim().length < 5) {
      isValid = false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }

    if (fields.answerA.trim().length < 1) {
      isValid = false;
      errors.answerA = "Answer A cannot be empty";
    } else {
      errors.answerA = "";
    }

    if (fields.answerB.trim().length < 1) {
      isValid = false;
      errors.answerB = "Answer B cannot be empty";
    } else {
      errors.answerB = "";
    }

    if (isValid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      PollStore.update(currentPolls => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    }
  };
</script>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerA}</div>
  </div>
  <Button>Add poll</Button>
</form>
