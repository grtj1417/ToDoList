import { Project, Task, TaskPriority } from "./drawerObject.js";
import { makeSVG, svgData } from "./makeSvg.js";

import "../css/index.css";
import "../css/alert.css";
import "../css/checkbox.css";
import "../css/dropdown.css";
import "../css/sidebar.css";
import "../css/wave.css";
function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../images', false, /\.(png|jpe?g|gif|svg)$/));

class TodoList {
    constructor() {
        this.customProjects = [];
        this.defaultProject = [];
        this.currentDisplay = [];
        this.currentProject = null;
        // this.pageColor = "dark";
    }
    create_task_html_object(task, index) {

    
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
        //控制checkbox狀態
    
        if(task.isDone) {
            input.checked = true;
        }else {
            input.checked = false;
        }
        input.addEventListener("click", () => {
            task.isDone = !task.isDone;
        })
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
        if (task.taskPriority == 2 || task.taskPriority === "High") {
            taskPrioImg.src = "./images/high.png";
        } else if (task.taskPriority == 1 || task.taskPriority === "Medium") {
            taskPrioImg.src = "./images/medium.png";
        } else if (task.taskPriority == 0 || task.taskPriority === "Low") {
            taskPrioImg.src = "./images/low.png";
        }
        taskPrio.append(taskPrioImg);
    
        const editIcon = document.createElement("span");
        editIcon.classList.add("edit-icon");
        const editIconImg = document.createElement("img");
        editIconImg.src = "./images/edit.svg";
        editIcon.append(editIconImg);
        // TODO add event listener, modify that task
        // ---------------------------------------//
        editIcon.addEventListener("click", (event) => {
            
            this.configure_task_modify(task);
    
        });
    
        // ---------------------------------------//
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

    find_first_project_by_name(name) {
        for (var i = 0; i < this.defaultProject.length; i++) {
            if (name === this.defaultProject[i].projectName) {
                return i;
            }
        }
        return -1;
    }

    update_sidebar_proj(defaultProject) {
        const sidebarProjDisplay = document.querySelector("#sidebar-project-display");
        sidebarProjDisplay.innerHTML = "";
        defaultProject.forEach(item => {
            const sidebarLi = document.createElement("li");

            // 切換中間的todo
            sidebarLi.addEventListener("click", () => {
                this.refresh_task_list(item, "byProject");
                this.currentProject = item;
            });

            sidebarLi.textContent = item.projectName;
            sidebarProjDisplay.append(sidebarLi);
        });
    }

    show_task_by_specific_rule() {
        // case
        // case1 all project
        // foreach project
        // add to current display
        // all task
        this.customProjects.forEach(project => {
            project.__privateList.forEach(task => {
                this.currentDisplay.push(task);
            });
        });
    }

    print_current_display() {
        this.currentDisplay.forEach(element => {
            console.log(element);
        });
    }

    delect_from_current_display(tsk) {
        // foreach project
        // search for match
        // get index from each project
        // -1 pass
        // 有 index 的話
        // 刪掉
        this.customProjects.forEach(project => {
            console.log(project.get_index_by_task(tsk));
        });
    }

    insert_task() {

    }

    delete_task() {
    }

    create_project(projectName) {
        var project = new Project(projectName);
        return project;
    }

    delete_project(project_name) {

    }

    control_sidebar() {
        var container = document.querySelector(".container");
        var openBtn = document.querySelector(".sidebar-open-btn");
        var closeBtn = document.querySelector(".sidebar-close-btn");

        openBtn.addEventListener("click", () => {
            container.classList.remove("sidebar-hidden");
            openBtn.style.display = "none";
            closeBtn.style.display = "block";
            this.update_sidebar_proj(this.defaultProject);
        });

        closeBtn.addEventListener("click", () => {
            container.classList.add("sidebar-hidden");
            openBtn.style.display = "block";
            closeBtn.style.display = "none";
        });

    }

    control_dropdown(isTask = false) {

        //dialog dropdown control

        const addTaskBtn = document.querySelector(".add-task");
        const dialog = document.querySelector(".add-task-dialog");
        const taskNameInput = document.querySelector(".task-name-input");
        const dateInput = document.querySelector(".date-input");
        const createTaskBtn = document.querySelector(".create-task-btn");

        const dropdowns = [
            {
                button: document.getElementById('dropdown-btn-proj'),
                content: document.getElementById('dropdown-content-proj'),
                defaultText: 'Select one'
            },
            {
                button: document.getElementById('dropdown-btn-prio'),
                content: document.getElementById('dropdown-content-prio'),
                defaultText: 'Select one'
            }
        ];

        const defaultTaskName = '';
        const defaultDate = ''; // Set your default date here

        function selectOption(event, dropdown) {
            dropdown.button.textContent = event.target.textContent;
            dropdown.content.style.display = 'none';
        }

        function resetDropdown(dropdown) {
            dropdown.button.textContent = dropdown.defaultText;
            dropdown.content.style.display = 'none';
        }

        function resetTaskNameAndDate() {
            taskNameInput.value = defaultTaskName;
            dateInput.value = defaultDate;
        }


        dropdowns[0].button.addEventListener("click", (event) => {
            // 重整
            dropdowns[0].content.innerHTML = "";
            // 建立所有的 p
            this.defaultProject.forEach(item => {
                const content = document.createElement("p");
                content.textContent = item.projectName;
                content.addEventListener('click', (event) => {
                    selectOption(event, dropdowns[0]);
                    //刪除提示訊息
                    document.querySelector(".required0").classList.remove("diplay-required-text");
                });
                dropdowns[0].content.append(content);
            });
        })
        dropdowns[0].button.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdowns[0].content.style.display = dropdowns[0].content.style.display === 'none' ? 'block' : 'none';
        });

