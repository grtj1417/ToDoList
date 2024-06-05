import { makeSVG, svgData } from "./makeSvg.js";

function create_task_html_object(task, index) {
    console.log("有按到");
    const obj = document.createElement("div");
    obj.classList.add("task-li");
    const uniqueId =  index.toString();  // 確保ID唯一
    console.log(uniqueId);
    // obj.setAttribute("id", uniqueId);

    const checkContainer = document.createElement("span");
    checkContainer.classList.add("check-container");
    //圓框
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", uniqueId);  // 使用唯一ID
    input.setAttribute("id", uniqueId); 
    const label = document.createElement("label");
    label.setAttribute("for", uniqueId);  // 使用唯一ID
    label.classList.add("button");
    //勾勾
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("checkmark");
        
    const svgobj = makeSVG(svgData);
    svgobj.setAttribute("class", "checkmark");
    checkContainer.append(input, label, svgobj);

    const taskName = document.createElement("span");
    taskName.classList.add("task-name");
    taskName.textContent = task.title;
    const taskDate = document.createElement("span");
    taskDate.classList.add("task-date");
    taskDate.textContent = task.date;
    const taskPrio = document.createElement("span");
    taskPrio.classList.add("task-prio");
    const taskPrioImg = document.createElement("img");
    if (task.taskPriority == 2) {
        taskPrioImg.src = "./images/high.png";
    } else if (task.taskPriority == 1) {
        taskPrioImg.src = "./images/medium.png";
    } else if (task.taskPriority == 0) {
        taskPrioImg.src = "./images/low.png";
    }
    taskPrio.append(taskPrioImg);

    const editIcon = document.createElement("span");
    editIcon.classList.add("edit-icon");
    const editIconImg = document.createElement("img");
    editIconImg.src = "./images/edit.svg";
    editIcon.append(editIconImg);

    const delIcon = document.createElement("span");
    delIcon.classList.add("del-icon");
    const delIconImg = document.createElement("img");
    delIconImg.src = "./images/delete.svg";
    delIcon.append(delIconImg);

    const line = document.createElement("div");
    line.classList.add("line");

    obj.append(checkContainer, taskName, taskDate, taskPrio, editIcon, delIcon, line)
    return obj;
    //return 完 obj 後記得找 "task-ul" append obj
}

export {create_task_html_object};