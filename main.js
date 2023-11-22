function main(){
    Java.perform(function(){
        // Java.use("com.example.androiddemo.Activity.LoginActivity").a.overload('java.lang.String', 'java.lang.String').implementation = function(x, y){
        //     var result = this.a(x, y);
        //     console.log("x, y, result", x, y, result);
        //     return result;
        // }
        Java.use("com.example.androiddemo.Activity.FridaActivity1").a.implementation = function(x){
            return "R4jSLLLLLLLLLLOrLE7/5B+Z6fsl65yj6BgC6YWz66gO6g2t65Pk6a+P65NK44NNROl0wNOLLLL=";
        }

    })
}

function second(){
    Java.perform(function(){
        Java.use("com.example.androiddemo.Activity.FridaActivity2").setStatic_bool_var()

        Java.choose("com.example.androiddemo.Activity.FridaActivity2",{
            onMatch:function(instance){
                console.log("found instance: ", instance);
                instance.setBool_var();
            }, onComplete:function(){}
        })
    })
}

function third(){
    Java.perform(function(){
        Java.use("com.example.androiddemo.Activity.FridaActivity3").static_bool_var.value = true;
        Java.choose("com.example.androiddemo.Activity.FridaActivity3", {
            onMatch:function(instance){
                console.log("found instance: ", instance);
                instance.bool_var.value = true;
                instance._same_name_bool_var.value = true;
            }, onComplete:function(){}
        })
    })
}

function fourth(){
    Java.perform(function(){
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check1.implementation = function(){return true};
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check2.implementation = function(){return true};
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check3.implementation = function(){return true};
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check4.implementation = function(){return true};
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check5.implementation = function(){return true};
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check6.implementation = function(){return true};
    })
}

function fourth_1(){
    Java.perform(function(){
        var class_name = "com.example.androiddemo.Activity.FridaActivity4$InnerClasses";
        var InnerClass = Java.use(class_name);
        var all_methods = InnerClass.class.getDeclaredMethods();
        // console.log(all_methods);
        for(var i = 0; i < all_methods.length; i++){
            var method = all_methods[i];
            console.log(method.toString());
        }
    })
}

function fourth_2() {
    Java.perform(function () {
        var innerClass = Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses");

        // 获取内部类的所有方法
        var methods = innerClass.class.getDeclaredMethods();

        // 遍历方法数组
        for (var i = 0; i < methods.length; i++) {
            var methodName = methods[i].getName();

            var finalMethodString = methodName.toString();
            // // console.log(finalMethodString);
            innerClass[finalMethodString].implementation = function(){return true};
        }
    });
}

function fifth(){
    Java.perform(function(){       
        Java.use("com.example.androiddemo.Dynamic.DynamicCheck").check.implementation = function(){return true};        
    })
}




function sixth(){
    Java.perform(function(){
        var tmp = Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class0");
        console.log("***: ", tmp);
        Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class0").check.implementation = function(){return true};
        Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class1").check.implementation = function(){return true};
        Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class2").check.implementation = function(){return true};  
    })
}

function sixth_2(){
    Java.perform(function(){
        Java.enumerateLoadedClasses({
            onMatch:function(name, handle){
                if(name.toString().indexOf("com.example.androiddemo.Activity.Frida6") >= 0){
                    // console.log("name", name);
                    Java.use(name).check.implementation = function(){return true}
                }
            },onComplete(){}
        })
    })
}



setImmediate(fifth);
// setTimeout(fifth,6000);
