const receivesAFunction = callBack => callBack()

const returnsANamedFunction = () => function hello() { console.log('Hello, World!')}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('Anonymous function')
    }
}