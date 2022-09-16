import data from './data.json' assert { type: "json" };

const list = document.querySelector('.chart');
const currentDay = new Date().getDay();

data.forEach((item, index) => {
    const stick = document.createElement('div');
    stick.classList.add('chart__col');

    stick.innerHTML = `<div class="chart__amount">$${item.amount}</div>
                        <div class="chart__value ${index === currentDay ? 'max' : ''}" style="height:${item.amount * 3}px"></div>
                        <figcaption>${item.day}</figcaption>`;
    list.appendChild(stick);
})

const chartAmounts = document.querySelectorAll('.chart__value');

if(chartAmounts.length > 0) {
    chartAmounts.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.previousSibling.previousSibling.classList.add('show');
        })

        el.addEventListener('mouseleave', () => {
            el.previousSibling.previousSibling.classList.remove('show');
        })
    })
}