        dropdowns[0].content.addEventListener('mouseleave', () => {
            dropdowns[0].content.style.display = 'none';
        });


        dropdowns[1].button.addEventListener('click', (event) => {
            event.stopPropagation();
            selectOption(event, dropdowns[1]);
            dropdowns[1].content.style.display = dropdowns[1].content.style.display === 'none' ? 'block' : 'none';
        });

        dropdowns[1].content.addEventListener('mouseleave', () => {
            dropdowns[1].content.style.display = 'none';
        });

        dropdowns[1].content.addEventListener('click', (event) => {
            selectOption(event, dropdowns[1]);
            //刪除提示訊息
            document.querySelector(".required1").classList.remove("diplay-required-text");
        });
        createTaskBtn.addEventListener("click", () => {
            this.show_task_by_specific_rule();
            this.print_current_display();
        })

        // Close dropdowns when clicking outside
        document.addEventListener('click', (event) => {
            dropdowns.forEach(dropdown => {
                if (!dropdown.button.contains(event.target) && !dropdown.content.contains(event.target)) {
                    dropdown.content.style.display = 'none';
                }
            });
        });



        createTaskBtn.addEventListener("click", (event) => {
            var canSubmit = true;

            if (document.querySelector(".task-name-input").value === "")
                canSubmit = false;

            if (document.querySelector(".date-input").value === "") {
                canSubmit = false;
            }
            //顯示提示訊息
            if (dropdowns[0].button.textContent === "Select one") {
                document.querySelector(".required0").classList.add("diplay-required-text");
                canSubmit = false;
                event.preventDefault();
            }
            if (dropdowns[1].button.textContent === "Select one") {
                document.querySelector(".required1").classList.add("diplay-required-text");
                canSubmit = false;
                event.preventDefault();
            }
            //可提交
            if (canSubmit) {
                document.querySelector("form").submit();
                // TODO 讀取表單上面所有 value
                // TODO 建立 new task
                const taskName = document.querySelector(".task-name-input").value;
                const taskDate = document.querySelector(".date-input").value;
                const taskPriority = document.querySelector("#dropdown-btn-prio").textContent;

                var projName = document.querySelector("#dropdown-btn-proj").textContent;
                var task = new Task(taskName, taskDate, taskPriority)

                var projIdx = this.find_first_project_by_name(projName);
                // task 加入當前控制的 proj 中
                this.defaultProject[projIdx].__privateList.push(task);
                this.refresh_task_list(this.currentProject, "byProject");
            }

        });

