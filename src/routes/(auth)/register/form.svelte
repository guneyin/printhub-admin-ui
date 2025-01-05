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

    export let data: SuperValidated<Infer<RegisterSchema>>;

    const form = superForm(data, {
        validators: zodClient(registerSchema),
    });

    const { form: formData, enhance } = form;

    formData.set({email: 'guneyin@ya.ru', password: '123456', passwordConfirm: '123456'})
</script>

<Card.Root class="mx-auto max-w-sm w-[380px]">
    <Card.Header>
      <Card.Title class="text-2xl">Register</Card.Title>
    </Card.Header>
    <Card.Content>
        <form method="POST" use:enhance>
            <div class="grid gap-4">
                <div class="grid gap-2">
                    <Form.Field {form} name="email">
                        <Form.Control let:attrs>
                            <Form.Label>Email</Form.Label>
                            <Input {...attrs} bind:value={$formData.email} />
                        </Form.Control>
                        <Form.FieldErrors />
                    </Form.Field>
                </div>

                <div class="grid gap-2">
                    <Form.Field {form} name="password">
                        <Form.Control let:attrs>
                            <Form.Label>Password</Form.Label>
                            <Input type="password" {...attrs} bind:value={$formData.password} />
                        </Form.Control>
                        <Form.FieldErrors />
                    </Form.Field>
                </div>

                <div class="grid gap-2">
                    <Form.Field {form} name="passwordConfirm">
                        <Form.Control let:attrs>
                            <Form.Label>Confirm Password</Form.Label>
                            <Input type="password" {...attrs} bind:value={$formData.passwordConfirm} />
                        </Form.Control>
                        <Form.FieldErrors />
                    </Form.Field>
                </div>

                <Button type="submit" class="w-full">Send</Button>
            </div>
        </form>
    </Card.Content>
</Card.Root>