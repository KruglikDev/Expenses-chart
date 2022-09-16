import data from './data.json' assert { type: "json" };

const clonedArr = [...data];
const maxNum = clonedArr.sort((a,b) => a.amount - b.amount).reverse()[0].amount;

const list = document.querySelector('.chart');

data.forEach(item => {
    const max = item.amount === maxNum ? 'max' : '';
    const stick = document.createElement('div');
    stick.classList.add('chart__col');

    stick.innerHTML = `<div class="chart__amount">$${item.amount}</div>
                        <div class="chart__value ${max}" style="height:${item.amount * 3}px"></div>
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
