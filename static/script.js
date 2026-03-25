function getData() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = data.message;
        });
}
