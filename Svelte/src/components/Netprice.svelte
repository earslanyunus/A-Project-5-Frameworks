<script>
    export let budget
    export let revenue
   
</script>
{#if revenue-budget>0}
<div class="stat-value text-green-300">${Intl.NumberFormat('en-GB',{notation:'compact',compactDisplay:'short'}).format(revenue-budget)}</div>
{:else}
<div class="stat-value text-red-500">${Intl.NumberFormat('en-GB',{notation:'compact',compactDisplay:'short'}).format(revenue-budget)}</div>
{/if}

