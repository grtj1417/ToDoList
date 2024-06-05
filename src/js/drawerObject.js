
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
    ) {
        this.title = title;
        this.date = date;
        this.taskPriority = taskPriority;
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



export { Project, Task, TaskPriority };