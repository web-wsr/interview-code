const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "AitSchool" }];



function newArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(newArr(arr[i]));
        } else if (typeof arr[i] === "object" && arr[i] !== null) {
            result.push(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(newArr(arr));

// Composition API
// 等于 beforeCreated和 created
// setup() {
//     onBeforeMount(() => {
//         console.log('beforeMount');
//     }),
//         onMounted(() => {
//             console.log('mounted');

//         }),

//         onbeforeUpdate(() => {
//             console.log('onbeforeUpdate');
//         }),

//         onUpdate(() => {
//             console.log('onUpdate');
//         }),

//         onBeforeUnmounted(() => {
//             console.log('onUnmounted');
//         }),

//         onUnmounted(() => {
//             console.log('onUnmounted');
//         })
// }


