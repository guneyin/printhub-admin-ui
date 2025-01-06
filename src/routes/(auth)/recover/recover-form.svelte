<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    import { recoverSchema, type RecoverSchema } from "./schema";
    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";

    export let data: SuperValidated<Infer<RecoverSchema>>;

    const form = superForm(data, {
        validators: zodClient(recoverSchema),
    });

    const { form: formData, enhance } = form;
</script>

<Card.Root class="mx-auto max-w-sm w-[380px]">
    <Card.Header>
      <Card.Title class="text-2xl">Şifre yenileme</Card.Title>
    </Card.Header>
    <Card.Content>
        <form method="POST" action="?/recover" use:enhance>
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

                <Form.Field {form} name="role">
                    <Form.Control let:attrs>
                        <Input type="hidden" {...attrs} bind:value={$formData.role} />
                    </Form.Control>
                </Form.Field>

                <Button type="submit" class="w-full">Devam et</Button>
            </div>
        </form>
    </Card.Content>
</Card.Root>