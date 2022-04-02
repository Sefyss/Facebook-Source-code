$(document).ready(function(){
    $("#signup-form").validation({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:5
            },
            day:{
                required:true
            }   
        },

        //message is using for coder required meaasge are display the 
        //screen that is knw as message step is using in jquery
        messages:{
            fname:{
                required:'enter the first name',
                minlength:'enter atleast 4 charater'
            }
        }
       
    })
})