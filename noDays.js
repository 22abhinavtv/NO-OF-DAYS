function expt(){
    da_te = new Date()
    d_ate = da_te.getFullYear()
    brthYer = document.getElementById("inpt_fld").value
    
    if(parseInt(brthYer) < d_ate){
        flag = true
    }
    else{
        alert("ENTER YOUR CORRECT YEAR")
    }
}
function years(){
    if (flag){
    let age = d_ate - brthYer
    document.getElementById("years").innerHTML = age
        }
    }
function months(){
    if(flag){
        let months = (d_ate - brthYer) * 12
    document.getElementById("months").innerHTML = months
        }
    }
function days(){
    if(flag){
        let months = (d_ate - brthYer) * 365
        document.getElementById("days").innerHTML = months
        }
    }
function hours(){
    if(flag){
        let months = (d_ate - brthYer) * 365 * 12
    document.getElementById("hours").innerHTML = months
        }
    }