/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/alert.css":
/*!***************************!*\
  !*** ./src/css/alert.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/checkbox.css":
/*!******************************!*\
  !*** ./src/css/checkbox.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/dropdown.css":
/*!******************************!*\
  !*** ./src/css/dropdown.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/sidebar.css":
/*!*****************************!*\
  !*** ./src/css/sidebar.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/wave.css":
/*!**************************!*\
  !*** ./src/css/wave.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images sync \\.(png%7Cjpe?g%7Cgif%7Csvg)$":
/*!********************************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png%7Cjpe?g%7Cgif%7Csvg)$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./add-white.svg": "./src/images/add-white.svg",
	"./burger.svg": "./src/images/burger.svg",
	"./cross.svg": "./src/images/cross.svg",
	"./delete.svg": "./src/images/delete.svg",
	"./edit.svg": "./src/images/edit.svg",
	"./high.png": "./src/images/high.png",
	"./low.png": "./src/images/low.png",
	"./medium.png": "./src/images/medium.png",
	"./tick.svg": "./src/images/tick.svg",
	"./todolist.svg": "./src/images/todolist.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.(png%7Cjpe?g%7Cgif%7Csvg)$";

/***/ }),

/***/ "./src/js/drawerObject.js":
/*!********************************!*\
  !*** ./src/js/drawerObject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   TaskPriority: () => (/* binding */ TaskPriority)
/* harmony export */ });

const TaskPriority =  {
    HIGH : 2,
    MEDIUM : 1,
    LOW : 0,
};
class Task
{
    constructor (
        title,          // string
        date,           // YYYY/MM/DD (split)
        taskPriority,        // TaskPriority.HIGH, MEDIUM, LOW 
        parentProject
    ) {
        this.title = title;
        this.date = date;
        this.taskPriority = taskPriority;
        this.parentProject = parentProject;
        this.isDone = false;
    };
    toggle_isDone() {
        this.isDone = !this.isDone;
    }
    // 完成 set title,, despt... 
    set_title(title) {
        if (typeof title !== String) {
            throw new Error("title must be a string");
        }
        this.title = title;
    };

    set_date(date) {
        if (typeof title !== String) {
            throw new Error("title must be a string");
        }
        // TODO 檢查 yyyy mm dd
        this.date = date;
    }

    set_priority(taskPriority) {
        // 檢查是否為 taskPriority 型別
        this.taskPriority = taskPriority;
    }
}

class Project
{
    constructor (
        projectName,         // string
    ) {
        this.projectName = projectName;
        this.__privateList = [];
        this.__privateListLength = 0;
    }
    // 可能
    extract(projectName, taskID){
        
    }
    
    log_all_task_name_in_console(){
        this.__privateList.forEach(element => {
            console.log(element.title);
        });
    }

    get_task_by_index(index) {
        return this.__privateList[index];
    }
    get_index_by_task(task) {
        var indexOfTask = this.__privateList.indexOf(task);
        return indexOfTask;
    }
    // 新增
    /*
    * @task : Task class 
    */
    add_task_to_private_task_list(task) {
        this.__privateList[this.__privateListLength++] = task;
        return this.__privateListLength;
    }
    // 刪除
    /*
    * @taskID : tasktype 
    */
    delete_task_from_private_task_list(task) {
        var indexOfTask = this.__privateList.indexOf(task);
        if (indexOfTask > -1) {
            this.__privateList.splice(indexOfTask, 1);
        }
        this.__privateListLength--;
        
    }
}





/***/ }),

/***/ "./src/js/makeSvg.js":
/*!***************************!*\
  !*** ./src/js/makeSvg.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeSVG: () => (/* binding */ makeSVG),
/* harmony export */   svgData: () => (/* binding */ svgData)
/* harmony export */ });

var svgData = [{
    type: 'svg',
    data: {
      viewBox: "0 0 500 100"
    }
  },
  {
    type: 'polyline',
    data: {
      fill: "none",
      stroke: "#e9be3d",
      strokeWidth: "2",
      points: "1,5 6,9 14,1"
    }
  },
];
function getNode(n, v) {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    for (var p in v) {
      n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) {
        return "-" + m.toLowerCase();
      }), v[p]);
    }
    return n
  }
  
  function makeSVG(data) {
    var result;
    data.forEach(
      function(elem, index, array) {
        if (index)
          result.appendChild(getNode(elem.type, elem.data));
        else
          result = getNode(elem.type, elem.data);
      }
    );
    return result;
  }


/***/ }),

/***/ "./src/images/add-white.svg":
/*!**********************************!*\
  !*** ./src/images/add-white.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/add-white.svg";

/***/ }),

/***/ "./src/images/burger.svg":
/*!*******************************!*\
  !*** ./src/images/burger.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/burger.svg";

/***/ }),

/***/ "./src/images/cross.svg":
/*!******************************!*\
  !*** ./src/images/cross.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cross.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/delete.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/edit.svg";

/***/ }),

/***/ "./src/images/high.png":
/*!*****************************!*\
  !*** ./src/images/high.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/high.png";

/***/ }),

/***/ "./src/images/low.png":
/*!****************************!*\
  !*** ./src/images/low.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/low.png";

/***/ }),

