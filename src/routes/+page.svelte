<script>
    import { Main_content } from "$lib";
    import { Sub_content }from "$lib";

    const { data } = $props()
    const luukInfo = data.luukInfo
</script>

<!-- COMPONENT: MAIN CONTENT--> 
<Main_content />

<!-- COMPONENT: SUB CONTENT--> 
<Sub_content { luukInfo } />
