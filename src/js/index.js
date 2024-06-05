import { Project, Task, TaskPriority } from "./drawerObject.js";
import { create_task_html_object } from "./utils.js";

class TodoList {
    constructor() {
        this.customProjects = [];
        this.defaultProject = [];
        this.currentDisplay = [];
        // this.pageColor = "dark";
    }
    update_center_task_list(project) {
        console.log(project.__privateList);
    }
    update_sidebar_proj(defaultProject) {
        const sidebarProjDisplay = document.querySelector("#sidebar-project-display");
        sidebarProjDisplay.innerHTML = "";
        defaultProject.forEach(item => {
            const sidebarLi = document.createElement("li");

            // 切換中間的todo
            sidebarLi.addEventListener("click", () => {
                // 寫在這邊    
                // create_task_html_object(item, item.get_index_by_task(task));
                

                this.update_center_task_list(item);
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

    control_dropdown() {

        //dialog dropdown control
        document.addEventListener('DOMContentLoaded', () => {
            const addTaskBtn = document.querySelector(".add-task");
            const dialog = document.querySelector(".add-task-dialog");
            const taskNameInput = document.querySelector(".task-name-input");
            const dateInput = document.querySelector(".date-input");

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
            const createBtn = document.querySelector(".create-task-btn");

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

            createBtn.addEventListener("click", () => {

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

    configure_default_project() {
        let proj1 = new Project("Default Project 1");
        let t1 = new Task("title1", "date1", TaskPriority.HIGH);
        proj1.add_task_to_private_task_list(t1);
        let proj2 = new Project("Default Project 2");

        this.defaultProject = [proj1, proj2];
    }

    main() {
        // start building 
        this.configure_default_project();
        this.control_sidebar();
        this.control_dropdown();
        this.init_sidebar_func();

    }


}
const myTodoList = new TodoList();

myTodoList.main();
/* 開始監聽 */
// TodoList.main();

console.log(myTodoList.customProjects);

const tsk = new Task("123", "123", TaskPriority.LOW);


console.log(tsk);

var tskhtmlObj = create_task_html_object(tsk, 11);
const tskContent = document.querySelector(".task-ul");
tskContent.append(tskhtmlObj);
// tskhtmlObj = create_task_html_object(tsk, 22);

// tskContent.append(tskhtmlObj);