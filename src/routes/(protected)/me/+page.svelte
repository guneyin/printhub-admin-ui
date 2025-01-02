<script lang="ts">
	import * as Card from "$lib/components/ui/card";

	let { data } = $props();
	let user = data.user;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{user.name}</Card.Title>
		<Card.Description>{user.email}</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>{user.uuid}</p>
	</Card.Content>
	<Card.Footer>
		<p>{user.role}</p>
	</Card.Footer>
</Card.Root>