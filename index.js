
// PART 01 1.1
const quote_list = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans."]
const quote_people = [" -Nelson Mandela", " -Walt Disney", " -Steve Jobs", " -Eleanor Roosevelt", " -Oprah Winfrey", " -James Cameron", " -John Lennon"]
window.onload = () => {
    let index = Math.floor(Math.random() * 7)
    document.getElementById('quote').innerText = quote_list[index]
    document.getElementById('quote-people').innerText = quote_people[index]
}

const btn_pink = () => {
    document.getElementById("quote-box").style.background = 'rgb(240, 133, 133)'
    document.getElementById("quote-box").style.color = "brown"
    document.getElementById("quote-box").style.border = "5px solid darkcyan"
    document.getElementById("quote-box").style.fontFamily = "comic sans"
    document.getElementById("quote-box").style.fontSize = "16px"
}

const btn_light_green = () => {
    document.getElementById("quote-box").style.background = '#D4ECDD'
    document.getElementById("quote-box").style.color = "darkcyan"
    document.getElementById("quote-box").style.border = "5px solid rgb(240, 133, 133)"
    document.getElementById("quote-box").style.fontFamily = "Tahoma"
    document.getElementById("quote-box").style.fontSize = "17px"
}

const btn_dark_green = () => {
    document.getElementById("quote-box").style.background = 'rgb(72, 170, 146)'
    document.getElementById("quote-box").style.color = "darkgreen"
    document.getElementById("quote-box").style.border = "5px solid darkgreen"
    document.getElementById("quote-box").style.fontFamily = "monospace"
    document.getElementById("quote-box").style.fontSize = "18px"
}

const btn_brown = () => {
    document.getElementById("quote-box").style.background = 'burlywood'
    document.getElementById("quote-box").style.color = "brown"
    document.getElementById("quote-box").style.border = "5px solid yellow"
    document.getElementById("quote-box").style.fontFamily = "Times new roman"
    document.getElementById("quote-box").style.fontSize = "16px"
}


// Part 01 1.2

const converter_btn = () => {
    let to_kg = 2.2046
    let to_lbs = 0.4536

    let value = parseFloat(document.getElementById('unit-input').value)

    let option = document.getElementById('select-menu').value

    if (!isNaN(value)) {
        if (option == '1') {
            document.getElementById('convert-result').innerText = "Result is " + (value * to_lbs).toFixed(3) + " lbs"
        } else {
            document.getElementById('convert-result').innerText = "Result is " + (value * to_kg).toFixed(3) + " kg(s)"
        }
    }


}


// Part 02 

const part_02_event = () => {
    let inputs = document.getElementById('series-number-input').value
    temp = inputs.split(',')
    let values = []
    for (let i = 0; i < temp.length; i++) {
        values[i] = parseInt(temp[i]);
    }
    document.getElementById('max').innerText = Math.max(...values)
    document.getElementById('min').innerText = Math.min(...values)
    let sum = (arr) => arr.reduce((a, b) => a + b)
    document.getElementById('sum').innerText = sum(values)
    document.getElementById('avg').innerText = sum(values) / values.length
    document.getElementById('reverse').innerText = temp.reverse()
}


// Part 03

const clear_it = () => {
    document.getElementById('text-area').value = ''
}

const capitalize = () => {
    let value = document.getElementById('text-area').value
    document.getElementById('text-area').value = value.toUpperCase();
}

const sort_it = () => {
    let temp = document.getElementById("text-area").value;
    let values = temp.split("\n");
    values = values.sort();
    temp = "";
    for (i = 0; i < values.length; i++) {
        temp = temp + values[i] + "\n";
    }
    document.getElementById("text-area").value = temp;
}

const reberse = () => {
    let temp = document.getElementById("text-area").value;
    let values = temp.split("\n");
    values = values.reverse();
    temp = "";
    for (i = 0; i < values.length; i++) {
        temp = temp + values[i] + "\n";
    }
    document.getElementById("text-area").value = temp;
}

const strip_it = () => {
    let temp = document.getElementById("text-area").value;
    let values = temp.split("\n");
    let empty = []
    for (i = 0; i < values.length; i++) {
        let lala = values[i].trim();
        if (lala != "") {
            empty.push(lala);
        }
    }

    let meow = "";
    for (j = 0; j < empty.length; j++) {
        meow = meow + empty[j] + "\n";
    }
    document.getElementById("text-area").value = ''
    document.getElementById("text-area").value = meow;
}

const add_digit = () => {
    let temp = document.getElementById("text-area").value;
    let values = temp.split("\n");
    let empty = ""
    for (i = 0; i < values.length; i++) {
        empty = empty + (i + 1) + ". " + values[i] + "\n";
    }
    document.getElementById("text-area").value = empty;
}

const shuffle = () => {
    let temp = document.getElementById("text-area").value;
    let values = temp.split("\n");
    let empty = ""
    let shuffled_arry = values.sort(() => Math.random() - 0.5);
    for (i = 0; i < shuffled_arry.length; i++) {
        empty = empty + shuffled_arry[i] + "\n";
    }
    document.getElementById("text-area").value = empty;
}