<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    import { registerSchema, type RegisterSchema } from "./schema";
    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
	import toast from "svelte-french-toast";

    export let data: SuperValidated<Infer<RegisterSchema>>;

    const form = superForm(data, {
        validators: zodClient(registerSchema),
        onError: ( ({ result }) => toast.error(result.error.message)),
    });

    const { form: formData, enhance } = form;
</script>

<Card.Root class="mx-auto max-w-sm w-[380px]">
    <Card.Header>
      <Card.Title class="text-2xl">Üye ol</Card.Title>
    </Card.Header>
    <Card.Content>
        <form method="POST" use:enhance>
            <div class="grid gap-4">
                <div class="grid gap-2">
                    <Form.Field {form} name="email">
                        <Form.Control let:attrs>
                            <Form.Label>E-posta</Form.Label>
                            <Input {...attrs} bind:value={$formData.email} />
                        </Form.Control>
                        <Form.FieldErrors />
                    </Form.Field>
                </div>

                <div class="grid gap-2">
                    <Form.Field {form} name="password">
                        <Form.Control let:attrs>
                            <Form.Label>Şifre</Form.Label>
                            <Input type="password" {...attrs} bind:value={$formData.password} />
                        </Form.Control>
                        <Form.FieldErrors />
                    </Form.Field>
                </div>

                <div class="grid gap-2">
                    <Form.Field {form} name="passwordConfirm">
                        <Form.Control let:attrs>
                            <Form.Label>Şifre tekrar</Form.Label>
                            <Input type="password" {...attrs} bind:value={$formData.passwordConfirm} />
                        </Form.Control>
                        <Form.FieldErrors />
                    </Form.Field>
                </div>

                <Button type="submit" class="w-full">Üye ol</Button>
            </div>
        </form>
    </Card.Content>
</Card.Root>