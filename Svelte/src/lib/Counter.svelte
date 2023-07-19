<script>
  export let count2 = 5
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>

count2 is {count2}

