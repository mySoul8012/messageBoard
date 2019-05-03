/*
* 轮播图
* */
// 定义常用的
let index = 0;   // 当前循环
let pics = document.getElementById("pice").getElementsByTagName("div");
let dots = document.getElementById("dots").getElementsByTagName("span");
// 工具函数
// 图片更改函数 传入id
function changeIdImg(id) {
    // id判断
    id = id < 0 ? 0 : id;
    id = id >= pics.length ? pics.length - 1 : id;
    // 之前清空
    for(let i = 0 ; i < pics.length; i++){
        pics[i].style.display = "none"
    }
    // 设置id
    pics[id].style.display = "block";
    // 设置index
    index = id;
    // 同步圆点
    this.changeDot();
}

// 圆点函数  根据当前index更改圆点
function changeDot() {
    // 之前的清空
    for(let i = 0; i < dots.length; i++){
        dots[i].className = "";
    }
    // 更改css
    dots[index].className = "active";
}

// 根据圆点更改index
function isNode(node) {
    for(let i = 0; i < dots.length; i++){
        if(dots[i] == node){
            return i;
        }
    }
    return 0;
}

// 图片更改函数 每次调用这个函数,图片会循环进入下一个,index进行更改
function changeImg() {
    index++;
    index = index>pics.length - 1?0:index;
    // 调用函数更改
    this.changeIdImg(index);
}



// 前进函数
function left() {
    changeIdImg(--index);
}

// 后退函数
function right() {
    changeIdImg(++index);
}

// 定时
changeIdImg(index);
setInterval(() => {
    this.changeImg();
    }, 10000);

// 绑定左右两边事件
document.getElementById("button-left").onclick = () => {
    left();
};

document.getElementById("button-right").onclick = () => {
    right();
}
// 绑定单击圆点事件
document.getElementById("dots").onclick = (event) => {
    let span = event.path[0];
    // 更改图片
    this.changeIdImg(this.isNode(span))
}


/*
* 菜单栏
* */
$(".menu-left div").hover(
    (e) => {
        // 获取第几个元素
        let indexDom = $(".menu-left div").index(e.currentTarget);
        // 元素显示
        $("#menu-left-content").find(".menu-left-content").eq(indexDom).show().hover(
            (e) => {
                $(e.currentTarget).show();
            }
        ).mouseleave(
            (e) => {
                $(e.currentTarget).hide();
            }
        )
        // 高亮显示
        $(e.currentTarget).css(
            "background", "rgb(103, 103, 103)"
        )

    }
).mouseleave(
    (e) => {
        // 元素隐藏
        $(".menu-left-content").hide();
        // 显示回退
        $(e.currentTarget).css(
            "background", ""
        )
    }
);

