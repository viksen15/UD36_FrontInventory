function BuscaToken(email, pass) {
    $ajax({
        url: "https://localhost:44311/api/Token",
        method: 'POST',
        dataType: 'json',
        headers: { 'Accept': 'application/json', },
        contentType: 'application/json',
        data: JSON.stringify({
            'Email': email,
            'Password': pass
        }),

        succes: function (data) {
            localStorage.setItem('token', 'Bearer ' + data);
        },

        error: function (error) {
            if (error.responseText != "No se puede acceder") {
                localStorage.setItem('token', 'Bearer ' + error.responseText);
            }
        }
    });
}