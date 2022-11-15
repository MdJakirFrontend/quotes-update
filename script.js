jQuery(document).ready(function ($) {

    window.onload = function () {
        $(".bts-popup").delay(1500).addClass('is-visible');
    }

    $('.bts-popup-close').on('click', function () {
        $('.bts-popup').removeClass('is-visible');
    })

    // open popup
    $('.bts-popup-trigger').on('click', function (event) {
        event.preventDefault();
        $('.bts-popup').addClass('is-visible');
    });

    // open popup
    $('.btn').on('click', function () {
        $('.bts-popup-content').fadeOut();
        $('.thankYou').addClass('showThankYou');
    })


    //close popup when clicking the esc keyboard button

    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.bts-popup').removeClass('is-visible');
        }
    });

    // const button = document.getElementById('button');
    // const toasts = document.getElementById('toasts');
    // const messages = [
    //     'The best quotes sent straight to your phone',
    // ];
    // const types = ['success'];
    // button.addEventListener('click', () => createNotification());
    // function createNotification(message = null, type = null) {
    //     const notif = document.createElement('div');
    //     notif.classList.add('toast');
    //     notif.classList.add(type ? type : getRandomType());
    //     notif.innerText = message ? message : getRandomMessage();
    //     toasts.appendChild(notif);
    //     setTimeout(() => {
    //         notif.remove();
    //     }, 3000);
    // }
    // function getRandomMessage() {
    //     return messages[Math.floor(Math.random() * messages.length)];
    // }
    // function getRandomType() {
    //     return types[Math.floor(Math.random() * types.length)];
    // }

    //close popup
    // $('.bts-popup').on('click', function (event) {
    //     if ($(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup')) {
    //         event.preventDefault();
    //         $(this).removeClass('is-visible');
    //     }
    // });


});