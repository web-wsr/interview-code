async function asy1() {
    console.log(1);
    await asy2();
    // 下面打印的的顺序，看做是 .then后面的结果，放在微观任务队列智云之中
    console.log(2);
}

asy2 = async () => {
    await setTimeout(() => {
        Promise.resolve().then(() => {
            console.log(3);
        })
        console.log(4);
    }, 0);
}

asy3 = async () => {
    Promise.resolve().then(() => {
        console.log(6);

    })
}

asy1();
console.log(7);
asy3();


// 1 7 6 2 4 3