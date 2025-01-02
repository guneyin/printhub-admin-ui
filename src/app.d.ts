// See: https://kit.svelte.dev/docs/types#app
// import { Result} from "neverthrow";

import { Session} from "@/types";

declare global {
    namespace App {
        interface Locals {
            session: Session | null;
        }
    }
}
