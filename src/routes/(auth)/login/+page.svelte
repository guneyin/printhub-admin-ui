<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import type { PageData } from "./$types";
    import LoginForm from "./login-form.svelte";

    export let data: PageData;
  </script>

  <Card.Root class="mx-auto max-w-sm w-[380px]">
    <Card.Header>
      <Card.Title class="text-2xl">Giriş yap</Card.Title>
    </Card.Header>
    <Card.Content>

        <LoginForm data={data.form}></LoginForm>

    </Card.Content>
  </Card.Root>
