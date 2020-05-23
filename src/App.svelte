<script>
  import Tabs from "./shared/Tabs.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const handleTabChange = e => {
    activeItem = e.detail;
  };

  const handleAddPoll = e => {
    activeItem = "Current Polls";
  };
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={handleTabChange} />
  {#if activeItem === 'Current Polls'}
    <PollList />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleAddPoll} />
  {/if}
</main>
<Footer />
