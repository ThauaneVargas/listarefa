function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      var li = document.createElement("li");
      var taskText = document.createTextNode(taskInput.value);
      li.appendChild(taskText);
  
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Apagar";
      deleteButton.onclick = function() {
        li.remove();
      };
      li.appendChild(deleteButton);
  
      var completeButton = document.createElement("button");
      completeButton.innerHTML = "Concluir";
      completeButton.onclick = function() {
        li.classList.toggle("completed");
      };
      li.appendChild(completeButton);
  
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  function toggleDarkMode() {
    var body = document.body;
    var modeEmoji = document.getElementById("modeEmoji");
  
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  
    if (body.classList.contains("dark-mode")) {
      modeEmoji.innerHTML = "🌙";
    } else {
      modeEmoji.innerHTML = "☀️";
    }
  }

  