        //強制不關閉dialog
        document.querySelector("form").addEventListener("submit", (event) => {
            event.preventDefault();
        })

        //dialog
        addTaskBtn.addEventListener('click', () => {
            dialog.showModal();
            dropdowns.forEach(resetDropdown);
            resetTaskNameAndDate();
        });

        dialog.addEventListener("click", (event) => {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                dialog.close();
            }
        });
    }

    configure_default_project() {
        let proj1 = new Project("Default Project 1");
        let t1 = new Task("title1", "1999-03-21", TaskPriority.HIGH, proj1);
        proj1.add_task_to_private_task_list(t1);
        let proj2 = new Project("Default Project 2");
        this.currentProject = proj1;
        this.defaultProject = [proj1, proj2];
    }
    configure_task_modify(task) {

        //dialog dropdown control
        
    
        const dialog = document.querySelector(".edit-task-dialog");
        const taskNameInput = document.querySelector(".task-name-input-edit");
        const dateInput = document.querySelector(".date-input-edit");
        const editTaskBtn = document.querySelector(".edit-task-btn");
        
        taskNameInput.value = task.title;
        dateInput.value = task.date;
    
        dialog.showModal();
    
        const dropdowns = [
            {
                button: document.getElementById('dropdown-btn-proj-edit'),
                content: document.getElementById('dropdown-content-proj-edit'),
                defaultText: 'Select one'
            },
            {
                button: document.getElementById('dropdown-btn-prio-edit'),
                content: document.getElementById('dropdown-content-prio-edit'),
                defaultText: 'Select one'
            }
        ];
        
        const defaultTaskName = '';
        const defaultDate = ''; // Set your default date here
    
        function selectOption(event, dropdown) {
            dropdown.button.textContent = event.target.textContent;
            dropdown.content.style.display = 'none';
        }
    
        function resetDropdown(dropdown) {
            dropdown.button.textContent = dropdown.defaultText;
            dropdown.content.style.display = 'none';
        }
    
        function resetTaskNameAndDate() {
            taskNameInput.value = defaultTaskName;
            dateInput.value = defaultDate;
        }
    
    
        dropdowns[0].button.addEventListener("click", (event) => {
            // 重整
            dropdowns[0].content.innerHTML = "";
            // 建立所有的 p
            this.defaultProject.forEach(item => {
                const content = document.createElement("p");
                content.textContent = item.projectName;
                content.addEventListener('click', (event) => {
                    selectOption(event, dropdowns[0]);
                    //刪除提示訊息
                    document.querySelector(".required0").classList.remove("diplay-required-text");
                });
                dropdowns[0].content.append(content);
            });
        })
        dropdowns[0].button.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdowns[0].content.style.display = dropdowns[0].content.style.display === 'none' ? 'block' : 'none';
        });
    
        dropdowns[0].content.addEventListener('mouseleave', () => {
            dropdowns[0].content.style.display = 'none';
        });
    
    
        dropdowns[1].button.addEventListener('click', (event) => {
            event.stopPropagation();
            selectOption(event, dropdowns[1]);
            dropdowns[1].content.style.display = dropdowns[1].content.style.display === 'none' ? 'block' : 'none';
        });
    
        dropdowns[1].content.addEventListener('mouseleave', () => {
            dropdowns[1].content.style.display = 'none';
        });
    
        dropdowns[1].content.addEventListener('click', (event) => {
            selectOption(event, dropdowns[1]);
            //刪除提示訊息
            document.querySelector(".required1").classList.remove("diplay-required-text");
        });
    
    
    
        // Close dropdowns when clicking outside
        document.addEventListener('click', (event) => {
            dropdowns.forEach(dropdown => {
                if (!dropdown.button.contains(event.target) && !dropdown.content.contains(event.target)) {
                    dropdown.content.style.display = 'none';
                }
            });
        });
    
    
        editTaskBtn.addEventListener("click", (event) => {
            var canSubmit = true;
    
            if (document.querySelector(".task-name-input-edit").value === "")
                canSubmit = false;
    
            if (document.querySelector(".date-input-edit").value === "") {
                canSubmit = false;
            }
            //顯示提示訊息
            if (dropdowns[0].button.textContent === "Select one") {
                document.querySelector(".required0").classList.add("diplay-required-text");
                canSubmit = false;
                event.preventDefault();
            }
            if (dropdowns[1].button.textContent === "Select one") {
                document.querySelector(".required1").classList.add("diplay-required-text");
                canSubmit = false;
                event.preventDefault();
            }
            //可提交
            if (canSubmit) {
                document.querySelector("form").submit();
                // TODO 讀取表單上面所有 value
                // TODO 建立 new task
                task.title = taskNameInput.value;
                task.date = dateInput.value;
                task.taskPriority = document.querySelector("#dropdown-btn-prio-edit").textContent;
                this.refresh_task_list();
            }
    
        });
    
        //強制不關閉dialog
        document.querySelector("form").addEventListener("submit", (event) => {
            event.preventDefault();
        })
    
        
        dialog.addEventListener("click", (event) => {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                dialog.close();
            }
        });
    }

    refresh_task_list(project, type) {
        const tskContent = document.querySelector(".task-ul");
        tskContent.innerHTML = "";

        if (type === "byProject") {
            // assert project != null
            this.currentDisplay = [];
            if (project == null) return;

            project.__privateList.forEach((elem) => {
                this.currentDisplay.push(elem);
            });

        } else if (type === "byTime") {
            this.currentDisplay = [];
            this.defaultProject.forEach(
                (proj) => {
                    proj.__privateList.forEach((task) => {
                        this.currentDisplay.push(task);
                    });
                });
            // 所有的 project 的 task 找出 date
        } else if (type === "empty") {
            this.currentDisplay = [];
        } else if (type === "stay") {
            // do nothing
        }

        this.currentDisplay.forEach((task, index) => {
            const newTskHtmlItem = this.create_task_html_object(task, index);
            console.log(newTskHtmlItem);
            tskContent.append(newTskHtmlItem);
        });
    }

    init_sidebar_func() {
        // 新增project
        const addProjBtn = document.querySelector(".add-project");
        const createProjBtn = document.querySelector(".create-proj-btn");
        const dialog = document.querySelector(".add-project-dialog");
        const projectNameInput = document.querySelector(".project-name-input");
        const projectDefaultName = "";

        function reset_project_name() {
            projectNameInput.value = projectDefaultName;
        }

        addProjBtn.addEventListener("click", () => {
            dialog.showModal();
            reset_project_name();
        });

        // 這樣寫有一個好處，你可以根據不同 projectlist 做更新
        createProjBtn.addEventListener("click", () => {
            const projName = document.querySelector(".project-name-input");
            var proj = this.create_project(projName.value);
            this.defaultProject.push(proj);
            // this.print_current_display();
            this.update_sidebar_proj(this.defaultProject);
            dialog.close();
        });

        dialog.addEventListener("click", (event) => {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                dialog.close();
            }
        });
    }

    main() {
        // start building 
        this.configure_default_project();
        this.control_sidebar();
        this.control_dropdown();
        this.init_sidebar_func();
        // 測試用
        const tsk = new Task("title2", "2001-05-01", TaskPriority.LOW, this.defaultProject[0]);
        const tsk1 = new Task("title3", "2024-06-07", TaskPriority.MEDIUM, this.defaultProject[1]);
        this.defaultProject[0].__privateList.push(tsk);
        this.defaultProject[1].__privateList.push(tsk1);
        this.refresh_task_list(this.defaultProject[0], "byProject");
    }


}
const myTodoList = new TodoList();

myTodoList.main();
/* 開始監聽 */
// TodoList.main();
let obj = myTodoList.find_first_project_by_name("Default Project 2");
console.log(obj);



// console.log(tsk);

// const tskContent = document.querySelector(".task-ul");
// tskContent.append(tskhtmlObj);
// tskhtmlObj = create_task_html_object(tsk, 22);

// tskContent.append(tskhtmlObj);