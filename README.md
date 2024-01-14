# order
# Достаточно вставить свой API и все будет работать
function fetchData() {
    fetch('')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

# Адаптивность есть
