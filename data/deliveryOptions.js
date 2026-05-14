import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOption[0];
}

export function isWeekend(date) {
    const today = date.format('dddd');
    return today === 'Saturday' || today === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption) {
    let remainingDays = deliveryOption.deliveryDays;
    const today = dayjs();
    let temp = 1;
    let next_day;

    while (remainingDays > 0) {
        next_day = today.add(temp, 'day');

        if (!isWeekend(next_day)) remainingDays--;
        temp += 1;
    }
    return next_day.format('dddd, MMMM D');
}