<script>
    export let budget
    export let revenue
    const netPrice= ()=>{
        return  revenue-budget
        
    }
</script>
{#if netPrice()>0}
<div class="stat-value text-green-300">${Intl.NumberFormat().format(netPrice())}</div>
{:else}
<div class="stat-value text-red-500">${Intl.NumberFormat().format(netPrice())}</div>
{/if}

