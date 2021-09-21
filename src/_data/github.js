const axios = require('axios');

module.exports = async () => {
    axios
        .get('https://api.github.com/users/jensnti')
        .then(function (response) {
            const { data } = response;
            return data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
};
