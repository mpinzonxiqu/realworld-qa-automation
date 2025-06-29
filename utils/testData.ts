// === utils/testData.ts ===
export const randomUser = () => {
    const now = Date.now();
    return {
        email: `user${ now }@mail.com`,
        username: `user${ now }`,
        password: 'P@ssw0rd123',
    };
};
