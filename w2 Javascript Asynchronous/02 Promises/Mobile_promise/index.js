var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
var showOff = function (phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise
var askMom = function () {
	//console.log('before asking Mom');
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);

        })
        .catch(function (error) {

            console.log(error.message);

        });
    //    console.log('after asking mom');
};

    askMom();
