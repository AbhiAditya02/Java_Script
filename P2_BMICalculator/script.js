const form = document.querySelector('form')
// if we use this here then it will take the value when page will be load but it should take value when form is submited
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e){
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#result')

    if(isNaN(height) || height <= 0 || height === ''){
        result.innerHTML = "Please give a valid height"
    } else if(isNaN(weight) || weight <= 0 || weight === ''){
        result.innerHTML = "Please give a valid weight"
    } else {
        const BMI = ((weight * 10000) / Math.pow(height,2)).toFixed(2)
        let Message
        if(BMI < 18.5){
            Message = "Underweight"
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            Message = "Normal Weight"
        } else if (BMI >= 25 && BMI <= 29.9) {
            Message = "Overweight"
        } else {
            Message = "Obese"
        }
        result.innerHTML = `BIM : ${BMI} - ${Message}`
    }
})