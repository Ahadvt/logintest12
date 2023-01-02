const ui = new UI();


ui.submit_btn.addEventListener("click",(e)=>{
    const a=ui.UserName.value;
    const b=ui.Password.value;
    
    var params2=`UserName=${a}&Password=${b}&IPs=`
    e.preventDefault()
    const FD = new FormData();
    FD.append("func", "Login");
    FD.append("params", params2);
    
    fetch("http://isapi.mekashron.com/soapclient/soapclient.php?URL=http://isapi.icu-tech.com/icutech-test.dll%2Fwsdl%2FIICUTech", {
        method: 'POST',
        body: FD,
    }).then(result => result.json(),).then(
        
         (result) => {
            var a=JSON.parse(result.ret)
           if(a.ResultCode==-1){
            ui.validatearea.innerHTML=`<div class="alert alert-danger" role="alert">
            ${a.ResultMessage}
          </div>`
           }else{
            console.log(a);
            ui.validatearea.innerHTML=`<div class="alert alert-success" role="alert">
            ${`Id:${a.EntityId} FirstName:${a.FirstName} LastName:${a.LastName} Company:${a.Company} Adress:${a.Address}
            Email:${a.Email}  Mobile:${a.Mobile}
            
            `}
          </div>`
           }
        }
    )
})
