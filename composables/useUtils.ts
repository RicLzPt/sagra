export const useUtils = () => {
    const sayHello = () => {
        console.log('Hello useUtils!');
    }
    return {
        sayHello,
    };
};