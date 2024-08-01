const filterNames = (array, letter) => {
    const filteredArray = [];
    for (const name of array) {

        if (name[0] === letter) {
            filteredArray.push(name);
        }
    }
    console.log(filteredArray);
};


const arrayy = ["Ali", "Ali", "Qabil", "Qalib", "Behlul", "Ali", "Malik", "Kamil"];
filterNames(arrayy, 'A');
filterNames(arrayy, 'Q');
