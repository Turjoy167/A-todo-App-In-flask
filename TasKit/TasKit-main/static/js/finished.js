function checkEmptyList() {
    if (document.getElementById("tasks-section").children.length == 0) {
        $("#no-task-indicator").fadeIn();
    } else {
        $("#no-task-indicator").fadeOut();
    }
}

function deleteTasks() {
    let input = document.getElementsByClassName("checkbox-input");
    if (input.length > 0) {
        setTimeout(() => {
            $.ajax({
                url: "deleteCompleted",
                type: "GET",
                success: function () {
                    $("label").fadeOut();
                    $("label").parent().remove();
                    checkEmptyList();
                },
            });
        }, 1000);
    }
}

function redoTasks() {
    let input = document.getElementsByClassName("checkbox-input");
    if (input.length > 0) {
        setTimeout(() => {
            $.ajax({
                url: "markIncomplete",
                type: "GET",
                success: function () {
                    $("label").fadeOut();
                    $("label").parent().remove();
                    checkEmptyList();
                },
            });
        }, 1000);
    }
}

$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
    });
    checkEmptyList();
    // console.log($("tasks-section").children()["length"]);
});
