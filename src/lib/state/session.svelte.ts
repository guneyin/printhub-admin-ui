class Session {
    id = $state();

    set = (id: string) => {
        this.id = id;
    };

    terminate = () => {
        this.id = '';
    };

    isValid = (): Boolean => {
        return this.id !== undefined;
    }
};

export const session = new Session();