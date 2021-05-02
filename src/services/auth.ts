interface Response {
    token: string;
    user: {
        name: string,
        email: string
    }
}

export function signIn(): Promise<Response>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'auhsdu12h3u523452',
                user: {
                    name: 'Yan',
                    email: 'contato@yandev.com.br'
                },
            })
        }, 2000);
    });
}