//存放遍历出来的DOM节点
var orderQueue = [];
var inAnimation = false;

//先序遍历
function preorder(root) {
    orderQueue.push(root);
    if(root.firstElementChild != null)
        preorder(root.firstElementChild);
    if(root.lastElementChild != null)
        preorder(root.lastElementChild);
}
//中序遍历
function inorder(root) {
    if(root.firstElementChild != null)
        inorder(root.firstElementChild);
    orderQueue.push(root);
    if(root.lastElementChild != null)
        inorder(root.lastElementChild);
}
//后序遍历
function postorder(root) {
    if(root.firstElementChild != null)
        postorder(root.firstElementChild);
    if(root.lastElementChild !=null)
        postorder(root.lastElementChild);
    orderQueue.push(root);
}

function render() {
    if(inAnimation){
        alert("in animation");
        return;
    }
    inAnimation = true;
    var i = 0;
    orderQueue[i].style.backgroundColor = "blue";
    var showRet = setInterval(function () {
        i++;
        if(i >= orderQueue.length){
            clearInterval(showRet);
            orderQueue[orderQueue.length-1].style.backgroundColor="#fff";
            inAnimation = false;
            return;
        }
        orderQueue[i-1].style.backgroundColor = "#fff";
        orderQueue[i].style.backgroundColor = "blue";
    },500);
}

var rootNode = document.getElementById("large");
window.onload = function() {
    //按钮绑定事件
    document.getElementById("preorder").onclick = function () {
        preorder(rootNode);
        render();
    }
    document.getElementById("inorder").onclick = function () {
        inorder(rootNode);
        render();
    }
    document.getElementById("postorder").onclick = function () {
        postorder(rootNode);
        render();
    }
}





