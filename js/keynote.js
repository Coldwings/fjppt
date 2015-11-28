if ("ontouchstart" in document.documentElement) {
    document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
}

document.getElementById("impress").addEventListener("impress:init", function(){ 
                var api = impress();

                api.addActionToStep("atmopolut", function(stepElement){
                    stepElement.querySelector(".law").classList.add("sstep");
                });

                api.addResetActionToStep("atmopolut", function(stepElement){ 
                    stepElement.querySelector(".law").classList.remove("sstep");
                });

                api.addActionToStep("enco_lead",function(stepElement){
                    stepElement.querySelector(".gpart").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".gbox").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".gi1").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".gi2").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".gi3").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".gi4").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".gi5").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".gi6").classList.add("sstep");
                });

                api.addActionToStep("enco_lead",function(stepElement){
                    stepElement.querySelector(".bpart").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".bbox").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".bi1").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".bi2").classList.add("sstep");
                });

                api.addActionToStep("enco_lead", function(stepElement){
                    stepElement.querySelector(".bi3").classList.add("sstep");
                });


                api.addResetActionToStep("enco_lead", function(stepElement) {
                    stepElement.querySelector(".gpart").classList.remove("sstep");
                    stepElement.querySelector(".gbox").classList.remove("sstep");
                    stepElement.querySelector(".gi1").classList.remove("sstep");
                    stepElement.querySelector(".gi2").classList.remove("sstep");
                    stepElement.querySelector(".gi3").classList.remove("sstep");
                    stepElement.querySelector(".gi4").classList.remove("sstep");
                    stepElement.querySelector(".gi5").classList.remove("sstep");
                    stepElement.querySelector(".gi6").classList.remove("sstep");
                    stepElement.querySelector(".bpart").classList.remove("sstep");
                    stepElement.querySelector(".bbox").classList.remove("sstep");
                    stepElement.querySelector(".bi1").classList.remove("sstep");
                    stepElement.querySelector(".bi2").classList.remove("sstep");
                    stepElement.querySelector(".bi3").classList.remove("sstep");
                });

                api.addActionToStep("twopoint", function(stepElement){ 
                    stepElement.querySelector(".larrow").classList.add("sstep");
                    stepElement.querySelector(".rarrow").classList.add("sstep");
                    stepElement.querySelector(".mid").classList.add("sstep"); 
                });

                api.addResetActionToStep("twopoint", function(stepElement){ 
                    stepElement.querySelector(".larrow").classList.remove("sstep");
                    stepElement.querySelector(".rarrow").classList.remove("sstep");
                    stepElement.querySelector(".mid").classList.remove("sstep");
                });

                api.addActionToStep("env_pol", function(stepElement){
                    stepElement.querySelector(".envli1").classList.add("sstep")
                });

                api.addActionToStep("env_pol", function(stepElement){
                    stepElement.querySelector(".envli2").classList.add("sstep")
                });

                api.addActionToStep("env_pol", function(stepElement){
                    stepElement.querySelector(".envli3").classList.add("sstep")
                });

                api.addActionToStep("env_pol", function(stepElement){
                    stepElement.querySelector(".envli4").classList.add("sstep")
                });

                api.addResetActionToStep("env_pol", function(stepElement){ 
                    stepElement.querySelector(".envli1").classList.remove("sstep");
                    stepElement.querySelector(".envli2").classList.remove("sstep");
                    stepElement.querySelector(".envli3").classList.remove("sstep");
                    stepElement.querySelector(".envli4").classList.remove("sstep");
                });

                api.addActionToStep("env_eff", function(stepElement){
                    stepElement.querySelector(".enve1").classList.add("sstep")
                });

                api.addActionToStep("env_eff", function(stepElement){
                    stepElement.querySelector(".enve2").classList.add("sstep")
                });

                api.addActionToStep("env_eff", function(stepElement){
                    stepElement.querySelector(".enve3").classList.add("sstep")
                });

                api.addResetActionToStep("env_eff", function(stepElement){
                    stepElement.querySelector(".enve1").classList.remove("sstep");
                    stepElement.querySelector(".enve2").classList.remove("sstep");
                    stepElement.querySelector(".enve3").classList.remove("sstep");
                });

                api.addActionToStep("explosion", function(stepElement) {
                    stepElement.querySelector(".func").classList.add("sstep");
                    stepElement.querySelector(".footnote").classList.add("sstep");
                });

                api.addResetActionToStep("explosion", function(stepElement) {
                    stepElement.querySelector(".func").classList.remove("sstep");
                    stepElement.querySelector(".footnote").classList.remove("sstep");
                });

                api.addActionToStep("nowa", function(stepElement) {
                    stepElement.querySelector(".parkimg").classList.add("sstep");
                })

                api.addResetActionToStep("nowa", function(stepElement) {
                    stepElement.querySelector(".parkimg").classList.remove("sstep");
                })
            });

            impress().init();