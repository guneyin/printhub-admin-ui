<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import toast from "svelte-french-toast";
    import { goto } from "$app/navigation";
    import { formSchema, type FormSchema } from "./schema";
    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { UserRole } from '@/types';

    export let data: SuperValidated<Infer<FormSchema>>;

    const form = superForm(data, {
        validators: zodClient(formSchema),
        onError: ( ({ result }) => toast.error(result.error.message)),
    });

    const { form: formData, enhance } = form;
</script>

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
                    <div class="flex items-center">
                        <Form.Label>Şifre</Form.Label>
                        <a href="/recover" class="ml-auto inline-block text-sm underline">Şifremi unuttum</a>
                    </div>
                    <Input type="password" {...attrs} bind:value={$formData.password} />
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
        </div>

        <Form.Field {form} name="role">
            <Form.Control let:attrs>
                <Input type="hidden" {...attrs} bind:value={$formData.role} />
            </Form.Control>
        </Form.Field>

        <Button type="submit" class="w-full">Giriş yap</Button>
        <Button variant="outline" class="w-full" on:click={() => goto("/oauth/google?role=admin")}>Google ile giriş yap</Button>
    </div>

    {#if $formData.role === UserRole.client}
    <div class="mt-4 text-center text-sm">
        Don&apos;t have an account?
        <a href="/register" class="underline"> Sign up </a>
    </div>
    {/if}
</form>