function calculeTip(event) {
    event.preventDefault();
    let bill = document.getElementById('coin').value;
    let serviceQual = document.getElementById('percentage').value;
    let peaples = document.getElementById('peaple').value;

    if(bill == '' | serviceQual == 0){
        alert('Porfavor digite um valor!')
        return;
    }

    if(peaples == "" | peaples <= 1){
        peaples = 1;
        document.getElementById('each').style.display = "none";
    }else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * serviceQual) / peaples;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTips').style.display = "block";
}

document.getElementById('totalTips').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculeTip)
