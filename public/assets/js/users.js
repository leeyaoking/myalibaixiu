// 将用户列表展示出来

let newArr = new Array();

$.ajax({
    type: 'get',
    url: '/users',
    success: function (res) {
        newArr = res;
        render(newArr);
    }
})

function render(res) {
    let html = template('userTpl', {
        list: res
    });
    $('tbody').html(html);
}

// console.log(121);

$('#addBtn').on('click', function () {
    console.log($('#userForm').serialize());
    $.ajax({
        url: '/users',
        type: 'post',
        data: $('#userForm').serialize(),
        success: function (res) {
            newArr.join(res);
            render(newArr);
        }
    })
})