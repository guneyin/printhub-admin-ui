<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
	import * as Alert from "@/components/ui/alert";
  import Rocket from "svelte-radix/Rocket.svelte";
  import type { PageData, ActionData } from "./$types";
  import RecoverForm from "./recover-form.svelte";
  import PasswordForm from "./password-form.svelte";

  export let data: PageData;
  export let form: ActionData;
</script>
  
<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">

  {#if form?.success}

    <Alert.Root>
      <Rocket class="h-4 w-4" />
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>Please check your mailbox.</Alert.Description>
    </Alert.Root>

  {:else}
    {#if data.showPasswordForm}
      <PasswordForm data={data.passwordForm} />
    {:else}
      <RecoverForm data={data.recoverForm} />
    {/if}
  {/if}

</main>
  