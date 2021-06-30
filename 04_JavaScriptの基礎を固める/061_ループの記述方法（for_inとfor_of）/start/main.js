const array = [1, 2, 3, 4, 5, 6];

for (let i in array) {
    let v = array[i];
    console.log(v);
}

for(let v of array) {
    console.log(v)
;}

//ofだと値が渡ってくる