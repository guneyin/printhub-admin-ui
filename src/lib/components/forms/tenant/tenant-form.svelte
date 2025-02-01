<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Form from '$lib/components/ui/form';

	import toast from 'svelte-french-toast';

	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { tenantFormSchema, type TenantFormSchema } from './schema';

	let {
		open = $bindable(false),
		data
	}: {
		open: boolean;
		data: { form: SuperValidated<Infer<TenantFormSchema>> };
	} = $props();


	// const form = superForm(tenantForm, {
	// 	validators: zodClient(tenantFormSchema),
	// 	onError({ result }) {
	// 		toast.error(result.error.message);
	// 	}
	// });
	const form = superForm(data.form, {
		validators: zodClient(tenantFormSchema),
	});

	const { form: formData, enhance } = form;

	let title = $derived($formData.name ? `Düzenle: ${$formData.name}` : 'Yeni Ekle');
	let desc = $derived($formData.uuid ? $formData.uuid : '');

	// $effect(() => {
	// 	fetchTenant(tenantId);
	// });

	// async function fetchTenant(id: string) {
	// 	if (id !== 'new') {
	// 		const response = await fetch('/tenant?id=' + id);
	// 		const data = await response.json();
	// 		if (!response.ok) {
	// 			return toast.error(response.statusText);
	// 		}
	//
	// 		form.form.set(data);
	// 	}  else { form.reset() }
	// }
</script>

<!-- <SuperDebug data={form} /> -->

<Dialog.Root bind:open>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>{title}</Dialog.Title>
			<Dialog.Description>{desc}</Dialog.Description>
		</Dialog.Header>

		<form method="POST" action="?/saveTenant" use:enhance>

			<Input type="hidden" bind:value={$formData.uuid} />

			<Form.Field {form} name="name">
				<Form.Control>
					<Form.Label>Ünvan</Form.Label>
					<Input bind:value={$formData.name} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="email">
				<Form.Control>
					<Form.Label>E-posta</Form.Label>
					<Input bind:value={$formData.email} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="phone">
				<Form.Control>
					<Form.Label>Telefon</Form.Label>
					<Input bind:value={$formData.phone} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="address">
				<Form.Control>
					<Form.Label>Adres</Form.Label>
					<Input bind:value={$formData.address} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="logo">
				<Form.Control>
					<Form.Label>Logo</Form.Label>
					<Input bind:value={$formData.logo} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Button type="submit">Submit</Form.Button>

		</form>
	</Dialog.Content>
</Dialog.Root>
