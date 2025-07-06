const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value ;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";      // to close x .
        li.appendChild(span);
    }
    inputBox.value = ""; // to remove the text in input .
    saveData();   // 👈 نحفظ المهمة بعد الإضافة
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){      //  لأن tagName بيرجع اسم التاج بالحروف الكبيرة (Uppercase) تلقائيًا.
        e.target.classList.toggle("checked");
        saveData();    // 👈 نحفظ التعديل
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();    // 👈 نحفظ بعد الحذف
    }
}, false)

function saveData(){
    //  localStorage يعني كأنك عملت "حفظ تلقائي" للمهام في متصفح المستخدم حتى بعد ما يقفل الصفحة.
    localStorage.setItem("data", listContainer.innerHTML); //وتحفظه في المتصفح داخل localStorage تحت مفتاح اسمه "data".
}
//لكي يتم حفظ بيانات الصفحة عند الدخول كل مره
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");  //تجيب القيمة اللي متخزنة في localStorage باسم "data".وترجع تحطها جوه listContainer، علشان تعرض المهام اللي كانت متخزنة.
}
showTask();     // 👈 تحميل المهام المحفوظة عند تشغيل الصفحة