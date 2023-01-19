var emailArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        // var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");
        // var endTab = document.getElementById("et");

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            // forgetBox.style.visibility="hidden";

            regTab.style.backgroundColor="#ffffff";
            loginTab.style.backgroundColor="transparent";
            // endTab.style.backgroundColor="transparent";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            // forgetBox.style.visibility="hidden";

            loginTab.style.backgroundColor="#ffffff";
            regTab.style.backgroundColor="transparent";
            // endTab.style.backgroundColor="transparent";
        }
        
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            // forgetBox.style.visibility="hidden";

            regTab.style.backgroundColor="transparent";
            loginTab.style.backgroundColor="transparent";
            // endTab.style.backgroundColor="transparent";

        }


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(email + " is already register.");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(email + " yor are login Now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
        // function forgot(){
        //     event.preventDefault();

        //     var email = document.getElementById("fe").value;

        //     if(emailArray.indexOf(email) == -1){
        //         if (email == ""){
        //             alert("Email required.");
        //             return ;
        //         }
        //         alert("Email does not exist.");
        //         return ;
        //     }

        //     alert("email is send to your email check it in 24hr. \n Thanks");
        //     document.getElementById("fe").value ="";
        // }