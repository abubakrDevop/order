const input1 = document.querySelector('.input_1');
const input2 = document.querySelector('.input_2');
const checkbox = document.querySelector('.checkbox');
const button = document.querySelector('.button');
const errorApear1 = document.querySelector('.error_apear1');
const errorApear2 = document.querySelector('.error_apear2');
const regex = /^[a-zA-Z0-9]+$/;

function sendData(event) {
    event.preventDefault();

    errorApear1.style.display = 'none';
    errorApear2.style.display = 'none';
    checkbox.style.border = '1px solid black';

    if (input1.value.trim() === '' || input2.value.trim() === '') {

        if (input1.value.trim() === '') {
            errorApear1.style.display = 'flex';
        }
        if (input2.value.trim() === '') {
            errorApear2.style.display = 'flex';
        }
    } else if (!regex.test(input1.value) || !regex.test(input2.value)) {
        alert('Only latin letters and numbers are allowed!');
    } else if (!checkbox.checked) {
        checkbox.style.border = '1px solid red';
    } else {
        fetchData();
    }
}

function fetchData() {
    const data = {
		input1: input1.value,
		input2: input2.value
    };

    fetch('Твой Api', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseData => {
	    	console.log(responseData);
        })
        .catch(error => {
		    console.error('Error:', error);
        });
}

button.addEventListener('click', sendData);
