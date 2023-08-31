const fname=document.getElementById("fname");
const mname=document.getElementById("mname");
const lname=document.getElementById("lname");
const eml=document.getElementById("email");
const pass=document.getElementById("pass");
const rpass=document.getElementById("rpass");
const dob=document.getElementById("dob");
const glink=document.getElementById("glink");
const llink=document.getElementById("llink");
const sbmit=document.getElementById("sbmit");
const ferr=document.getElementById("ferr");
const merr=document.getElementById("merr");
const lerr=document.getElementById("lerr");
const perr=document.getElementById("perr");
const rperr=document.getElementById("rperr");
const doberr=document.getElementById("doberr");
const giterr=document.getElementById("giterr");
const linkerr=document.getElementById("linkerr");
// const sbmit=document.getElementById("")
const eerr=document.getElementById("eerr");
const frm=document.getElementById("form");



fname.addEventListener("blur",()=>{
    // console.log("fname", fname.value)
    if((fname.value.split("").filter((e)=>e.match(/[0-9]/))).length!==0){
        ferr.style.display="block";
        ferr.innerText="Name should contain character only";
        fname.style.border="1px solid red";
    }else if(fname.value.length==0){
        ferr.style.display="block";
        ferr.innerText="Name can not be empty";
        fname.style.border="1px solid red";
    }else{
        ferr.style.display="none";
        fname.style.border="1px solid black";
    }
});
mname.addEventListener("blur",()=>{
    if(mname.value.length!==0 && (mname.value.split("").filter((e)=>e.match(/[0-9]/))).length!==0){
        merr.style.display="block";
        merr.innerText="Name should contain character only";
        mname.style.border="1px solid red";
    }else{
        merr.style.display="none";
        mname.style.border="1px solid black";
    }
});
lname.addEventListener("blur",()=>{
    if((lname.value.split("").filter((e)=>e.match(/[0-9]/))).length!==0){
        lerr.style.display="block";
        lerr.innerText="Name should contain character only";
        lname.style.border="1px solid red";
    }else if(lname.value.length==0){
        lerr.style.display="block";
        lerr.innerText="Box can not be empty ";
        lname.style.border="1px solid red";
    }else if(lname.length==0){
        lerr.style.display="block";
        lerr.innerText="Name can not be empty";
        lname.style.border="1px solid red";
    }else{
        lerr.style.display="none";
        lname.style.border="1px solid black";
    }

});

eml.addEventListener("blur", ()=>{
    if(eml.value.length==0){
        eerr.style.display="block";
        eerr.innerText="field can not be empty";
        eml.style.border="1px solid red";
    }else if((eml.value.split("").filter((e)=>e=='@')).length==0){
        eerr.style.display="block";
        eerr.innerText="should contain @";
        eml.style.border="1px solid red";
    }
    else{
        eerr.style.display="none";
        eml.style.border="1px solid black";
    }
})

pass.addEventListener("blur",()=>{
    // console.log("pass val",pass.value.split("").filter((e)=>e.match(/[\\[\]{}@#().*+?|^$]/g)))
    if(pass.value.length<8){
        perr.style.display="block";
        perr.innerText="Enter minimum 8 characters";
        pass.style.border="1px solid red";
    }else if((pass.value.split("").filter((e)=>e.match(/[\\[\]{}()@#.*+?|^$]/g))).length==0){
        perr.style.display="block";
        perr.innerText="Password must contain at least 1 special charcater";
        pass.style.border="1px solid red";
    }else if((pass.value.split("").filter((e)=>e.match(/[0-9]/))).length==0){
        perr.style.display="block";
        perr.innerText="password must conatain at last one number";
        pass.style.border="1px solid red";
    }else{
        perr.style.display="none";
        pass.style.border="1px solid black";
    }
    });
rpass.addEventListener("blur",(e)=>{
    if(!pass.value===rpass.value){
        rperr.style.display="block";
        rperr.innerText="password not matched";
        rpass.style.border="1px solid red";
    }else{
        rperr.style.display="none";
        rpass.style.border="1px solid black";
    }
});

dob.addEventListener("blur",()=>{
    if(new Date(dob.value).valueOf()>new Date().valueOf()){
        doberr.style.display="block";
        doberr.innerText="DOB cannot be greater than today's date";
        dob.style.border="1px solid red";
    }else if(dob.value.length==0){
        doberr.style.display="block";
        doberr.innerText="DOB cannot be empty";
        dob.style.border="1px solid red";
    }else{
        doberr.style.display="none";
        dob.style.border="1px solid black";
    } 
});

glink.addEventListener("blur", ()=>{
    if(glink.value.indexOf("https://github.com/")){
        giterr.style.display="block";
        giterr.innerText="enter valid gituser link";
        glink.style.border="1px solid red";
    }else if(glink.value.length==0){
        giterr.style.display="block";
        giterr.innerText="field can not be empty";
        glink.style.border="1px solid red";
    }else{
        giterr.style.display="none";
        glink.style.border="1px solid black";
    }
})

llink.addEventListener("blur", ()=>{
    if(llink.value.indexOf("https://www.linkedin.com/in/")){
        linkerr.style.display="block";
        linkerr.innerText="enter valid linkdin profile link";
        llink.style.border="1px solid red"
    }else{
        linkerr.style.display="none";
        llink.style.border="1px solid black";
    }
});

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(fname.value.length==0){
        ferr.style.display="block";
        ferr.innerText="Name can not be empty";
        fname.style.border="1px solid red"
    }
    if(lname.value.length==0){
        lerr.style.display="block";
        lerr.innerText="Name can not be empty";
        lname.style.border="1px solid red"
    }
    if(eml.value.length==0){
        eerr.style.display="block";
        eerr.innerText="field can not be empty";
        eml.style.border="1px solid red";
    }
    if(pass.value.length==0){
        perr.style.display="block";
        perr.innerText="Enter minimum 8 characters";
        pass.style.border="1px solid red"
    }
    if(rpass.value.length==0){
        rperr.style.display="block";
        rperr.innerText="password not matched";
        rpass.style.border="1px solid red"
    }
    if(dob.value.length==0){
        doberr.style.display-"block";
        doberr.innerText="DOB cannot be empty";
        dob.style.border="1px solid red"
    }
    if(glink.value.length==0){
        giterr.style.display="block";
        giterr.innerText="field can not be empty";
        glink.style.border="1px solid red"
    }
    if(llink.value.length==0){
        linkerr.style.display="block";
        linkerr.innerText="field can not be empty";
        llink.style.border="1px solid red";
    }

})