/***/ "./src/images/medium.png":
/*!*******************************!*\
  !*** ./src/images/medium.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/medium.png";

/***/ }),

/***/ "./src/images/tick.svg":
/*!*****************************!*\
  !*** ./src/images/tick.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/tick.svg";

/***/ }),

/***/ "./src/images/todolist.svg":
/*!*********************************!*\
  !*** ./src/images/todolist.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/todolist.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawerObject.js */ "./src/js/drawerObject.js");
/* harmony import */ var _makeSvg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeSvg.js */ "./src/js/makeSvg.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_alert_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/alert.css */ "./src/css/alert.css");
/* harmony import */ var _css_checkbox_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/checkbox.css */ "./src/css/checkbox.css");
/* harmony import */ var _css_dropdown_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/dropdown.css */ "./src/css/dropdown.css");
/* harmony import */ var _css_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/sidebar.css */ "./src/css/sidebar.css");
/* harmony import */ var _css_wave_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/wave.css */ "./src/css/wave.css");









function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(__webpack_require__("./src/images sync \\.(png%7Cjpe?g%7Cgif%7Csvg)$"));

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
        const svgobj = (0,_makeSvg_js__WEBPACK_IMPORTED_MODULE_1__.makeSVG)(_makeSvg_js__WEBPACK_IMPORTED_MODULE_1__.svgData);
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
        var project = new _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
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
                var task = new _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.Task(taskName, taskDate, taskPriority)

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
        let proj1 = new _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.Project("Default Project 1");
        let t1 = new _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.Task("title1", "1999-03-21", _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.TaskPriority.HIGH, proj1);
        proj1.add_task_to_private_task_list(t1);
        let proj2 = new _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.Project("Default Project 2");
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
        const tsk = new _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.Task("title2", "2001-05-01", _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.TaskPriority.LOW, this.defaultProject[0]);
        const tsk1 = new _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.Task("title3", "2024-06-07", _drawerObject_js__WEBPACK_IMPORTED_MODULE_0__.TaskPriority.MEDIUM, this.defaultProject[1]);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQUkseUJBQXlCLDBEQUFZO0FBQ2pFLHlCQUF5QixrREFBSSx5QkFBeUIsMERBQVk7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdF8xMl90b2RvbGlzdC8uL3NyYy9jc3MvYWxlcnQuY3NzIiwid2VicGFjazovL3Byb2plY3RfMTJfdG9kb2xpc3QvLi9zcmMvY3NzL2NoZWNrYm94LmNzcz8xZWE1Iiwid2VicGFjazovL3Byb2plY3RfMTJfdG9kb2xpc3QvLi9zcmMvY3NzL2Ryb3Bkb3duLmNzcz8yYWZiIiwid2VicGFjazovL3Byb2plY3RfMTJfdG9kb2xpc3QvLi9zcmMvY3NzL2luZGV4LmNzcz80YzIyIiwid2VicGFjazovL3Byb2plY3RfMTJfdG9kb2xpc3QvLi9zcmMvY3NzL3NpZGViYXIuY3NzP2QxZTciLCJ3ZWJwYWNrOi8vcHJvamVjdF8xMl90b2RvbGlzdC8uL3NyYy9jc3Mvd2F2ZS5jc3M/NGZkNCIsIndlYnBhY2s6Ly9wcm9qZWN0XzEyX3RvZG9saXN0Ly4vc3JjL2ltYWdlcy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9wcm9qZWN0XzEyX3RvZG9saXN0Ly4vc3JjL2pzL2RyYXdlck9iamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0XzEyX3RvZG9saXN0Ly4vc3JjL2pzL21ha2VTdmcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF8xMl90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0XzEyX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0XzEyX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdF8xMl90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3RfMTJfdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0XzEyX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3RfMTJfdG9kb2xpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIG1hcCA9IHtcblx0XCIuL2FkZC13aGl0ZS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYWRkLXdoaXRlLnN2Z1wiLFxuXHRcIi4vYnVyZ2VyLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9idXJnZXIuc3ZnXCIsXG5cdFwiLi9jcm9zcy5zdmdcIjogXCIuL3NyYy9pbWFnZXMvY3Jvc3Muc3ZnXCIsXG5cdFwiLi9kZWxldGUuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2RlbGV0ZS5zdmdcIixcblx0XCIuL2VkaXQuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2VkaXQuc3ZnXCIsXG5cdFwiLi9oaWdoLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9oaWdoLnBuZ1wiLFxuXHRcIi4vbG93LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9sb3cucG5nXCIsXG5cdFwiLi9tZWRpdW0ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lZGl1bS5wbmdcIixcblx0XCIuL3RpY2suc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3RpY2suc3ZnXCIsXG5cdFwiLi90b2RvbGlzdC5zdmdcIjogXCIuL3NyYy9pbWFnZXMvdG9kb2xpc3Quc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDZ2lmJTdDc3ZnKSRcIjsiLCJcclxuY29uc3QgVGFza1ByaW9yaXR5ID0gIHtcclxuICAgIEhJR0ggOiAyLFxyXG4gICAgTUVESVVNIDogMSxcclxuICAgIExPVyA6IDAsXHJcbn07XHJcbmNsYXNzIFRhc2tcclxue1xyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIHRpdGxlLCAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICBkYXRlLCAgICAgICAgICAgLy8gWVlZWS9NTS9ERCAoc3BsaXQpXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LCAgICAgICAgLy8gVGFza1ByaW9yaXR5LkhJR0gsIE1FRElVTSwgTE9XIFxyXG4gICAgICAgIHBhcmVudFByb2plY3RcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMudGFza1ByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMucGFyZW50UHJvamVjdCA9IHBhcmVudFByb2plY3Q7XHJcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICB0b2dnbGVfaXNEb25lKCkge1xyXG4gICAgICAgIHRoaXMuaXNEb25lID0gIXRoaXMuaXNEb25lO1xyXG4gICAgfVxyXG4gICAgLy8g5a6M5oiQIHNldCB0aXRsZSwsIGRlc3B0Li4uIFxyXG4gICAgc2V0X3RpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRpdGxlIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0X2RhdGUoZGF0ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgIT09IFN0cmluZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0aXRsZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPIOaqouafpSB5eXl5IG1tIGRkXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRfcHJpb3JpdHkodGFza1ByaW9yaXR5KSB7XHJcbiAgICAgICAgLy8g5qqi5p+l5piv5ZCm54K6IHRhc2tQcmlvcml0eSDlnovliKVcclxuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgcHJvamVjdE5hbWUsICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgdGhpcy5fX3ByaXZhdGVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5fX3ByaXZhdGVMaXN0TGVuZ3RoID0gMDtcclxuICAgIH1cclxuICAgIC8vIOWPr+iDvVxyXG4gICAgZXh0cmFjdChwcm9qZWN0TmFtZSwgdGFza0lEKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9nX2FsbF90YXNrX25hbWVfaW5fY29uc29sZSgpe1xyXG4gICAgICAgIHRoaXMuX19wcml2YXRlTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LnRpdGxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRfdGFza19ieV9pbmRleChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fcHJpdmF0ZUxpc3RbaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgZ2V0X2luZGV4X2J5X3Rhc2sodGFzaykge1xyXG4gICAgICAgIHZhciBpbmRleE9mVGFzayA9IHRoaXMuX19wcml2YXRlTGlzdC5pbmRleE9mKHRhc2spO1xyXG4gICAgICAgIHJldHVybiBpbmRleE9mVGFzaztcclxuICAgIH1cclxuICAgIC8vIOaWsOWinlxyXG4gICAgLypcclxuICAgICogQHRhc2sgOiBUYXNrIGNsYXNzIFxyXG4gICAgKi9cclxuICAgIGFkZF90YXNrX3RvX3ByaXZhdGVfdGFza19saXN0KHRhc2spIHtcclxuICAgICAgICB0aGlzLl9fcHJpdmF0ZUxpc3RbdGhpcy5fX3ByaXZhdGVMaXN0TGVuZ3RoKytdID0gdGFzaztcclxuICAgICAgICByZXR1cm4gdGhpcy5fX3ByaXZhdGVMaXN0TGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLy8g5Yiq6ZmkXHJcbiAgICAvKlxyXG4gICAgKiBAdGFza0lEIDogdGFza3R5cGUgXHJcbiAgICAqL1xyXG4gICAgZGVsZXRlX3Rhc2tfZnJvbV9wcml2YXRlX3Rhc2tfbGlzdCh0YXNrKSB7XHJcbiAgICAgICAgdmFyIGluZGV4T2ZUYXNrID0gdGhpcy5fX3ByaXZhdGVMaXN0LmluZGV4T2YodGFzayk7XHJcbiAgICAgICAgaWYgKGluZGV4T2ZUYXNrID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fX3ByaXZhdGVMaXN0LnNwbGljZShpbmRleE9mVGFzaywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX19wcml2YXRlTGlzdExlbmd0aC0tO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IFByb2plY3QsIFRhc2ssIFRhc2tQcmlvcml0eSB9OyIsIlxyXG52YXIgc3ZnRGF0YSA9IFt7XHJcbiAgICB0eXBlOiAnc3ZnJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdmlld0JveDogXCIwIDAgNTAwIDEwMFwiXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiAncG9seWxpbmUnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgc3Ryb2tlOiBcIiNlOWJlM2RcIixcclxuICAgICAgc3Ryb2tlV2lkdGg6IFwiMlwiLFxyXG4gICAgICBwb2ludHM6IFwiMSw1IDYsOSAxNCwxXCJcclxuICAgIH1cclxuICB9LFxyXG5dO1xyXG5mdW5jdGlvbiBnZXROb2RlKG4sIHYpIHtcclxuICAgIG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBuKTtcclxuICAgIGZvciAodmFyIHAgaW4gdikge1xyXG4gICAgICBuLnNldEF0dHJpYnV0ZU5TKG51bGwsIHAucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24obSwgcCwgbywgcykge1xyXG4gICAgICAgIHJldHVybiBcIi1cIiArIG0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgfSksIHZbcF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5cclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gbWFrZVNWRyhkYXRhKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgZGF0YS5mb3JFYWNoKFxyXG4gICAgICBmdW5jdGlvbihlbGVtLCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICBpZiAoaW5kZXgpXHJcbiAgICAgICAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZ2V0Tm9kZShlbGVtLnR5cGUsIGVsZW0uZGF0YSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHJlc3VsdCA9IGdldE5vZGUoZWxlbS50eXBlLCBlbGVtLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbmV4cG9ydCB7bWFrZVNWRywgc3ZnRGF0YX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgUHJvamVjdCwgVGFzaywgVGFza1ByaW9yaXR5IH0gZnJvbSBcIi4vZHJhd2VyT2JqZWN0LmpzXCI7XHJcbmltcG9ydCB7IG1ha2VTVkcsIHN2Z0RhdGEgfSBmcm9tIFwiLi9tYWtlU3ZnLmpzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9hbGVydC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2NoZWNrYm94LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3MvZHJvcGRvd24uY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zaWRlYmFyLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvd2F2ZS5jc3NcIjtcclxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICAgIHJldHVybiByLmtleXMoKS5tYXAocik7XHJcbn1cclxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfGdpZnxzdmcpJC8pKTtcclxuXHJcbmNsYXNzIFRvZG9MaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tUHJvamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRQcm9qZWN0ID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMucGFnZUNvbG9yID0gXCJkYXJrXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVfdGFza19odG1sX29iamVjdCh0YXNrLCBpbmRleCkge1xyXG5cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb2JqLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpXCIpO1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gIGluZGV4LnRvU3RyaW5nKCk7ICAvLyDnorrkv51JROWUr+S4gFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVuaXF1ZUlkKTtcclxuICAgICAgICAvLyBvYmouc2V0QXR0cmlidXRlKFwiaWRcIiwgdW5pcXVlSWQpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjaGVja0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2stY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8v5ZyT5qGGXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgdW5pcXVlSWQpOyAgLy8g5L2/55So5ZSv5LiASURcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB1bmlxdWVJZCk7IFxyXG4gICAgICAgIC8v5o6n5Yi2Y2hlY2tib3jni4DmhYtcclxuICAgIFxyXG4gICAgICAgIGlmKHRhc2suaXNEb25lKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0YXNrLmlzRG9uZSA9ICF0YXNrLmlzRG9uZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB1bmlxdWVJZCk7ICAvLyDkvb/nlKjllK/kuIBJRFxyXG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XHJcbiAgICAgICAgLy/li77li75cclxuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuICAgICAgICBzdmcuY2xhc3NMaXN0LmFkZChcImNoZWNrbWFya1wiKTtcclxuICAgICAgICBjb25zdCBzdmdvYmogPSBtYWtlU1ZHKHN2Z0RhdGEpO1xyXG4gICAgICAgIHN2Z29iai5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNoZWNrbWFya1wiKTtcclxuICAgICAgICBjaGVja0NvbnRhaW5lci5hcHBlbmQoaW5wdXQsIGxhYmVsLCBzdmdvYmopO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XHJcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcclxuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcclxuICAgICAgICBjb25zdCB0YXNrUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRhc2tQcmlvLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9cIik7XHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGlmICh0YXNrLnRhc2tQcmlvcml0eSA9PSAyIHx8IHRhc2sudGFza1ByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xyXG4gICAgICAgICAgICB0YXNrUHJpb0ltZy5zcmMgPSBcIi4vaW1hZ2VzL2hpZ2gucG5nXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnRhc2tQcmlvcml0eSA9PSAxIHx8IHRhc2sudGFza1ByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvSW1nLnNyYyA9IFwiLi9pbWFnZXMvbWVkaXVtLnBuZ1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFzay50YXNrUHJpb3JpdHkgPT0gMCB8fCB0YXNrLnRhc2tQcmlvcml0eSA9PT0gXCJMb3dcIikge1xyXG4gICAgICAgICAgICB0YXNrUHJpb0ltZy5zcmMgPSBcIi4vaW1hZ2VzL2xvdy5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFza1ByaW8uYXBwZW5kKHRhc2tQcmlvSW1nKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcclxuICAgICAgICBjb25zdCBlZGl0SWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgZWRpdEljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9lZGl0LnN2Z1wiO1xyXG4gICAgICAgIGVkaXRJY29uLmFwcGVuZChlZGl0SWNvbkltZyk7XHJcbiAgICAgICAgLy8gVE9ETyBhZGQgZXZlbnQgbGlzdGVuZXIsIG1vZGlmeSB0aGF0IHRhc2tcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlX3Rhc2tfbW9kaWZ5KHRhc2spO1xyXG4gICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGNvbnN0IGRlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBkZWxJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWwtaWNvblwiKTtcclxuICAgICAgICBjb25zdCBkZWxJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBkZWxJY29uSW1nLnNyYyA9IFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xyXG4gICAgICAgIGRlbEljb24uYXBwZW5kKGRlbEljb25JbWcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKFwibGluZVwiKTtcclxuICAgIFxyXG4gICAgICAgIG9iai5hcHBlbmQoY2hlY2tDb250YWluZXIsIHRhc2tOYW1lLCB0YXNrRGF0ZSwgdGFza1ByaW8sIGVkaXRJY29uLCBkZWxJY29uLCBsaW5lKVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgLy9yZXR1cm4g5a6MIG9iaiDlvozoqJjlvpfmib4gXCJ0YXNrLXVsXCIgYXBwZW5kIG9ialxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRfZmlyc3RfcHJvamVjdF9ieV9uYW1lKG5hbWUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGVmYXVsdFByb2plY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09IHRoaXMuZGVmYXVsdFByb2plY3RbaV0ucHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfc2lkZWJhcl9wcm9qKGRlZmF1bHRQcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhclByb2pEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLXByb2plY3QtZGlzcGxheVwiKTtcclxuICAgICAgICBzaWRlYmFyUHJvakRpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBkZWZhdWx0UHJvamVjdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgICAgICAgICAvLyDliIfmj5vkuK3plpPnmoR0b2RvXHJcbiAgICAgICAgICAgIHNpZGViYXJMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Rhc2tfbGlzdChpdGVtLCBcImJ5UHJvamVjdFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBpdGVtO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNpZGViYXJMaS50ZXh0Q29udGVudCA9IGl0ZW0ucHJvamVjdE5hbWU7XHJcbiAgICAgICAgICAgIHNpZGViYXJQcm9qRGlzcGxheS5hcHBlbmQoc2lkZWJhckxpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93X3Rhc2tfYnlfc3BlY2lmaWNfcnVsZSgpIHtcclxuICAgICAgICAvLyBjYXNlXHJcbiAgICAgICAgLy8gY2FzZTEgYWxsIHByb2plY3RcclxuICAgICAgICAvLyBmb3JlYWNoIHByb2plY3RcclxuICAgICAgICAvLyBhZGQgdG8gY3VycmVudCBkaXNwbGF5XHJcbiAgICAgICAgLy8gYWxsIHRhc2tcclxuICAgICAgICB0aGlzLmN1c3RvbVByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QuX19wcml2YXRlTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheS5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludF9jdXJyZW50X2Rpc3BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxlY3RfZnJvbV9jdXJyZW50X2Rpc3BsYXkodHNrKSB7XHJcbiAgICAgICAgLy8gZm9yZWFjaCBwcm9qZWN0XHJcbiAgICAgICAgLy8gc2VhcmNoIGZvciBtYXRjaFxyXG4gICAgICAgIC8vIGdldCBpbmRleCBmcm9tIGVhY2ggcHJvamVjdFxyXG4gICAgICAgIC8vIC0xIHBhc3NcclxuICAgICAgICAvLyDmnIkgaW5kZXgg55qE6KmxXHJcbiAgICAgICAgLy8g5Yiq5o6JXHJcbiAgICAgICAgdGhpcy5jdXN0b21Qcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldF9pbmRleF9ieV90YXNrKHRzaykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydF90YXNrKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVfdGFzaygpIHtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVfcHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHZhciBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZV9wcm9qZWN0KHByb2plY3RfbmFtZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb250cm9sX3NpZGViYXIoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHZhciBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLW9wZW4tYnRuXCIpO1xyXG4gICAgICAgIHZhciBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jbG9zZS1idG5cIik7XHJcblxyXG4gICAgICAgIG9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgb3BlbkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3NpZGViYXJfcHJvaih0aGlzLmRlZmF1bHRQcm9qZWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgb3BlbkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRyb2xfZHJvcGRvd24oaXNUYXNrID0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgLy9kaWFsb2cgZHJvcGRvd24gY29udHJvbFxyXG5cclxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWRpYWxvZ1wiKTtcclxuICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWUtaW5wdXRcIik7XHJcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWlucHV0XCIpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrLWJ0blwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bi1idG4tcHJvaicpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duLWNvbnRlbnQtcHJvaicpLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6ICdTZWxlY3Qgb25lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bi1idG4tcHJpbycpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duLWNvbnRlbnQtcHJpbycpLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6ICdTZWxlY3Qgb25lJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFRhc2tOYW1lID0gJyc7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdERhdGUgPSAnJzsgLy8gU2V0IHlvdXIgZGVmYXVsdCBkYXRlIGhlcmVcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0T3B0aW9uKGV2ZW50LCBkcm9wZG93bikge1xyXG4gICAgICAgICAgICBkcm9wZG93bi5idXR0b24udGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0RHJvcGRvd24oZHJvcGRvd24pIHtcclxuICAgICAgICAgICAgZHJvcGRvd24uYnV0dG9uLnRleHRDb250ZW50ID0gZHJvcGRvd24uZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0VGFza05hbWVBbmREYXRlKCkge1xyXG4gICAgICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gZGVmYXVsdFRhc2tOYW1lO1xyXG4gICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBkZWZhdWx0RGF0ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBkcm9wZG93bnNbMF0uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgLy8g6YeN5pW0XHJcbiAgICAgICAgICAgIGRyb3Bkb3duc1swXS5jb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8vIOW7uueri+aJgOacieeahCBwXHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByb2plY3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBpdGVtLnByb2plY3ROYW1lO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbihldmVudCwgZHJvcGRvd25zWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIqumZpOaPkOekuuioiuaBr1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWlyZWQwXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXBsYXktcmVxdWlyZWQtdGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25zWzBdLmNvbnRlbnQuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRyb3Bkb3duc1swXS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duc1swXS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBkcm9wZG93bnNbMF0uY29udGVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkcm9wZG93bnNbMF0uY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkcm9wZG93bnNbMF0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgZHJvcGRvd25zWzFdLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgc2VsZWN0T3B0aW9uKGV2ZW50LCBkcm9wZG93bnNbMV0pO1xyXG4gICAgICAgICAgICBkcm9wZG93bnNbMV0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gZHJvcGRvd25zWzFdLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25zWzFdLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25zWzFdLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25zWzFdLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0T3B0aW9uKGV2ZW50LCBkcm9wZG93bnNbMV0pO1xyXG4gICAgICAgICAgICAvL+WIqumZpOaPkOekuuioiuaBr1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlcXVpcmVkMVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlwbGF5LXJlcXVpcmVkLXRleHRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dfdGFza19ieV9zcGVjaWZpY19ydWxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpbnRfY3VycmVudF9kaXNwbGF5KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgZHJvcGRvd25zIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKGRyb3Bkb3duID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZHJvcGRvd24uYnV0dG9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duLmNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjYW5TdWJtaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lLWlucHV0XCIpLnZhbHVlID09PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgY2FuU3VibWl0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWlucHV0XCIpLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5TdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+mhr+ekuuaPkOekuuioiuaBr1xyXG4gICAgICAgICAgICBpZiAoZHJvcGRvd25zWzBdLmJ1dHRvbi50ZXh0Q29udGVudCA9PT0gXCJTZWxlY3Qgb25lXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWlyZWQwXCIpLmNsYXNzTGlzdC5hZGQoXCJkaXBsYXktcmVxdWlyZWQtdGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIGNhblN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZHJvcGRvd25zWzFdLmJ1dHRvbi50ZXh0Q29udGVudCA9PT0gXCJTZWxlY3Qgb25lXCIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWlyZWQxXCIpLmNsYXNzTGlzdC5hZGQoXCJkaXBsYXktcmVxdWlyZWQtdGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIGNhblN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WPr+aPkOS6pFxyXG4gICAgICAgICAgICBpZiAoY2FuU3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8g6K6A5Y+W6KGo5Zau5LiK6Z2i5omA5pyJIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIOW7uueriyBuZXcgdGFza1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZS1pbnB1dFwiKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bi1idG4tcHJpb1wiKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duLWJ0bi1wcm9qXCIpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBuZXcgVGFzayh0YXNrTmFtZSwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSlcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvaklkeCA9IHRoaXMuZmluZF9maXJzdF9wcm9qZWN0X2J5X25hbWUocHJvak5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGFzayDliqDlhaXnlbbliY3mjqfliLbnmoQgcHJvaiDkuK1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByb2plY3RbcHJvaklkeF0uX19wcml2YXRlTGlzdC5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Rhc2tfbGlzdCh0aGlzLmN1cnJlbnRQcm9qZWN0LCBcImJ5UHJvamVjdFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/lvLfliLbkuI3pl5zplolkaWFsb2dcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vZGlhbG9nXHJcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICBkcm9wZG93bnMuZm9yRWFjaChyZXNldERyb3Bkb3duKTtcclxuICAgICAgICAgICAgcmVzZXRUYXNrTmFtZUFuZERhdGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGRpYWxvZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgaXNJbkRpYWxvZyA9IChyZWN0LnRvcCA8PSBldmVudC5jbGllbnRZICYmIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjdC5sZWZ0IDw9IGV2ZW50LmNsaWVudFggJiYgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoKTtcclxuICAgICAgICAgICAgaWYgKCFpc0luRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZV9kZWZhdWx0X3Byb2plY3QoKSB7XHJcbiAgICAgICAgbGV0IHByb2oxID0gbmV3IFByb2plY3QoXCJEZWZhdWx0IFByb2plY3QgMVwiKTtcclxuICAgICAgICBsZXQgdDEgPSBuZXcgVGFzayhcInRpdGxlMVwiLCBcIjE5OTktMDMtMjFcIiwgVGFza1ByaW9yaXR5LkhJR0gsIHByb2oxKTtcclxuICAgICAgICBwcm9qMS5hZGRfdGFza190b19wcml2YXRlX3Rhc2tfbGlzdCh0MSk7XHJcbiAgICAgICAgbGV0IHByb2oyID0gbmV3IFByb2plY3QoXCJEZWZhdWx0IFByb2plY3QgMlwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvajE7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvamVjdCA9IFtwcm9qMSwgcHJvajJdO1xyXG4gICAgfVxyXG4gICAgY29uZmlndXJlX3Rhc2tfbW9kaWZ5KHRhc2spIHtcclxuXHJcbiAgICAgICAgLy9kaWFsb2cgZHJvcGRvd24gY29udHJvbFxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stZGlhbG9nXCIpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZS1pbnB1dC1lZGl0XCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dC1lZGl0XCIpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stYnRuXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2suZGF0ZTtcclxuICAgIFxyXG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24tYnRuLXByb2otZWRpdCcpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duLWNvbnRlbnQtcHJvai1lZGl0JyksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogJ1NlbGVjdCBvbmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duLWJ0bi1wcmlvLWVkaXQnKSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bi1jb250ZW50LXByaW8tZWRpdCcpLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6ICdTZWxlY3Qgb25lJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkZWZhdWx0VGFza05hbWUgPSAnJztcclxuICAgICAgICBjb25zdCBkZWZhdWx0RGF0ZSA9ICcnOyAvLyBTZXQgeW91ciBkZWZhdWx0IGRhdGUgaGVyZVxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0T3B0aW9uKGV2ZW50LCBkcm9wZG93bikge1xyXG4gICAgICAgICAgICBkcm9wZG93bi5idXR0b24udGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiByZXNldERyb3Bkb3duKGRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmJ1dHRvbi50ZXh0Q29udGVudCA9IGRyb3Bkb3duLmRlZmF1bHRUZXh0O1xyXG4gICAgICAgICAgICBkcm9wZG93bi5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzZXRUYXNrTmFtZUFuZERhdGUoKSB7XHJcbiAgICAgICAgICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSBkZWZhdWx0VGFza05hbWU7XHJcbiAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IGRlZmF1bHREYXRlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgZHJvcGRvd25zWzBdLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOmHjeaVtFxyXG4gICAgICAgICAgICBkcm9wZG93bnNbMF0uY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAvLyDlu7rnq4vmiYDmnInnmoQgcFxyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQcm9qZWN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gaXRlbS5wcm9qZWN0TmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb24oZXZlbnQsIGRyb3Bkb3duc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKrpmaTmj5DnpLroqIrmga9cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlcXVpcmVkMFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlwbGF5LXJlcXVpcmVkLXRleHRcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duc1swXS5jb250ZW50LmFwcGVuZChjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkcm9wZG93bnNbMF0uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBkcm9wZG93bnNbMF0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gZHJvcGRvd25zWzBdLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGRyb3Bkb3duc1swXS5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duc1swXS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGRyb3Bkb3duc1sxXS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbihldmVudCwgZHJvcGRvd25zWzFdKTtcclxuICAgICAgICAgICAgZHJvcGRvd25zWzFdLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IGRyb3Bkb3duc1sxXS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBkcm9wZG93bnNbMV0uY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkcm9wZG93bnNbMV0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgZHJvcGRvd25zWzFdLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0T3B0aW9uKGV2ZW50LCBkcm9wZG93bnNbMV0pO1xyXG4gICAgICAgICAgICAvL+WIqumZpOaPkOekuuioiuaBr1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlcXVpcmVkMVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlwbGF5LXJlcXVpcmVkLXRleHRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLy8gQ2xvc2UgZHJvcGRvd25zIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKGRyb3Bkb3duID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZHJvcGRvd24uYnV0dG9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duLmNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNhblN1Ym1pdCA9IHRydWU7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lLWlucHV0LWVkaXRcIikudmFsdWUgPT09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICBjYW5TdWJtaXQgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWlucHV0LWVkaXRcIikudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhblN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6aGv56S65o+Q56S66KiK5oGvXHJcbiAgICAgICAgICAgIGlmIChkcm9wZG93bnNbMF0uYnV0dG9uLnRleHRDb250ZW50ID09PSBcIlNlbGVjdCBvbmVcIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXF1aXJlZDBcIikuY2xhc3NMaXN0LmFkZChcImRpcGxheS1yZXF1aXJlZC10ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgY2FuU3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkcm9wZG93bnNbMV0uYnV0dG9uLnRleHRDb250ZW50ID09PSBcIlNlbGVjdCBvbmVcIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXF1aXJlZDFcIikuY2xhc3NMaXN0LmFkZChcImRpcGxheS1yZXF1aXJlZC10ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgY2FuU3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Y+v5o+Q5LqkXHJcbiAgICAgICAgICAgIGlmIChjYW5TdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyDoroDlj5booajllq7kuIrpnaLmiYDmnIkgdmFsdWVcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8g5bu656uLIG5ldyB0YXNrXHJcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlID0gdGFza05hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRhc2suZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRhc2sudGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bi1idG4tcHJpby1lZGl0XCIpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Rhc2tfbGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8v5by35Yi25LiN6Zec6ZaJZGlhbG9nXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGRpYWxvZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgaXNJbkRpYWxvZyA9IChyZWN0LnRvcCA8PSBldmVudC5jbGllbnRZICYmIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjdC5sZWZ0IDw9IGV2ZW50LmNsaWVudFggJiYgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoKTtcclxuICAgICAgICAgICAgaWYgKCFpc0luRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hfdGFza19saXN0KHByb2plY3QsIHR5cGUpIHtcclxuICAgICAgICBjb25zdCB0c2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXVsXCIpO1xyXG4gICAgICAgIHRza0NvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYnlQcm9qZWN0XCIpIHtcclxuICAgICAgICAgICAgLy8gYXNzZXJ0IHByb2plY3QgIT0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ID0gW107XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0ID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3QuX19wcml2YXRlTGlzdC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5LnB1c2goZWxlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiYnlUaW1lXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQcm9qZWN0LmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAocHJvaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ouX19wcml2YXRlTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXkucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDmiYDmnInnmoQgcHJvamVjdCDnmoQgdGFzayDmib7lh7ogZGF0ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXkgPSBbXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic3RheVwiKSB7XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudERpc3BsYXkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VHNrSHRtbEl0ZW0gPSB0aGlzLmNyZWF0ZV90YXNrX2h0bWxfb2JqZWN0KHRhc2ssIGluZGV4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VHNrSHRtbEl0ZW0pO1xyXG4gICAgICAgICAgICB0c2tDb250ZW50LmFwcGVuZChuZXdUc2tIdG1sSXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdF9zaWRlYmFyX2Z1bmMoKSB7XHJcbiAgICAgICAgLy8g5paw5aKecHJvamVjdFxyXG4gICAgICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcm9qLWJ0blwiKTtcclxuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWRpYWxvZ1wiKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWUtaW5wdXRcIik7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdERlZmF1bHROYW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzZXRfcHJvamVjdF9uYW1lKCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gcHJvamVjdERlZmF1bHROYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICAgIHJlc2V0X3Byb2plY3RfbmFtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDpgJnmqKPlr6vmnInkuIDlgIvlpb3omZXvvIzkvaDlj6/ku6XmoLnmk5rkuI3lkIwgcHJvamVjdGxpc3Qg5YGa5pu05pawXHJcbiAgICAgICAgY3JlYXRlUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lLWlucHV0XCIpO1xyXG4gICAgICAgICAgICB2YXIgcHJvaiA9IHRoaXMuY3JlYXRlX3Byb2plY3QocHJvak5hbWUudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQcm9qZWN0LnB1c2gocHJvaik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJpbnRfY3VycmVudF9kaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3NpZGViYXJfcHJvaih0aGlzLmRlZmF1bHRQcm9qZWN0KTtcclxuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkaWFsb2cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzSW5EaWFsb2cgPSAocmVjdC50b3AgPD0gZXZlbnQuY2xpZW50WSAmJiBldmVudC5jbGllbnRZIDw9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgJiZcclxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA8PSBldmVudC5jbGllbnRYICYmIGV2ZW50LmNsaWVudFggPD0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCk7XHJcbiAgICAgICAgICAgIGlmICghaXNJbkRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWluKCkge1xyXG4gICAgICAgIC8vIHN0YXJ0IGJ1aWxkaW5nIFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJlX2RlZmF1bHRfcHJvamVjdCgpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbF9zaWRlYmFyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sX2Ryb3Bkb3duKCk7XHJcbiAgICAgICAgdGhpcy5pbml0X3NpZGViYXJfZnVuYygpO1xyXG4gICAgICAgIC8vIOa4rOippueUqFxyXG4gICAgICAgIGNvbnN0IHRzayA9IG5ldyBUYXNrKFwidGl0bGUyXCIsIFwiMjAwMS0wNS0wMVwiLCBUYXNrUHJpb3JpdHkuTE9XLCB0aGlzLmRlZmF1bHRQcm9qZWN0WzBdKTtcclxuICAgICAgICBjb25zdCB0c2sxID0gbmV3IFRhc2soXCJ0aXRsZTNcIiwgXCIyMDI0LTA2LTA3XCIsIFRhc2tQcmlvcml0eS5NRURJVU0sIHRoaXMuZGVmYXVsdFByb2plY3RbMV0pO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByb2plY3RbMF0uX19wcml2YXRlTGlzdC5wdXNoKHRzayk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvamVjdFsxXS5fX3ByaXZhdGVMaXN0LnB1c2godHNrMSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rhc2tfbGlzdCh0aGlzLmRlZmF1bHRQcm9qZWN0WzBdLCBcImJ5UHJvamVjdFwiKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbmNvbnN0IG15VG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcclxuXHJcbm15VG9kb0xpc3QubWFpbigpO1xyXG4vKiDplovlp4vnm6Pogb0gKi9cclxuLy8gVG9kb0xpc3QubWFpbigpO1xyXG5sZXQgb2JqID0gbXlUb2RvTGlzdC5maW5kX2ZpcnN0X3Byb2plY3RfYnlfbmFtZShcIkRlZmF1bHQgUHJvamVjdCAyXCIpO1xyXG5jb25zb2xlLmxvZyhvYmopO1xyXG5cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZyh0c2spO1xyXG5cclxuLy8gY29uc3QgdHNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay11bFwiKTtcclxuLy8gdHNrQ29udGVudC5hcHBlbmQodHNraHRtbE9iaik7XHJcbi8vIHRza2h0bWxPYmogPSBjcmVhdGVfdGFza19odG1sX29iamVjdCh0c2ssIDIyKTtcclxuXHJcbi8vIHRza0NvbnRlbnQuYXBwZW5kKHRza2h0bWxPYmopOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==